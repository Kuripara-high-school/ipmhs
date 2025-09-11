import Image from "next/image";
import Logo from "@/assets/icon/logoround.png";
import Dropdown_Nav from "./Dropdown_Nav";
import Link from "next/link";



export default function Navbar() {
   return(
   <div className=" sticky top-0 z-50">
      {/* desktop */}
      <div className=" bg-[#ffffff17] backdrop-blur-lg shadow-2xl py-2 px-2 lg:px-0 hidden md:flex md:flex-col max-w-screen overflow-hidden ">
         <div className="flex items-center justify-center gap-5 lg:gap-[200px] ">
            <div  className="flex flex-row items-center gap-4">
               <Link href='/'        className=" text-lg lg:text-xl font-bold cursor-pointer ">HOME</Link>
               <Link href='/about'   className=" text-lg lg:text-xl font-bold cursor-pointer ">ABOUT</Link>
               <Link href='/gallery' className=" text-lg lg:text-xl font-bold cursor-pointer ">GALLERY</Link>
               <Link href='/teacher' className=" text-lg lg:text-xl font-bold cursor-pointer ">TEACHER</Link>
               <Link href='/student' className=" text-lg lg:text-xl font-bold cursor-pointer ">STUDENT</Link>
            </div>
            <div  className="flex flex-row items-center gap-3 lg:gap-12">
               <Image src={Logo} alt="Logo" width={50} />
               <p className="text-xl font-bold  ">Imampur P.M. High School</p>
               {/* <p className="text-xl font-bold  ">Imampur Palli Mangal High School</p> */}
            </div>
         </div>
      </div>
      {/* mobile */}
      <div className="bg-[#fff] shadow-2xl py-2 px-1 flex md:hidden justify-between">
         <div  className="flex flex-row items-center gap-3">
            <Image src={Logo} alt="Logo" width={30} />
            {/* <p className="text-xl font-bold  ">Kuripara High School</p> */}
            <p className="text-sm font-bold  ">Imampur P.M. High School</p>
         </div>
            <Dropdown_Nav/>
      </div>
   </div>
   );
};