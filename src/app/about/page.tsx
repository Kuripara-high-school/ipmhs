import Image from "next/image";
import school from "@/assets/image/school-clear.png";
import Navbar from "@/components/navigation/nabvar";
import Footer from "@/components/navigation/footer";
// import School_image from "@/assets/image/imner-clear.webp";
import Libary from "@/components/about/libary";
import Sciencelab from "@/components/about/sciencelab";
import Map from "@/components/home/map";
import About_data from "@/components/about/about";
import Intro_Det from "@/components/about/intro";


export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="relative max-w-screen overflow-x-hidden">
        <div className="w-[100%]">
          <Image src={school} alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়" className="w-[100vw] h-[49vw] lg:h-[20vw] object-cover  " />
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
      <div className="max-width mx-auto">
        <div>
          {/* section 1 */}
          <section className="mt-low">
            <Intro_Det />
          </section>
          {/* section 2 */}
          <section className="mt-primary">
            <About_data />
          </section>
          {/* section 3 */}
          <section className="mt-primary">
            <Libary />
          </section>
          {/* section 4 */}
          <section className="mt-primary">
            <Sciencelab />
          </section>
        </div>
      </div>
      {/* section 5 */}
      <section className="max-w-screen overflow-hidden">
        <Map />
      </section>
      <Footer />
    </div>
  );
}
