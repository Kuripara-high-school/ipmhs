import Image from "next/image";
import bag from "@/assets/icon/badge-light.svg";


export default function About_data() {
  return (
    <div>
      <section className="flex flex-col items-center text-center">
        <h3 className="text-header">about school</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-7">
          <div className="bg-sec w-[90vw] sm:w-72 h-60 rounded-2xl pl-4">
            <Image src={bag} alt="logo" className="pt-2 " />
            <div className="flex flex-col items-start mt-4 text-white/90">
              <p className="text-2xl lg:text-5xl font-bold">1937</p>
              <h4 className="text-lg lg:text-2xl font-bold mt-2">Was founded.</h4>
            </div>
          </div>
          <div className="bg-sec w-[90vw] sm:w-72 h-60 rounded-2xl pl-4">
            <Image src={bag} alt="logo" className="pt-2 " />
            <div className="flex flex-col items-start mt-4 text-white/90">
              <p className="text-2xl lg:text-5xl font-bold">661</p>
              <h4 className="text-lg lg:text-2xl font-bold mt-2">Student.</h4>
            </div>
          </div>
          <div className="bg-sec w-[90vw] sm:w-72 h-60 rounded-2xl pl-4">
            <Image src={bag} alt="logo" className="pt-2 " />
            <div className="flex flex-col items-start mt-4 text-white/90">
              <p className="text-2xl lg:text-5xl font-bold">14</p>
              <h4 className="text-lg lg:text-2xl font-bold mt-2">Teacher.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
