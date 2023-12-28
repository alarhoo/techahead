'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'

const Nav = () => {
  const userName = localStorage.getItem('user') ? localStorage.getItem('user') : ''
  useEffect(() => {
    const init = async () => {
      const { Collapse, Dropdown, initTE } = await import('tw-elements')
      initTE({ Collapse, Dropdown })
    }
    init()
  }, [])
  return (
    <nav className='flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4'>
      <div className='container mx-auto'>
        <div className='flex w-full flex-wrap items-center justify-between px-3'>
          <button
            className='block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden'
            type='button'
            data-te-collapse-init
            data-te-target='#navbarSupportedContent1'
            aria-controls='navbarSupportedContent1'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='[&>svg]:w-7'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='h-7 w-7'>
                <path
                  fillRule='evenodd'
                  d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
          </button>

          <div
            className='!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto'
            id='navbarSupportedContent1'
            data-te-collapse-item
          >
            <a
              className='mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0'
              href='#'
              title='Test'
            >
              <Image
                src='https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp'
                height={25}
                width={25}
                alt='logo'
              />
            </a>
            <ul className='list-style-none mr-auto flex flex-col pl-0 lg:flex-row' data-te-navbar-nav-ref>
              <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
                <a
                  className='text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400'
                  href='#'
                  data-te-nav-link-ref
                >
                  Dashboard
                </a>
              </li>
              <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
                <a
                  className='text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400'
                  href='#'
                  data-te-nav-link-ref
                >
                  Team
                </a>
              </li>
              <li className='mb-4 lg:mb-0 lg:pr-2' data-te-nav-item-ref>
                <a
                  className='text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400'
                  href='#'
                  data-te-nav-link-ref
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div className='relative flex items-center'>
            <div className='relative' data-te-dropdown-ref data-te-dropdown-alignment='end'>
              <ul
                className='absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block'
                aria-labelledby='dropdownMenuButton1'
                data-te-dropdown-menu-ref
              >
                <li>
                  <a
                    className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30'
                    href='#'
                    data-te-dropdown-item-ref
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30'
                    href='#'
                    data-te-dropdown-item-ref
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30'
                    href='#'
                    data-te-dropdown-item-ref
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <div className='relative flex gap-2' data-te-dropdown-ref data-te-dropdown-alignment='end'>
              <p>{userName}</p>
              <a
                className='hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none'
                href='#'
                id='dropdownMenuButton2'
                role='button'
                data-te-dropdown-toggle-ref
                aria-expanded='false'
                title='Test'
              >
                <Image
                  src='https://tecdn.b-cdn.net/img/new/avatars/2.jpg'
                  height={25}
                  width={25}
                  alt='logo'
                  className='rounded-full h-6 w-6'
                />
              </a>
              <ul
                className='absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block'
                aria-labelledby='dropdownMenuButton2'
                data-te-dropdown-menu-ref
              >
                <li>
                  <a
                    className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30'
                    href='#'
                    data-te-dropdown-item-ref
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30'
                    href='#'
                    data-te-dropdown-item-ref
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className='block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30'
                    href='#'
                    data-te-dropdown-item-ref
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
