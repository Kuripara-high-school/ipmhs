import Image from "next/image";
import school from "@/assets/image/school-clear.png";
import image from "@/assets/image/school.webp";
import Navbar from "@/components/navigation/nabvar";
import Footer from "@/components/navigation/footer";

export default function GalleryPage() {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Navbar/>
      <div className="relative">
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

      <div className="flex flex-col items-center mb-high">
        <h3 className="text-header text-center mt-low mb-low" >All Photo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 leading-3 2xl:grid-cols-4 gap-5">
          <div className="group relative w-[400px] h-[400px] rounded-2xl bg-black/30 overflow-hidden shadow-lg shadow-black/30 border border-black/10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            {/* Image */}
            <Image
              src={image}
              alt="photo"
              className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 p-5 text-white">
              <p className="font-semibold text-lg leading-snug italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at.
              </p>
              <button className="mt-3 px-4 py-2 rounded-lg border-2 border-[var(--primary-bg)] text-sm font-medium shadow-md hover:bg-primary transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
          <div className="group relative w-[400px] h-[400px] rounded-2xl bg-black/30 overflow-hidden shadow-lg shadow-black/30 border border-black/10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            {/* Image */}
            <Image
              src={image}
              alt="photo"
              className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 p-5 text-white">
              <p className="font-semibold text-lg leading-snug italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at.
              </p>
              <button className="mt-3 px-4 py-2 rounded-lg border-2 border-[var(--primary-bg)] text-sm font-medium shadow-md hover:bg-primary transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
          <div className="group relative w-[400px] h-[400px] rounded-2xl bg-black/30 overflow-hidden shadow-lg shadow-black/30 border border-black/10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            {/* Image */}
            <Image
              src={image}
              alt="photo"
              className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 p-5 text-white">
              <p className="font-semibold text-lg leading-snug italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at.
              </p>
              <button className="mt-3 px-4 py-2 rounded-lg border-2 border-[var(--primary-bg)] text-sm font-medium shadow-md hover:bg-primary transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
          <div className="group relative w-[400px] h-[400px] rounded-2xl bg-black/30 overflow-hidden shadow-lg shadow-black/30 border border-black/10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            {/* Image */}
            <Image
              src={image}
              alt="photo"
              className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 p-5 text-white">
              <p className="font-semibold text-lg leading-snug italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at.
              </p>
              <button className="mt-3 px-4 py-2 rounded-lg border-2 border-[var(--primary-bg)] text-sm font-medium shadow-md hover:bg-primary transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
          <div className="group relative w-[400px] h-[400px] rounded-2xl bg-black/30 overflow-hidden shadow-lg shadow-black/30 border border-black/10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            {/* Image */}
            <Image
              src={image}
              alt="photo"
              className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 p-5 text-white">
              <p className="font-semibold text-lg leading-snug italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at.
              </p>
              <button className="mt-3 px-4 py-2 rounded-lg border-2 border-[var(--primary-bg)] text-sm font-medium shadow-md hover:bg-primary transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
          <div className="group relative w-[400px] h-[400px] rounded-2xl bg-black/30 overflow-hidden shadow-lg shadow-black/30 border border-black/10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            {/* Image */}
            <Image
              src={image}
              alt="photo"
              className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 p-5 text-white">
              <p className="font-semibold text-lg leading-snug italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at.
              </p>
              <button className="mt-3 px-4 py-2 rounded-lg border-2 border-[var(--primary-bg)] text-sm font-medium shadow-md hover:bg-primary transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
          <div className="group relative w-[400px] h-[400px] rounded-2xl bg-black/30 overflow-hidden shadow-lg shadow-black/30 border border-black/10 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            {/* Image */}
            <Image
              src={image}
              alt="photo"
              className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 p-5 text-white">
              <p className="font-semibold text-lg leading-snug italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, at.
              </p>
              <button className="mt-3 px-4 py-2 rounded-lg border-2 border-[var(--primary-bg)] text-sm font-medium shadow-md hover:bg-primary transition-all duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
