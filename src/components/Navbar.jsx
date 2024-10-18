import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className='container flex items-center justify-between py-7'>
        <div>
            <img src={logo} alt="Quickmed" />
        </div>
        <nav>
            <ul className='flex items-center gap-10'>
                <li>Features</li>
                <li>Company</li>
                <li>
                    How It Works
                </li>
                <li>Contact</li>
            </ul>
        </nav>
        <button className='bg-gradient-to-b from-[#40A2B5] to-[#2F7785] text-white rounded-[8.4px] px-6 py-3'>
            Get Started
        </button>
    </div>
  )
}

export default Navbar