import { useState } from "react";
import { FormPratice } from "./components/form";
import { SideBar } from "./components/Sidebar";
import { Profile } from "./components/Profile";
import { Random } from "./components/Random";
import { DateCom } from "./components/DateCom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <FormPratice /> */}
      <div className="flex bg-gray-900">
        <SideBar />
        <div className="grid md:flex mt-32 w-3/4 bg-yellow-50">
          <div className="mb-10">
            <Profile />
          </div>
          <div className="">
            <Random />
          </div>
          <DateCom />
        </div>
      </div>
    </>
  );
}

export default App;
