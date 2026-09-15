import { bookingLogos, socialLogos, fullLogo, villaIcon } from './assets';

export const matterportModelId = import.meta.env.VITE_MATTERPORT_MODEL_ID || 'ax6xEJKerYE';
export const matterportPreviewImage = '/assets/villa-preview.jpg';

export const bookingPlatforms = [
  {
    name: 'Airbnb',
    logo: bookingLogos.airbnb,
    url: 'https://fr.airbnb.ch/rooms/1429323064798460748?_set_bev_on_new_domain=1764757889_EAYmQ3NWViMGQ1ZD&set_everest_cookie_on_new_domain=1764757889.EAOGQ5MTk4MDhlN2ZlNz.8qTjOo8pz-oYO-l98N1KrbQO504EhKDOQEoQ7Z8BSrE&source_impression_id=p3_1768755396_P3u2qSKHnYEjJWUO',
    footerUrl: 'https://fr.airbnb.ch/rooms/1429323064798460748',
    pricingAlt: 'Airbnb Logo',
    footerAlt: 'Airbnb',
    pricingLogoClassName: 'h-auto w-auto object-contain max-h-12 max-w-[160px]'
  },
  {
    name: 'Booking.com',
    logo: bookingLogos.booking,
    url: 'https://www.booking.com/hotel/id/villa-orea-by-balisuperhost.fr.html?label=gen173nr-10CAsoaEIbdmlsbGEtb3JlYS1ieS1iYWxpc3VwZXJob3N0SAlYBGgsiAEBmAEzuAEHyAEP2AED6AEB-AEBiAIBqAIBuALUobTLBsACAdICJGZiZGMxMWQ0LWIxOGEtNGJhMC04NjRhLTVmOTUzZWFhOTVkZdgCAeACAQ&sid=d3f57571c168e6a193ae1d6875e65d47&dist=0&keep_landing=1&sb_price_type=total&type=total&',
    footerUrl: 'https://www.booking.com/hotel/id/villa-orea-by-balisuperhost.fr.html',
    pricingAlt: 'Booking.com Logo',
    footerAlt: 'Booking.com',
    pricingLogoClassName: 'h-auto w-auto object-contain max-h-12 max-w-[200px]'
  },
  {
    name: 'Trip.com',
    logo: bookingLogos.trip,
    url: 'https://us.trip.com/hotels/cityname-hotel-detail-128944828/hotelname/',
    footerUrl: 'https://us.trip.com/hotels/cityname-hotel-detail-128944828/hotelname/',
    pricingAlt: 'Trip.com Logo',
    footerAlt: 'Trip.com',
    pricingLogoClassName: 'h-auto w-auto object-contain max-h-12 max-w-[200px]'
  },
  {
    name: 'Marriott',
    logo: bookingLogos.marriott,
    url: 'https://homes-and-villas.marriott.com/en/properties/40527181-seminyak-brand-new-villa-br-with-private-pool-in-seminyak?gallery_view_enabled=false',
    footerUrl: 'https://homes-and-villas.marriott.com/en/properties/40527181-seminyak-brand-new-villa-br-with-private-pool-in-seminyak',
    pricingAlt: 'Marriott Homes & Villas Logo',
    footerAlt: 'Marriott Homes & Villas',
    pricingLogoClassName: 'h-auto w-auto object-contain max-h-10 max-w-[200px]'
  },
  {
    name: 'BaliSuperHost',
    logo: bookingLogos.baliSuperHost,
    url: 'https://balisuperhost.guestybookings.com/en/properties/6833ee6140f34500124c6011',
    footerUrl: 'https://balisuperhost.guestybookings.com/en/properties/6833ee6140f34500124c6011',
    pricingAlt: 'BaliSuperHost Logo',
    footerAlt: 'BaliSuperHost',
    pricingLogoClassName: 'h-auto w-auto object-contain max-h-14 max-w-[180px]'
  }
];

export const socialLinks = [
  {
    name: 'Instagram',
    logo: socialLogos.instagram,
    url: 'https://instagram.com'
  },
  {
    name: 'Facebook',
    logo: socialLogos.facebook,
    url: 'https://facebook.com'
  }
];

export { fullLogo, villaIcon };
