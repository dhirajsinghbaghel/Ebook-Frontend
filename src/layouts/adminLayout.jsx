import { useState } from "react"; // 1. Import useState
import { Link, Outlet } from "react-router-dom";
import { 
  RiLogoutCircleRLine, 
  RiMenuLine, 
  RiHome7Fill, 
  RiBookletLine, 
  RiInfoCardFill, 
  RiSettings4Line,
  RiCloseLine // Added a close icon for better UX
} from "@remixicon/react";

const AdminLayout = () => {
  // 2. State to manage sidebar visibility
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen w-full bg-slate-100">
      
      {/* Left Sidebar */}
      <div 
        className={`bg-blue-600 transition-all duration-300 fixed h-full  ${
          isOpen ? "w-[200px]" : "w-0 -left-[200px] md:left-0 md:w-[70px]"
        } overflow-hidden`}
      >
        <div className="flex flex-col p-4 text-white whitespace-nowrap">
          <Link title="Dashboard" to="/admin/dashboard">
            <button className="w-full p-3 rounded-2xl flex items-center gap-4 my-2 hover:bg-blue-500 transition-colors">
              <RiHome7Fill size={24} /> {isOpen && <span>Dashboard</span>}
            </button>
          </Link>
          <Link title="Users" to="/home">
            <button className="w-full p-3 rounded-2xl flex items-center gap-4 my-2 hover:bg-blue-500 transition-colors">
              <RiInfoCardFill size={24} /> {isOpen && <span>Users</span>}
            </button>
          </Link>
          <Link title="Ebook" to="/admin/ebook">
            <button className="w-full p-3 rounded-2xl flex items-center gap-4 my-2 hover:bg-blue-500 transition-colors">
              <RiBookletLine size={24} /> {isOpen && <span>Ebook</span>}
            </button>
          </Link>
          <Link title="Settings" to="/admin/setting">
            <button className="w-full p-3 rounded-2xl flex items-center gap-4 my-2 hover:bg-blue-500 transition-colors">
              <RiSettings4Line size={24} /> {isOpen && <span>Setting</span>}
            </button>
          </Link>
        </div>
      </div>

      {/* Right Content Area */}
      <div 
        className={`transition-all duration-300 w-full ${
          isOpen ? "md:ml-[200px]" : "md:ml-[70px]"
        }`}
      >
        
        {/* Top Header */}
        <header 
          className={`fixed top-0 right-0 h-[60px] bg-white border-b flex items-center px-6 transition-all duration-300 ${
            isOpen ? "left-[200px]" : "left-[70px]"
          }`}
        >
          <div className="w-full flex justify-between items-center">
            {/* 3. Toggle Button Trigger */}
            <button 
              onClick={toggleSidebar} 
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <RiMenuLine size={24} className="text-gray-700" />
            </button>
           
            <button className="flex items-center gap-2 text-rose-600 font-medium hover:bg-rose-50 p-2 rounded-lg transition-colors">
               <span>Logout</span>
               <RiLogoutCircleRLine size={24} />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="pt-[80px] p-6 min-h-screen">
          <Outlet/>
        </main>
        
      </div>
    </div>
  );
};

export default AdminLayout;