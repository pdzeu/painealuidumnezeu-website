export const site = {
  name: 'Pâinea lui Dumnezeu',
  tagline: 'Brutărie artizanală.',
  email: 'info@painealuidumnezeu.ro',
  phones: [
    { label: '0722 80 70 40', href: 'tel:+40722807040' },
    { label: '0720 80 70 30', href: 'tel:+40720807030' },
  ],
  addresses: [
    {
      label: 'Șos. Gheorghe Ionescu Sisești, 50',
      maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Șoseaua Gheorghe Ionescu Sisești 50, București'),
    },
    {
      label: 'Strada Neagoe Vodă 56',
      maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Strada Neagoe Vodă 56, București'),
    },
  ],
  mapEmbed:
    'https://maps.google.com/maps?q=' +
    encodeURIComponent('Șoseaua Gheorghe Ionescu Sisești 50, București') +
    '&z=15&output=embed',
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=100087760159425',
    instagram: 'https://www.instagram.com/painealuidumnezeu_brutarie/',
  },
}

export const nav = [
  { href: '/', label: 'Acasă' },
  { href: '/meniu', label: 'Meniu' },
  { href: '/despre-noi', label: 'Despre noi' },
  { href: '/contact', label: 'Contact' },
]

export const hours = [
  { day: 'Luni', time: '9:00 – 19:00' },
  { day: 'Marți', time: '9:00 – 19:00' },
  { day: 'Miercuri', time: '9:00 – 19:00' },
  { day: 'Joi', time: '9:00 – 19:00' },
  { day: 'Vineri', time: '9:00 – 19:00' },
  { day: 'Sâmbătă', time: '9:00 – 16:00' },
  { day: 'Duminică', time: '9:00 – 16:00' },
]

export const homeGallery = [
  '/images/gallery/home-1.jpg',
  '/images/gallery/home-2.jpg',
  '/images/gallery/home-3.jpg',
  '/images/gallery/home-4.jpg',
  '/images/gallery/home-5.jpg',
]

export const aboutGallery = [
  '/images/gallery/about-1.jpg',
  '/images/gallery/home-2.jpg',
  '/images/gallery/about-3.jpg',
  '/images/gallery/about-4.jpg',
  '/images/gallery/about-5.jpg',
  '/images/gallery/home-3.jpg',
  '/images/gallery/about-7.jpg',
  '/images/gallery/about-8.jpg',
  '/images/gallery/about-9.jpg',
  '/images/gallery/about-10.jpg',
]

export const instagramPhotos = [1, 2, 3, 4, 5, 6].map((n) => `/images/instagram/${n}.jpg`)
