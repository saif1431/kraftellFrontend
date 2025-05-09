import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to='/'>
            <img
              className="h-14 w-auto"
              src={logo}
              alt="Company Logo"
            />
            </NavLink>
          </div>

          {/* Desktop menu on the right */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to='/ManufacturerForm'
              className=" text-lg  text-black  transition-colors hover:text-gray-600"
            >
              Register As Manufacturer
            </NavLink>
            <NavLink to='/BuyerSignUpForm'
              className=" text-lg  text-black  transition-colors hover:text-gray-600"
            >
              Register As Buyer
            </NavLink>
            <NavLink to='/AdminLogin'
              className=" text-lg  text-black  transition-colors hover:text-gray-600"
            >
              Admin Login
            </NavLink>
            <NavLink to='/login'
              className=" text-lg  text-black  transition-colors hover:text-gray-600"
            >
              Login
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6 text-black" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <NavLink to='/ManufacturerForm'
              className="block text-lg  text-black  transition-colors hover:text-gray-600"
            >
              Register As Manufacturer
            </NavLink>
            <hr className='mt-4 border-gray-400' />
            <NavLink to='/BuyerSignUpForm'
              className="block text-lg  text-black  transition-colors hover:text-gray-600"
            >
              Register As Buyer
            </NavLink>
              <NavLink to='/AdminLogin'
              className=" block text-lg  text-black  transition-colors hover:text-gray-600"
            >
              Admin Login
            </NavLink>
            <hr className='mt-4 border-gray-400' />
            <NavLink to='/login'
              className=" text-lg  text-black  transition-colors hover:text-gray-600"
            >
              Login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;