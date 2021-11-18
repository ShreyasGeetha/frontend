import { Fragment, useEffect } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, ShoppingCartIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import Login from '../Forms/Login/LoginButton';
import Signup from '../Forms/Signup/SignupButton';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/userActions';


const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Header = () => {

  const userLogin = useSelector(state => state.userLogin)
  const cart = useSelector(state => state.cart);
  const {cartItems} = cart
  var { userInfo, isUserloggedIn } = userLogin
  const dispatch = useDispatch()

  useEffect(() => {
    if (userInfo) {
    isUserloggedIn = true;
  } else {
    isUserloggedIn = false;
  }
  },[userLogin])
 

  const signOut = async () => {
    console.log('print')
    await dispatch(logout())
    
  }
  
  return (
    <>
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ isopen }) =>
          classNames(
            isopen ? 'fixed inset-0 z-40 overflow-y-auto' : '',
            'bg-header shadow-sm lg:static lg:overflow-y-visible'
          )
        }
      >
        {({ isopen }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div className="flex md:static md:left-0 md:inset-y-0  lg:static xl:col-span-2">
                  <div className="flex-shrink-0 flex flex-wrap items-center">
                    <Link href="/">
                      <a>
                        <img
                          className="block h-10 w-auto text-white"
                          src="/Header/images/logo1.svg"
                        />
                        {/* <img className="block object-cover h-9 w-full " src="/Header/images/LogoWithTitle.png" /> */}
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                    <div className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="flex-row-reverse pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                          <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </div>
                        <div>
                          <input
                            id="search"
                            name="search"
                            className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            placeholder="Search"
                            type="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open menu</span>
                    {isopen ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  
                  {isUserloggedIn && <div>
                    <Link href="/cart/Cart">
                    <a             
                      className="ml-5 group flex-shrink-0  rounded-full p-1 text-gray-400 hover:text-gray-500 "
                    >
                                                
                        <button className="py-3.5 px-3.5 relative border-2 border-transparent text-gray-50 rounded-full hover:text-white  group-hover:bg-white focus:outline-none focus:text-gray-50 transition duration-150 ease-in-out" aria-label="Cart">
                          <svg className="h-6 w-6 group-hover:text-header" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                          </svg>
                          <span class="absolute  inset-0 object-right-top -mr-7 -mr-1 -mt-1">
                            <div class="inline-flex group-hover:text-header
                              items-center   rounded-full  text-sm font-semibold leading-4  text-white">
                              {cartItems.length}
                            </div>
                          </span>
                      </button>
                    </a>
                    </Link>
                  </div>}
                  {!isUserloggedIn && <Login />}
                  {!isUserloggedIn && <Signup />}
                  {/* Profile dropdown */}
                  {isUserloggedIn && <Menu as="div" className="flex-shrink-0 relative ml-5">
                    <div>
                      <Menu.Button className="bg-white rounded-full flex focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-50">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                      
                        <div className="hover:bg-gray-100">
                        <button
                          type="button"                          
                          className="block py-2 px-4 text-sm text-gray-700 ">
                          Your Profile
                        </button>
                        </div> 
                        <div className="hover:bg-gray-100">
                        <button
                          type="button"                          
                          className="block py-2 px-4 text-sm text-gray-700 ">
                          Settings
                        </button>
                        </div> 
                        <div className="hover:bg-gray-100">
                        <Link href="/">
                          <a>
                            <button
                                type="button"
                                onClick={signOut}  
                              className="block py-2 px-4 text-sm text-gray-700 ">
                              Sign out
                            </button>
                          </a>
                        </Link>
                        </div>                        
                      </Menu.Items>
                    </Transition>
                  </Menu> }                 
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              
              {isUserloggedIn &&
                <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="max-w-3xl mx-auto px-4 flex items-center sm:px-6">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{userInfo.name}</div>
                    <div className="text-sm font-medium text-gray-500">{userInfo.email}</div>
                  </div>                  
                </div>
                <div className="mt-3 max-w-3xl mx-auto px-2 space-y-1 sm:px-4">
                  <button
                    type="button"
                    
                    className="inline-flex items-center ml-2 px-3 py-3.5 border border-transparent  text-xs font-extrabold rounded-full shadow-sm text-white bg-header hover:bg-white hover:text-header ">
                    Signup
                  </button>
                  {/* {userNavigation.map((item) => (
                    <a
                      key={item.name}                      
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))} */}
                </div>
              </div>}
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}

export default Header;