import dsc06240 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/2. RESIZE/DSC06240.jpg';
import dsc06219 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/2. RESIZE/DSC06219.jpg';
import dsc06206 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/2. RESIZE/DSC06206.jpg';
import dsc06104 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/2. RESIZE/DSC06104.jpg';
import dsc06045 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/2. RESIZE/DSC06045.jpg';
import img3947 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/IMG_3947-HDR.jpg';
import img3949 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/IMG_3949-HDR-2.jpg';
import img4031 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/IMG_4031-HDR.jpg';
import img4044 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/IMG_4044-HDR.jpg';
import img4048 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/IMG_4048-HDRE.jpg';
import img4050 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/IMG_4050-HDR-Edit.jpg';
import img5858 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/IMG_5858-HDR-1.jpg';
import img5866 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/IMG_5866-1.jpg';
import img5873 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/IMG_5873-HDR-1.jpg';
import img5878 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/IMG_5878-HDR-1.jpg';
import dsc05950 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/DSC05950.jpg';
import dsc06021 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/DSC06021.jpg';
import dsc06029 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/DSC06029.jpg';
import dsc06146 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/DSC06146.jpg';
import dsc06156 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/DSC06156.jpg';
import img4018 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/IMG_4018.jpeg';
import img4032 from '../assets/250428 Villa Orea-20250503T171234Z-001/250428 Villa Orea/3. NEW/IMG_4032-HDR.jpeg';

const galleryImages = [
  { id: 1, src: dsc06240 },
  { id: 2, src: dsc06219 },
  { id: 3, src: dsc06206 },
  { id: 4, src: dsc06104 },
  { id: 5, src: dsc06045 },
  { id: 6, src: img3947 },
  { id: 7, src: img3949 },
  { id: 8, src: img4031 },
  { id: 9, src: img4044 },
  { id: 10, src: img4048 },
  { id: 11, src: img4050 },
  { id: 12, src: img5858 },
  { id: 13, src: img5866 },
  { id: 14, src: img5873 },
  { id: 15, src: img5878 },
  { id: 16, src: dsc05950 },
  { id: 17, src: dsc06021 },
  { id: 18, src: dsc06029 },
  { id: 19, src: dsc06146 },
  { id: 20, src: dsc06156 },
  { id: 21, src: img4018 },
  { id: 22, src: img4032 }
];

const withThumbnail = (image) => ({
  ...image,
  thumbnailSrc: `/assets/gallery-thumbnails/${image.id}.webp`
});

export default galleryImages.map(withThumbnail);
