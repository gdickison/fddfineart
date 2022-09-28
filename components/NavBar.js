import Link from "next/link"

const NavBar = () => {
  const navMenuItems = [
    {
      itemTitle: 'Inktober',
      itemLink: '/'
    },
    {
      itemTitle: 'Contact the Artist',
      itemLink: '/contact-the-artist'
    },
    {
      itemTitle: 'About',
      itemLink: '/about'
    },
    {
      itemTitle: 'Newsletter',
      itemLink: '/newsletter'
    },
    {
      itemTitle: 'Galleries',
      itemLink: '/gallery'
    }
  ]

  return (
    <nav className="border-y border-gray-100 block">
      <div className="hidden curser-pointer">Hamburger</div>
      <ul className="flex justify-between touch-pan-y relative h-11 p-0 list-none">
        {navMenuItems.map(item => {
          return (
              <Link key={item.itemTitle} href={item.itemLink}>
                <li  className="flex items-center h-full px-6 whitespace-nowrap relative text-gray-600 transition ease hover:bg-gray-100 duration-200 hover:cursor-pointer">
                  <a className="font-base font-thin uppercase tracking-wide relative block">
                    {item.itemTitle}
                  </a>
                </li>
              </Link>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar