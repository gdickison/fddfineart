import Link from "next/link"

const NavBar = () => {
  const navMenuItems = [
    'About the Artist',
    'Works',
    'Galleries',
    'Contact the Artist',
    'Newsletter',
    'Menu Item',
    'Menu Item'
  ]

  return (
    <nav className="border-y border-slate-50 block">
      <div className="hidden curser-pointer">Hamburger</div>
      <ul className="touch-pan-y relative my-3 p-0 list-none">
        {navMenuItems.map(item => {
          return (
            <li key={item} className="px-6 whitespace-nowrap relative inline-block text-slate-300 transition ease hover:bg-slate-400 hover:text-slate-50 duration-200">
              <Link href="#">
                <a className="font-base font-thin uppercase tracking-wide relative block">
                  {item}
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