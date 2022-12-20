const navMenuItems = [
  // {
  //   itemTitle: 'Home',
  //   itemLink: '/'
  // },
  {
    itemTitle: 'Originals For Sale',
    itemLink: '/originals_for_sale'
  },
  {
    itemTitle: 'Prints',
    itemLink: '/print_shop'
  },
  {
    itemTitle: 'Illustrations',
    itemLink: '/illustrations'
  },
  {
    itemTitle: 'Contact the Artist',
    itemLink: '/contact-the-artist'
  },
  {
    itemTitle: 'About',
    itemLink: '/about'
  },
  // {
  //   itemTitle: 'Newsletter',
  //   itemLink: '/newsletter'
  // },
  {
    itemTitle: 'Galleries',
    itemLink: '/galleries'
  }
]

const shimmer = (w, h) => `<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect width="${w}" height="${h}" fill="#b1b1b1" />
    <rect id="r" width="${w}" height="${h}" fill="#b1b1b1" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export {
  navMenuItems,
  shimmer,
  toBase64
}

