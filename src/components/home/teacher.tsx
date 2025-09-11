"use client";

import Image from "next/image";
import Link from "next/link";

export default function Teacher() {
    return (
        <div className="flex justify-center mt-20 max-w-screen overflow-hidden pb-12">
            <div className="flex flex-col items-center gap-12">
                <div className="flex flex-col items-center lg:items-start lg:flex-row gap-8">
                    <div className="bg-[#f8f4f4] rounded-[8px] shadow-2xl hover:shadow-2xs w-[97vw] sm:w-[277px] h-[300px] flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <Image
                                src="https://i.ibb.co.com/tMfm0H67/image.webp"
                                width={160}
                                height={200}
                                alt="sir"
                                className="w-[160px] h-[200px] object-cover"
                            />
                            <h3 className="text-center text-xl">মোসাঃ সেলিনা পারভীন</h3>
                            <p>প্রধান শিক্ষক</p>
                        </div>
                    </div>

                    <div className="w-[97vw] lg:w-[50vw] xl:w-[909px] h-auto xl:h-[300px] bg-[#f8f4f4] rounded-[8px] shadow-2xl hover:shadow-2xs p-4 flex flex-col gap-2">
                        <h3 className="font-bold">আমাদের শিক্ষকবৃন্দ</h3>
                        <p>
                            ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়ে বর্তমানে মোট ১৪ জন অভিজ্ঞ ও দক্ষ শিক্ষক কর্মরত রয়েছেন। প্রত্যেক শিক্ষকই তাঁর নিজ নিজ বিষয়ে বিশেষ দক্ষতা ও অভিজ্ঞতার অধিকারী। তাঁরা শিক্ষার্থীদের প্রতি অত্যন্ত যত্নবান এবং পেশাদারভাবে শ্রেণি পরিচালনা করে থাকেন।

                            আমাদের সম্মানিত প্রধান শিক্ষক হলেন মোসাঃ সেলিনা পারভীন, যিনি অত্যন্ত দায়িত্বশীল ও নেতৃত্বদানের গুণে সমৃদ্ধ। এছাড়াও, তিনি বিদ্যালয়ের প্রশাসনিক ও শিক্ষাগত কাজে বিশেষ ভূমিকা পালন করছেন।

                            সকল শিক্ষকই আন্তরিকতা, নিষ্ঠা ও কঠোর পরিশ্রমের মাধ্যমে শিক্ষার্থীদের সঠিক পথে পরিচালিত করতে নিরলস কাজ করে যাচ্ছেন। তাঁদের অবদানেই ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয় আজ একটি আদর্শ শিক্ষাপ্রতিষ্ঠান হিসেবে সুনাম অর্জন করতে সক্ষম হয়েছে।
                        </p>
                        <Link
                            href="/teacher"
                            className="bg-amber-200 p-3 text-sm font-bold hover:underline cursor-pointer mt-[40px] w-[170px] rounded-lg"
                        >
                            See more Teacher ...
                        </Link>
                    </div>
                </div>

                {/* Teacher Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center gap-3 lg:gap-7 xl:gap-[37px]" id="teacher-grid">
                    <div className="bg-[#f8f4f4] rounded-[8px] w-[97vw] sm:w-[200px] xl:w-[277px] py-6 flex items-center hover:shadow-2xl justify-center">
                        <div className="flex flex-col items-center">
                            <Image
                                src="https://i.ibb.co.com/tMfm0H67/image.webp"
                                alt="sir"
                                width={160}
                                height={200}
                                className="w-[160px] h-[200px] object-cover"
                            />
                            <h3 className="text-center text-xl">ছবির আহাম্মদ</h3>
                            <p>সহকারী শিক্ষক</p>
                        </div>
                    </div>
                    <div className="bg-[#f8f4f4] rounded-[8px] w-[97vw] sm:w-[200px] xl:w-[277px] py-6 flex items-center hover:shadow-2xl justify-center">
                        <div className="flex flex-col items-center">
                            <Image
                                src="https://i.ibb.co.com/tMfm0H67/image.webp"
                                alt="sir"
                                width={160}
                                height={200}
                                className="w-[160px] h-[200px] object-cover"
                            />
                            <h3 className="text-center text-xl">ফারুক আহাম্মদ</h3>
                            <p>সহকারী শিক্ষক</p>
                        </div>
                    </div>
                    <div className="bg-[#f8f4f4] rounded-[8px] w-[97vw] sm:w-[200px] xl:w-[277px] py-6 flex items-center hover:shadow-2xl justify-center">
                        <div className="flex flex-col items-center">
                            <Image
                                src="https://i.ibb.co.com/tMfm0H67/image.webp"
                                alt="sir"
                                width={160}
                                height={200}
                                className="w-[160px] h-[200px] object-cover"
                            />
                            <h3 className="text-center text-xl"> মোঃ নওশের আজম</h3>
                            <p>সহকারী শিক্ষক</p>
                        </div>
                    </div>
                    <div className="bg-[#f8f4f4] rounded-[8px] w-[97vw] sm:w-[200px] xl:w-[277px] py-6 flex items-center hover:shadow-2xl justify-center">
                        <div className="flex flex-col items-center">
                            <Image
                                src="https://i.ibb.co.com/tMfm0H67/image.webp"
                                alt="sir"
                                width={160}
                                height={200}
                                className="w-[160px] h-[200px] object-cover"
                            />
                            <h3 className="text-center text-xl">মোঃ ওবায়েদুল্লাহ</h3>
                            <p>সহকারী শিক্ষক</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
