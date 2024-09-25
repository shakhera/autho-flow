import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <Menubar>
    <Menubar className="flex justify-between items-center px-6 py-8 bg-white shadow-md">
      {/* Logo Section */}
      <MenubarMenu>
        <MenubarTrigger className="text-xl font-semibold">
          <Link to="/" className="hover:text-blue-600">
            Logo
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <div className="flex space-x-6">
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

        {/* Optional Dropdown Menu */}
        {/* <MenubarMenu>
          <MenubarTrigger className="text-lg">More</MenubarTrigger>
          <MenubarContent className="bg-white border border-gray-200 shadow-lg">
            <MenubarItem className="hover:bg-gray-100">
              <Link to="/services">Services</Link>
            </MenubarItem>
            <MenubarItem className="hover:bg-gray-100">
              <Link to="/contact">Contact</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem className="hover:bg-gray-100">Settings</MenubarItem>
            <MenubarItem className="hover:bg-gray-100">Help</MenubarItem>
          </MenubarContent>
        </MenubarMenu> */}
      </div>
    </Menubar>
  );
};

export default Navbar;
