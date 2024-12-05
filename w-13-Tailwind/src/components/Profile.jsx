import "../../public/vite.svg"
import  Prasad  from "../../src/assets/prasad_cchutiya.jpg"
export const Profile = () => {
  return (
    <div className=" grid place-items-center m-5  bg-white w-64 h-64 border rounded-lg shadow-md">
    <div className=" w-16 h-16 ">
    <img className="rounded-md" src={Prasad}></img>
    </div>
    <div className="text-center">
      <h2 className="text-lg font-semibold">Prasad Bamane</h2>
      <p className="text-gray-600">prasadbamane@gmail.com</p>
      <p className="text-gray-600">908978798</p>
    </div>
    </div>
  )
}