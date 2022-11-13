/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react'
import Link from 'next/link'
import Cart from './Cart'
import { useStateContext } from '../context/StateContext'
import { useRouter } from 'next/router'
import { Popover, Transition } from '@headlessui/react'
import { navMenuItems } from '../lib/utils'

const NavBar = () => {
  const router = useRouter()
  const { showCart, setShowCart, totalQuantities } = useStateContext()

  return (
    <Popover className="relative">
      <nav className="mx-auto px-4 md:px-0 md:border-y md:border-gray-200">
        <div className="flex justify-center md:justify-between items-center md:py-6">
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center focus:outline-none">
              <span className="sr-only">Open menu</span>
              <img src="/menu_black_24dp.svg" className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex font-libre tracking-wider justify-between md:flex-1">
            {navMenuItems.map(item => {
              return (
                <Link key={item.itemTitle} href={item.itemLink} legacyBehavior>
                  <a className={`py-2 px-4 whitespace-nowrap text-sm lg:text-navland font-medium ${router.pathname === item.itemLink ? 'border-b border-gray-200' : ''}`}>
                    {item.itemTitle}
                  </a>
                </Link>
              )
            })}
            {totalQuantities > 0 &&
              <div className="flex items-center px-6 whitespace-nowrap text-gray-600 transition ease hover:bg-gray-100 duration-200 hover:cursor-pointer" onClick={e => setShowCart(prev => !prev)}>
                <div className="relative">
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs h-4 w-4 mt-1 bg-gray-200 rounded-full">{totalQuantities}</span>
                  <img src="/shopping_bag.svg" alt="shopping bag" className="min-h-[2rem] min-w-[2rem] h-9 lg:h-12 opacity-40"/>
                </div>
              </div>
            }
          </div>
        </div>
        {showCart &&
          <Cart/>
        }
      </nav>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <nav focus className="absolute top-0 inset-x-0 transition transform origin-top-right md:hidden z-10 bg-gray-50">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5">
              <div className="flex items-center justify-end">
                <div className="-mr-2">
                  <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center focus:outline-none">
                    <span className="sr-only">Close menu</span>
                    <img src="/close_black_24dp.svg" className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="pb-3 px-5">
              <div className="grid grid-cols-1 gap-y-2 font-libre tracking-wider">
              {navMenuItems.map(item => {
                return (
                  <Link key={item.itemTitle} href={item.itemLink} legacyBehavior>
                    <a className={`${router.pathname === item.itemLink ? 'bg-gray-200' : ''}`}>
                      {item.itemTitle}
                    </a>
                  </Link>
                )
              })}
              {totalQuantities > 0 &&
                <div className="flex items-center justify-center px-6 whitespace-nowrap text-gray-600 transition ease hover:cursor-pointer" onClick={e => setShowCart(prev => !prev)}>
                  <div className="relative">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xs h-4 w-4 mt-1 bg-gray-200 rounded-full">{totalQuantities}</span>
                    <img src="/shopping_bag.svg" alt="shopping bag" className="min-h-[2rem] min-w-[2rem] md:h-12 opacity-40"/>
                  </div>
                </div>
              }
              </div>
            </div>
          </div>
          {showCart &&
            <Cart/>
          }
        </nav>
      </Transition>
    </Popover>
  )
}

export default NavBar

