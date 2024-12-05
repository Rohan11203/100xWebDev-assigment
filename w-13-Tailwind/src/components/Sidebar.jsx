import "../../public/vite.svg";

export const SideBar = () => {
  return (
    <div className="bg-white gap-5  h-screen w-1/8 ml-8 p-4 hidden md:block">
      <div className="flex justify-around mt-5 mb-6">
        <div className="bg-purple-700 cursor-pointer rounded-md h-10 p-2 w-26 font-bold text-white">Webinar.<span className="text-purple-300 ">gg</span></div>
        <div>
          <img src="vite.svg"></img>
        </div>
      </div>
      <div>
      <div className=" bg-slate-200 rounded-md p-2 flex justify-around mb-5">
            <h2>Home</h2>
           <img src="house-dash-fill.svg"></img>
          </div>
      </div>
      
      <div>
      <div className="flex justify-around p-2 mb-5">
            <h2>Webinar</h2>
            <img src="house-dash-fill.svg"></img>
          </div>
      </div>

      <div>
      <div className="flex justify-around p-2 mb-5">
            <h2>Billings</h2>
            <img src="house-dash-fill.svg"></img>
          </div>
      </div>

      <div>
      <div className="flex justify-around pl-8 p-2 mb-5">
            <h2>User Management</h2>
            <img className="pr-8" src="house-dash-fill.svg"></img>
          </div>
      </div>

      <div>
      <div className="flex justify-around p-2">
            <h2>Settings</h2>
            <img src="house-dash-fill.svg"></img>
          </div>
      </div>
    </div>
  );
};
