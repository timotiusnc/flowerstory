import Link from 'next/link'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

import logo from '@/images/logo.png'
import Image from 'next/image'
import { InstagramSvg } from './logo/InstagramSvg'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="py-16">
          <div className="flex items-center justify-center">
            <Image src={logo} alt="FlowerStory Logo" className="h-10 w-auto" />
            <span className="ml-2 rounded-lg  p-2 font-display text-lg uppercase lg:bg-transparent lg:p-0 lg:text-xl lg:backdrop-blur-none">
              FlowerStory
            </span>
          </div>

          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <NavLink href="#onsale">On Sale</NavLink>
              <NavLink href="#collections">Catalog</NavLink>
              <NavLink href="#testimonials">What They Said</NavLink>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <Link
              href="https://instagram.com/flowerstory_co"
              target="_blank"
              rel="noopener"
              className="group"
              aria-label="FlowerStory on Instagram"
            >
              <InstagramSvg className="h-6 w-6 fill-slate-500" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright &copy; {new Date().getFullYear()} Flowerstory. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
