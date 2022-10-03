/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import Cart from "./Cart"
import { useStateContext } from "../context/StateContext"
import { navMenuItems } from "../lib/utils"

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext()

  return (
    <nav className="border-y border-gray-100 block">
      <div className="hidden curser-pointer">Hamburger</div>
      <ul className="flex justify-between touch-pan-y relative h-11 p-0 list-none">
        {navMenuItems.map(item => {
          return (
            <Link key={item.itemTitle} href={item.itemLink}>
              <li  className="flex items-center h-full px-6 whitespace-nowrap relative text-gray-600 transition ease hover:bg-gray-100 duration-200 hover:cursor-pointer">
                <a className="font-libre uppercase tracking-wide relative block">
                  {item.itemTitle}
                </a>
              </li>
            </Link>
          )
        })}
        {totalQuantities > 0 &&
          <li className="flex items-center h-full px-6 whitespace-nowrap relative text-gray-600 transition ease hover:bg-gray-100 duration-200 hover:cursor-pointer" onClick={e => setShowCart(prev => !prev)}>
            <div className="relative">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs h-4 w-4 mt-1 bg-gray-200 rounded-full">{totalQuantities}</span>
              <img src="/shopping_bag.svg" alt="shopping bag" className="min-h-[2rem] min-w-[2rem] md:h-12 opacity-40"/>
            </div>
          </li>
        }
      </ul>
      {showCart &&
        <Cart/>
      }
    </nav>
  )
}

export default NavBar