import Image from "next/image";
import School_image from "@/assets/image/school-2.webp";

export default function Intro() {
    return (
        <div className="max-width flex flex-col items-center mt-primary mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
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
                    <div className="bg-gradient-to-bl from-amber-400 to-blue-600 bg-clip-text text-transparent ">
                        <h1 className="text-header">
                            ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়
                        </h1>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
ইমামপুর পল্লীমঙ্গল উচ্চ বিদ্যালয় চাঁদপুর জেলার মতলব উত্তর উপজেলার ১ নং ষাটনল ইউনিয়নের ৮ নং ওয়ার্ডে অবস্থিত একটি সুপ্রাচীন শিক্ষা প্রতিষ্ঠান। ১৯৩৭ সালে প্রতিষ্ঠিত হওয়ার পর থেকে বিদ্যালয়টি অত্র অঞ্চলে শিক্ষার আলো ছড়িয়ে আসছে। দীর্ঘ পথচলায় এ প্রতিষ্ঠান কেবল শিক্ষার্থীদের পাঠদানেই সীমাবদ্ধ নয়, বরং নৈতিকতা, শৃঙ্খলা ও সামাজিক মূল্যবোধ গঠনে গুরুত্বপূর্ণ ভূমিকা পালন করে যাচ্ছে।

বিদ্যালয়ে বর্তমানে ১৪ জন যোগ্য শিক্ষক পাঠদান করছেন এবং এখানে অধ্যয়নরত শিক্ষার্থীর সংখ্যা ৬৬১ জন। শিক্ষক ও শিক্ষার্থীদের সমন্বিত প্রচেষ্টায় বিদ্যালয়টি নিয়মিতভাবে উৎকৃষ্ট বোর্ড পরীক্ষার ফলাফল অর্জন করে আসছে।

শিক্ষার পাশাপাশি শিক্ষার্থীরা সহশিক্ষামূলক কার্যক্রম ও সাংস্কৃতিক কর্মকাণ্ডে সক্রিয়ভাবে অংশগ্রহণ করে নিজেদের সর্বাঙ্গীন বিকাশে অগ্রসর হচ্ছে। মানসম্মত শিক্ষা, সুশৃঙ্খল পরিবেশ ও ধারাবাহিক সফলতার কারণে প্রতিষ্ঠানটি ইতোমধ্যে এলাকায় একটি আদর্শ শিক্ষা প্রতিষ্ঠান হিসেবে পরিচিতি লাভ করেছে।                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        আমি প্রতিষ্ঠানটির সার্বিক মঙ্গল কামনা করছি।
                    </p>
                </div>
            </div>
        </div>
    );
}
