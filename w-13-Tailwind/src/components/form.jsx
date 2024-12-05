
export const FormPratice = () => {
  return ( 
    <div className="flex items-center justify-center bg-blue-950 h-screen">
      <div className="bg-slate-800 p-4 rounded h-2/4">
        <div className="flex justify-center ">
          <h2 className="pb-12 text-xl font-bold text-white">
            <span className="text-blue-300">Webinar</span>.gg
          </h2>
        </div>

        <div className="flex justify-center pb-12">
          <h3 className="text-xl text-white">Verify your Age</h3>
        </div>
        

        <p className="text-xs pb-8 text-white">Please Confirm your birth year. This data will not be sotred</p>
        
        
          <input className="rounded-md outline-none ml-12 mb-10 bg-blue-200 h-8 pl-4" type="text" placeholder="22/1/2025"></input>
        
        <br></br>
        <button className="bg-teal-400 rounded h-10 w-8/12 ml-10">continue</button>
      </div>
    </div>
  )
}