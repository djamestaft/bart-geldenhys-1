import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
      <div className='navbar text-blue-900 uppercase'>
        <ul className='navbar-list flex justify-evenly m-4 text-xs items-center'>
          <Link href="/"><a className="nav-link" href="">Home</a></Link>
          <Link href="/about"><a className="nav-link" href="">About</a></Link>
          <Link href="/gallery"><a className="nav-link" href="">Gallery</a></Link>
          <Link href="/"><a className="nav-link text-xl text-center font-bold" href="">Bart Geldenhys</a></Link>
          <Link href="/booking"><a className="nav-link" href="">Bookings</a></Link>
          <Link href="/faq"><a className="nav-link" href="">F.A.Q</a></Link>
          <Link href="/contact"><a className="nav-link" href="">Contact</a></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar