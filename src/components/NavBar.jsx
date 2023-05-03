import {useState} from 'react'
import {FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 bg-gray-700/80 text-white'>
      <ul className='hidden sm:flex px-4'>
        <li><a href="#home">Home</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#deals">Deals</a></li>
        <li><a href="#conatact">Contact</a></li>
      </ul>

      <div className='flex justify-between'>
        <FaFacebook className='mx-4'/>
        <FaInstagram className='mx-4'/>
        <FaTwitter className='mx-4'/>
      </div>
      {/* Hamburger*/}
      <div className='z-10 sm:hidden' onClick={handleNav}>
        {nav ? <FaTimes size={25} className='mr-4 cursor-pointer'/>
       : <FaBars size={25} className='mr-4 cursor-pointer'/>
 }
      </div>
      {/* Mobile Menu*/}
      <div className={nav ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col' : 'absolute top-0 h-screen left-[-100%] ease-out duration-600'}>
      <ul className='w-full h-full text-center pt-12 space-y-8 font-bold'>
        <li><a href="#home">Home</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#deals">Deals</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </div>
    </div>
  )
}

export default NavBar
