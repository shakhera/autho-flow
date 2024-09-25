import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Menubar className="bg-white shadow-md flex justify-between items-center md:px-6 py-8">
      {/* Logo Section */}
      <div className="flex justify-between items-center px-6 py-4 top-6">
        <MenubarMenu>
          <MenubarTrigger className="text-xl font-semibold">
            <Link to="/" className="hover:text-blue-600">
              Logo
            </Link>
          </MenubarTrigger>
        </MenubarMenu>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu Items */}
      <div
        className={` flex flex-col md:flex-row justify-between items-center  ${
          isOpen ? "flex" : "hidden"
        } md:flex mt-48 md:mt-0 bg-gray-200 py-3 border-t border-gray-200 md:bg-transparent md:border-none`}
      >
        {/* Home Menu */}
        <MenubarMenu>
          <MenubarTrigger className="text-lg">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </MenubarTrigger>
        </MenubarMenu>

        {/* About Menu */}
        <MenubarMenu>
          <MenubarTrigger className="text-lg">
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>
          </MenubarTrigger>
        </MenubarMenu>

        {/* Login Menu */}
        <MenubarMenu>
          <MenubarTrigger className="text-lg">
            <Link to="/login" className="hover:text-blue-600">
              Login
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      </div>
    </Menubar>
  );
};

export default Navbar;
