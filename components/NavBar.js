import Link from "next/link"

const NavBar = () => {
  const navMenuItems = [
    {
      itemTitle: 'Current Show: Inktober',
      itemLink: '/'
    },
    {
      itemTitle: 'Contact the Artist',
      itemLink: '#'
    },
    {
      itemTitle: 'About',
      itemLink: '#'
    },
    {
      itemTitle: 'Newsletter',
      itemLink: '#'
    },
    {
      itemTitle: 'Galleries',
      itemLink: '#'
    }
  ]

  return (
    <nav className="border-y border-slate-50 block">
      <div className="hidden curser-pointer">Hamburger</div>
      <ul className="flex justify-between touch-pan-y relative my-3 p-0 list-none">
        {navMenuItems.map(item => {
          return (
            <li key={item.itemTitle} className="px-6 whitespace-nowrap relative inline-block text-slate-300 transition ease hover:bg-slate-400 hover:text-slate-50 duration-200">
              <Link href={item.itemLink}>
                <a className="font-base font-thin uppercase tracking-wide relative block">
                  {item.itemTitle}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar