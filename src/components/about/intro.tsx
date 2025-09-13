import Image from "next/image";
import School_image from "@/assets/image/imner-clear.webp";



export default function Intro_Det() {
    return (
        <div>
            <section className="mt-low">
                <div className="flex flex-col lg:flex-row-reverse gap-8">
                    {/* Image Section */}
                    <div className="w-full lg:w-[65%] xl:w-[600px] rounded-2xl overflow-hidden group">
                        <Image
                            src={School_image}
                            alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়"
                            className="object-cover rounded-2xl w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full lg:w-[55%] space-y-4">
                        <h2 className="text-2xl font-bold">
                            ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
ইমামপুর পল্লীমঙ্গল উচ্চ বিদ্যালয় চাঁদপুর জেলার মতলব উত্তর উপজেলার ১ নং ষাটনল ইউনিয়নের ৮ নং ওয়ার্ডে অবস্থিত একটি ঐতিহ্যবাহী শিক্ষা প্রতিষ্ঠান। ১৯৩৭ সালে প্রতিষ্ঠিত হওয়ার পর থেকে বিদ্যালয়টি অত্র এলাকায় শিক্ষার আলো ছড়িয়ে আসছে এবং শিক্ষার্থীদের জ্ঞান, নৈতিকতা ও সুশিক্ষায় সমৃদ্ধ করছে। দীর্ঘ পথচলায় এ প্রতিষ্ঠান সমাজ গঠন ও আলোকিত নাগরিক তৈরিতে গুরুত্বপূর্ণ ভূমিকা রেখে চলেছে।

বর্তমানে বিদ্যালয়ে ১৪ জন যোগ্য ও অভিজ্ঞ শিক্ষক পাঠদান করে থাকেন। তাঁদের আন্তরিকতা, আধুনিক শিক্ষাদান পদ্ধতি এবং শিক্ষার্থীদের প্রতি যত্নশীল দৃষ্টিভঙ্গি বিদ্যালয়কে একটি মানসম্মত শিক্ষাঙ্গনে পরিণত করেছে। এখানে অধ্যয়নরত ৬৬১ জন শিক্ষার্থী নিয়মিত পাঠগ্রহণের পাশাপাশি সহশিক্ষামূলক কার্যক্রম ও সাংস্কৃতিক কর্মকাণ্ডে অংশগ্রহণের মাধ্যমে নিজেদের দক্ষতা বৃদ্ধি করে যাচ্ছে।

বিদ্যালয়টির বোর্ড পরীক্ষার ফলাফল প্রতি বছরই অত্যন্ত সন্তোষজনক। শিক্ষার্থীদের নিয়মিত সাফল্য ও অভিভাবকদের সহযোগিতা একে এলাকার একটি আদর্শ শিক্ষা প্রতিষ্ঠানে রূপান্তরিত করেছে। শৃঙ্খলা, নৈতিকতা ও আধুনিক জ্ঞানের সমন্বয়ে শিক্ষার্থীদের গড়ে তোলাই এই বিদ্যালয়ের মূল লক্ষ্য।                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            আমি প্রতিষ্ঠানটির সার্বিক মঙ্গল কামনা করছি।
                        </p>
                    </div>
                </div>
                {/* section ----2 */}
                <div className="flex flex-col lg:flex-row gap-8 mt-low">
                    {/* Image Section */}
                    <div className="w-full lg:w-[65%] xl:w-[600px] rounded-2xl overflow-hidden group">
                        <Image
                            src={School_image}
                            alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়"
                            className="object-cover rounded-2xl w-full h-full transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="w-full lg:w-[55%] space-y-4">
                        <h2 className="text-2xl font-bold">
                            এলাকা সনদঃ
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            এই মর্মে প্রত্যায়ণ করা যাচ্ছে, ইমামপুর পল্লীমঙ্গল উচ্চ বিদ্যালয় পোঃ কালিপুর বাজার, ১ নং ষাটনল ইউনিয়ন,উপজেলাঃ মতলব উত্তর, জেলাঃচাঁদপুর। উক্ত প্রতিষ্ঠানটি অত্র ইউনিয়নের ৮ নং ওয়ার্ডে অবস্থিত। এই বিদ্যালয়টি ১৯৩৭ সনে প্রতিষ্ঠিত হওয়ার পর থেকে অত্র এলাকায় শিক্ষার আলো ছড়িয়ে আসিতেছে। প্রতিষ্ঠানটির প্রতিটি বোর্ড পরীক্ষার ফলাফল অত্যন্ত ভাল। অত্র এলাকায় এটি একটি আদর্শ শিক্ষা প্রতিষ্ঠান।
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            আমি প্রতিষ্ঠানটির সার্বিক মঙ্গল কামনা করছি।
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}