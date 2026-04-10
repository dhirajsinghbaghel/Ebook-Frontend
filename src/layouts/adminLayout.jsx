import { Link, Outlet } from "react-router-dom";

import { RiLogoutCircleRLine ,RiMenuLine,RiHome7Fill,RiBookletLine   ,RiInfoCardFill ,RiSettings4Line    } from "@remixicon/react";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen w-full bg-linear-to-t from-sky-500">
      
      {/* Left Sidebar */}
      <div className="w-[15%] bg-blue-400 transition-all duration-300 fixed h-full">
        <div className="flex flex-col p-4 text-white">
          <Link to="/home">
          <button className="w-full p-3 rounded-2xl flex  justify-center items-center gap-2  my-2 hover:bg-rose-500"><RiHome7Fill  /> Home</button>
            </Link>
            <Link to="/home">
          <button className="w-full p-3 rounded-2xl flex  justify-center items-center gap-2  my-2 hover:bg-rose-500"><RiInfoCardFill  /> About</button>
            </Link>
            <Link to="/admin/ebook">
          <button className="w-full p-3 rounded-2xl flex  justify-center items-center gap-2  my-2 hover:bg-rose-500"><RiBookletLine  /> Ebook</button>
            </Link>
            <Link to="/home">
          <button className="w-full p-3 rounded-2xl flex  justify-center items-center gap-2  my-2 hover:bg-rose-500"><RiSettings4Line  /> Setting</button>
            </Link>
            
          
        </div>
      </div>

      {/* Right Content Area */}
      <div className="ml-[15%] w-[85%] bg-white transition-all duration-300">
        
        {/* Top Header */}
        <header className="fixed top-0 left-[15%] right-0 h-[50px] bg-blue-400 flex items-center px-4 shadow-md">
          <div className="w-full flex justify-between items-end">
            <h1 className="hover:cursor-pointer"> <span className="font-semibold"><RiMenuLine className="text-white "/></span> </h1>
           
           <h1 className="hover:cursor-pointer"> <span className="font-semibold">< RiLogoutCircleRLine className="text-white hover:bg-amber-300 rounded-2xl text-rose-600"/></span>
          </h1>
          </div>
          
        </header>

        {/* Page Content */}
        <main className="pt-[70px] p-4 min-h-screen">
          <Outlet/>
        </main>
        
      </div>
    </div>
  );
};

export default AdminLayout;
