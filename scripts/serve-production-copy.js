import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { gzipSync } from 'zlib';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT || 3000);

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp'
};

const compressibleExtensions = new Set([
  '.html',
  '.js',
  '.css',
  '.json',
  '.txt',
  '.xml',
  '.svg'
]);

const getEtag = (stats) => `W/"${stats.size}-${Math.round(stats.mtimeMs)}"`;

const getCacheControl = (filePath) => {
  const fileName = path.basename(filePath);

  if (fileName === 'index.html') {
    return 'no-cache';
  }

  return 'public, max-age=0, must-revalidate';
};

const canGzip = (request, extension, body) => (
  body.length > 1024
  && compressibleExtensions.has(extension)
  && request.headers['accept-encoding']?.includes('gzip')
);

const resolveFilePath = (urlPath) => {
  const decodedPath = decodeURIComponent(urlPath.split('?')[0]);

  if (decodedPath === '/' || decodedPath === '/index.html') {
    return path.join(root, 'index.html');
  }

  if (decodedPath.startsWith('/assets/')) {
    return path.join(root, 'public', decodedPath);
  }

  if (decodedPath === '/robots.txt' || decodedPath === '/sitemap.xml') {
    return path.join(root, 'public', decodedPath);
  }

  return path.join(root, 'index.html');
};

const sendFile = async (request, response, filePath) => {
  try {
    const stats = await fs.stat(filePath);
    const etag = getEtag(stats);

    if (request.headers['if-none-match'] === etag) {
      response.writeHead(304, {
        'ETag': etag,
        'Cache-Control': getCacheControl(filePath)
      });
      response.end();
      return;
    }

    const body = await fs.readFile(filePath);
    const extension = path.extname(filePath);
    const shouldGzip = canGzip(request, extension, body);
    const responseBody = shouldGzip ? gzipSync(body) : body;
    const headers = {
      'Content-Type': contentTypes[extension] || 'application/octet-stream',
      'Cache-Control': getCacheControl(filePath),
      'ETag': etag,
      'Vary': 'Accept-Encoding'
    };

    if (shouldGzip) {
      headers['Content-Encoding'] = 'gzip';
    }

    response.writeHead(200, headers);
    response.end(responseBody);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
};

const server = http.createServer((request, response) => {
  sendFile(request, response, resolveFilePath(request.url));
});

server.listen(port, '127.0.0.1', () => {
  console.log(`Production copy available at http://127.0.0.1:${port}/`);
});
