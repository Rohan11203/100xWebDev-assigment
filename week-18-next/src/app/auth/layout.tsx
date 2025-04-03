import Navbar from "../Components/Navbar";

export default function AuthLayout({children}:any){
    return <div>
        <Navbar />
        {children}
    </div>
}