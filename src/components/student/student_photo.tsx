import Image from "next/image";
import miner from "@/assets/image/imner-clear.webp";
import sir from "@/assets/image/sir.jpg";
import min from "@/assets/image/miner.webp";
import book from "@/assets/image/book.jpg";



export default function Student_Photo() {
    return (
        <div className="max-width flex flex-col items-center mt-primary mx-auto">
            <div>
                <div className="bg-gradient-to-bl from-amber-400 to-blue-600 bg-clip-text text-transparent ">
                    <h1 className="text-header text-center mb-5">
                        ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* big image */}
                    <div className="relative w-full lg:w-[65%] xl:w-[530px] h-auto lg:h-[510px] rounded-2xl overflow-hidden group">
                        <Image
                            src={sir}
                            alt="Imampur Palli Mangal High School"
                            className="object-cover rounded-2xl w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* overlay text */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                            <p className="text-white text-lg font-bold">
                                প্রধান শিক্ষক
                            </p>
                        </div>
                    </div>

                    {/* small images */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col lg:flex-row gap-4">
                            {/* book */}
                            <div className="relative lg:w-[300px] lg:h-[248px] rounded-2xl overflow-hidden group">
                                <Image
                                    src={book}
                                    alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়"
                                    className="object-cover w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                                    <p className="text-white text-lg font-semibold">
                                        বই বিতরন
                                    </p>
                                </div>
                            </div>

                            {/* miner */}
                            <div className="relative lg:w-[300px] lg:h-[248px] rounded-2xl overflow-hidden group">
                                <Image
                                    src={miner}
                                    alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়"
                                    className="object-cover w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                                    <p className="text-white text-lg font-semibold">
                                        শহিদ মিনার
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* bottom image */}
                        <div className="relative lg:w-[613px] lg:h-[248px] rounded-2xl overflow-hidden group">
                            <Image
                                src={min}
                                alt="Imampur Palli Mangal High School"
                                className="object-cover w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                                <p className="text-white text-lg font-semibold">
                                    ক্যাম্পাস ভিউ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------- section 2 -------------------- */}

                <div className="flex flex-col lg:flex-row-reverse gap-4 mt-4">
                    {/* big image */}
                    <div className="relative w-full lg:w-[65%] xl:w-[530px] h-auto lg:h-[510px] rounded-2xl overflow-hidden group">
                        <Image
                            src={sir}
                            alt="Imampur Palli Mangal High School"
                            className="object-cover rounded-2xl w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* overlay text */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                            <p className="text-white text-lg font-bold">
                                প্রধান শিক্ষক
                            </p>
                        </div>
                    </div>

                    {/* small images */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col lg:flex-row gap-4">
                            {/* book */}
                            <div className="relative lg:w-[300px] lg:h-[248px] rounded-2xl overflow-hidden group">
                                <Image
                                    src={book}
                                    alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়"
                                    className="object-cover w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                                    <p className="text-white text-lg font-semibold">
                                        বই বিতরন
                                    </p>
                                </div>
                            </div>

                            {/* miner */}
                            <div className="relative lg:w-[300px] lg:h-[248px] rounded-2xl overflow-hidden group">
                                <Image
                                    src={miner}
                                    alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়"
                                    className="object-cover w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                                    <p className="text-white text-lg font-semibold">
                                        শহিদ মিনার
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* bottom image */}
                        <div className="relative lg:w-[613px] lg:h-[248px] rounded-2xl overflow-hidden group">
                            <Image
                                src={min}
                                alt="Imampur Palli Mangal High School"
                                className="object-cover w-full h-full rounded-2xl transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition-all duration-500">
                                <p className="text-white text-lg font-semibold">
                                    ক্যাম্পাস ভিউ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


