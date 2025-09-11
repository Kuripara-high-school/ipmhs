import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/nabvar"
import Image from "next/image";
import Student from "@/assets/image/student3.jpg";
import Total_student from "@/components/student/_total_student";
import Result from "@/components/student/result";
import Student_Photo from "@/components/student/student_photo";
import Map from "@/components/home/map";


export default function StudentPage() {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="w-[100%]">
          <Image src={Student} alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়" className="w-[100vw] h-[49vw] lg:h-[20vw] object-cover  " />
        </div>
        <div className="absolute top-2 left-2 bg-[#ffffff17] backdrop-blur-[1.4px] p-2 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#ffffff4f] ">
          <div className="bg-gradient-to-t from-amber-400 to-white bg-clip-text text-transparent ">
            <h1 className="text-[8px] sm:text-sm md:text-lg lg:text-2xl">
              ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়
            </h1>
          </div>
          <p className="text-white text-[4px] sm:text-xs md:text-sm">কালিপুর বাজার, মতলব উত্তর, চাঁদপুর </p>
        </div>
      </div>
      <div>
        <Total_student/>
        <Result/>
        <Student_Photo/>
      </div>
      <section className="max-w-screen overflow-hidden">
        <Map/>
      </section>
      <Footer />
    </div>
  );
}
