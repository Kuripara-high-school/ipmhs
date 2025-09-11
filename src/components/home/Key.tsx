"use client";

import Image from "next/image";
import email  from "@/assets/icon/mail.svg";
import Location  from "@/assets/icon/map-pin.svg";
import phone  from "@/assets/icon/phone.svg";
import people  from "@/assets/icon/people.svg";



export default function KeyInfo() {
    const notes = [
        { label: "এমপিও কোড", value: "০৭০৬১২১৩০২" },
        { label: "ইআইএন নং", value: "১০৩৯০৪" },
        { label: "মোট জমির পরিমান", value: "২৫৪ ( শতাংশ )" },
        { label: "প্রতিষ্ঠাকাল", value: "১৯৩৭ ইং" },
        { label: "মোট ছাত্র-ছাত্রী", value: "৬৬১" }// --
    ];
    const numbers = [
        { label: "যোগাযোগের ঠিকানা", value: "ডাকঘর: কালিপুর বাজার, উপজেলা: মতলব উত্তর, জেলা: চাঁদপুর ।", icon: <Image src={Location} alt="icon" className="w-5 h-5 " /> },
        { label: "মোবাইল নম্বর", value: "০১৩০৯১০৩৯০৪", icon: <Image src={phone} alt="icon" className="w-5 h-5 " /> },
        { label: "প্রতিষ্ঠানের ইমেল নাম্বারঃ", value: "imampurpm@gmail.com", icon: <Image src={email} alt="icon" className="w-5 h-5" /> },
        { label: "শিক্ষক ও কর্মচারী", value: "শিক্ষক: ১৪জন / কর্মচারী: ০৫জন", icon: <Image src={people} alt="icon" className="w-5 h-5 text-purple-500" /> },
    ];

  return (
    <section className="mt-20 px-4 mx-auto max-w-screen-lg  max-w-screen overflow-x-hidden pb-primary ">
      <div className="bg-[#ffffff] shadow-lg rounded-2xl p-6 md:p-8 border border-gray-200">
        <h2 className="text-center mb-8 font-bold text-3xl text-gray-800">
          তথ্য
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-5">
          {notes.map((note, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200"
            >
              <div>
                <span className="block font-semibold text-gray-700">{note.label}:</span>
                <span className="text-gray-600">{note.value}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid gap-5">
          {numbers.map((numbers, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200"
            >
              {numbers.icon && <div className="flex-shrink-0">{numbers.icon}</div>}
              <div>
                <span className="block font-semibold text-gray-700">{numbers.label}:</span>
                <span className="text-gray-600">{numbers.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

