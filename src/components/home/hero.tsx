import school from "@/assets/image/school-clear.png"
import Image from "next/image"

export default function Hero() {
    return (
        <div>
            <div className="relative">
                <div className="w-[100%]">
                    <Image src={school} alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়" className="w-[100vw] h-[49vw] lg:h-[30vw] object-cover  " />
                </div>
                <div className="absolute top-2 left-2 bg-[#ffffff17] backdrop-blur-[1.4px] p-2 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#ffffff4f] ">
                    <div className="bg-gradient-to-t from-amber-400 to-white bg-clip-text text-transparent ">
                        <h1 className="text-[8px] sm:text-sm md:text-lg lg:text-3xl">
                            ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়
                        </h1>
                    </div>
                    <p className="text-white text-[4px] sm:text-xs md:text-sm">কালিপুর বাজার, মতলব উত্তর, চাঁদপুর </p>
                </div>
            </div>
        </div>
    )
}