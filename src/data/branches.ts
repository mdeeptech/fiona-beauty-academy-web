export interface Branch {
  slug: string;
  name: string;
  image: string;
  address: string;
  contact: string;
  mapsUrl: string;
  instagramUrl: string;
  instagramHandle: string;
}

export const branches: Branch[] = [
  {
    slug: 'guwahati',
    name: 'Guwahati Branch',
    image: '/Guwahati.jpeg',
    address: 'Fiona Beauty Academy, Lokhra Chariali, Opposite Hero Showroom, Guwahati-40',
    contact: '+91 80112 98779',
    mapsUrl: 'https://maps.google.com/?q=Lokhra+Chariali+Guwahati',
    instagramUrl: 'https://www.instagram.com/fionacademy.guwahati/',
    instagramHandle: '@fionacademy.guwahati'
  },
  {
    slug: 'tinsukia',
    name: 'Tinsukia Branch',
    image: '/tinsukia.avif',
    address: 'Ambika Giri Rai Chowdhury Path, Near Hotel Skyline, Rajendra Nagar, Hijiguri, Tinsukia, Assam 786126',
    contact: '+91 80112 98779',
    mapsUrl: 'https://maps.google.com/?q=Hijiguri+Tinsukia',
    instagramUrl: 'https://www.instagram.com/fionabeautyacademy/',
    instagramHandle: '@fionabeautyacademy'
  }
];
