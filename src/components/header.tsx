'use client'

import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false)
  return (
    <>
      <header className="absolute w-full z-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold tracking-tight text-white sm:text-3xl">
                LOGO
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={()=>setOpenNavbar(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/"
              className="text-sm font-semibold leading-6 text-white"
            >
              Home
            </Link>
            <Link
              href="/performance"
              className="text-sm font-semibold leading-6 text-white"
            >
              Performance
            </Link>
            <Link
              href="/scale"
              className="text-sm font-semibold leading-6 text-white"
            >
              Scale
            </Link>
            <Link
              href="/reliability"
              className="text-sm font-semibold leading-6 text-white"
            >
              Reliability
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          </div>
        </nav>

        <div className={`lg:hidden ${openNavbar ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="text-xl font-bold tracking-tight text-grey-900 sm:text-3xl">
                  LOGO
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-grey-900"
                onClick={()=>{setOpenNavbar(false)}}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-grey-900 hover:bg-gray-50"
                    onClick={()=>setOpenNavbar(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/performance"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-grey-900 hover:bg-gray-50"
                    onClick={()=>setOpenNavbar(false)}
                  >
                    Performance
                  </Link>
                  <Link
                    href="/scale"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-grey-900 hover:bg-gray-50"
                    onClick={()=>setOpenNavbar(false)}
                  >
                    Scale
                  </Link>
                  <Link
                    href="/reliability"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-grey-900 hover:bg-gray-50"
                    onClick={()=>setOpenNavbar(false)}
                  >
                    Reliability
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
