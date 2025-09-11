"use client";

export default function Sciencelab() {
  return (
    <section className="max-w-6xl mx-auto px-0 sm:px-6 py-12">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        🔬 বিজ্ঞানাগারের বিবরণ
      </h2>

      {/* General Info */}
      <div className="bg-gray-50 rounded-2xl shadow p-6 mb-10">
        <p className="text-lg font-semibold text-gray-700">
          ইমামপুর পল্লীমঙ্গল উচ্চ বিদ্যালয়
        </p>
        <p className="text-gray-600 mt-2">
          বিজ্ঞানাগারের কক্ষসংখ্যাঃ{" "}
          <span className="font-medium">
            ২টি (শ্রেণিকক্ষ ১টি ও যন্ত্রপাতী সাজানোর কক্ষ ১টি)
          </span>
        </p>
        <p className="text-gray-600">
          অবস্থানঃ <span className="font-medium">দ্বিতীয় তলায়</span>
        </p>
      </div>

      {/* Furniture Table */}
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
        🪑 আসবাবপত্রের বিবরণ
      </h3>
      <div className="overflow-x-auto mb-10">
        <table className="w-[400px] sm:w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">ক্রম</th>
              <th className="px-4 py-2 text-left">১ম কক্ষ</th>
              <th className="px-4 py-2 text-left">২য় কক্ষ</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2">০২</td>
              <td className="px-4 py-2">
                একটি সুকেস, তিনটি আলমারী, দুইটি চওড়া টেবিল ও ৩ টি চেয়ার
              </td>
              <td className="px-4 py-2">
                ৪ টি হাই বেঞ্চ, ৪ টি লো বেঞ্চ ও একটি চেয়ার
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Instruments */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        ⚙️ যন্ত্রপাতীর বিবরণ
      </h3>
      <div className="bg-gray-50 rounded-2xl shadow p-6 mb-10">
        <p className="text-gray-700 leading-relaxed">
          অনুবীক্ষণ যন্ত্র-২টি, ম্যাগনেট ২৫টি, টিউব-৫ বক্রা, স্লাইড-২৩ টি, আতশী
          কাঁচ ১ ডজন, ট্রে-১২ টি, পিন বক্রা-১২টি, কর্ক/ছিপি-২ ডজন, কাঁচের
          বোয়াম-১৮ টি, ফ্লাস্ক-৩৪টি, ব্যবচ্ছেদ বক্রা-৪টি, স্পিরিট ল্যাম্প-২৩টি,
          লিটমাস-৫টি, বীকার ২৩টি, প্রয়োজনীয় তার-৫ গজ, বৈদ্যুতিক মিটার ও
          বর্তনী-১২টি, কংকাল-২টি।
        </p>
      </div>

      {/* Chemicals */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        ⚗️ রাসায়নিক দ্রব্যাদি
      </h3>
      <div className="bg-gray-50 rounded-2xl shadow p-6">
        <p className="text-gray-700 leading-relaxed">
          সালফিউরিক এসিড, হাইড্রোক্লোরিক এসিড, অক্সিজেন, নাইট্রোজেন, ফসফরাস,
          নাইট্রিক এসিড, লাফিং গ্যাস, ক্লোরফর্ম ও বিভিন্ন লবন।
        </p>
      </div>
    </section>
  );
}


// "use client";

// import logo  from "@/assets/icon/logo.png";
// import Image from "next/image";



// export default function Sciencelab() {
//     const notes = [
//         { label: "এমপিও কোড", value: "৩০০৩০৬১৩০১" },
//         { label: "ইআইএন নং", value: "১১২৩৮৪" },
//         { label: "উপজেলা কোড", value: "১৫২" },
//         { label: "জেলা কোড", value: "১৬" },
//         { label: "সেন্টার কোড", value: "৫৮৭" }
//     ];
//     const numbers = [
//         { label: "প্রতিষ্ঠানের ফোন বা মোবাইল নম্বরসহ যোগাযোগের ঠিকানা", value: "০১৮১৬১৮১৫৪১", icon: <Image src={logo} alt="icon" className="w-4 h-4 " /> },
//         { label: "তথ্য সেবা কেন্দ্রের ঠিকানা ও মোবাইল নম্বর", value: "কুড়িপাড়া, নাসিক-২৭ নং ওয়ার্ড। নম্বরঃ ০১৮১৬১৮১৫৪১", icon: <Image src={logo} alt="icon" className="w-4 h-4 " /> },
//         { label: "অভিযোগ নিষ্পত্তি কর্মকর্তার নাম ঠিকানা ও মোবাইল নম্বর", value: "০১৭২০০২৩৬৮৮", icon: <Image src={logo} alt="icon" className="w-4 h-4" /> },
//         { label: "যেকোনো তথ্য বা বিভিন্ন বিষয়াদি জানতে যোগাযোগ", value: "০১৮১৩৪৮৫০৬১", icon: <Image src={logo} alt="icon" className="w-4 h-4 text-purple-500" /> },
//     ];

//   return (
//     <section className="mt-6 px-4 mx-auto max-w-screen-lg  max-w-screen overflow-x-hidden pb-primary ">
//       <div className="bg-[#ffffff] shadow-lg rounded-2xl p-6 md:p-8 border border-gray-200">
//         <h2 className="text-center mb-8 font-bold text-3xl text-gray-800">
//           📒 নোটস
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-5">
//           {notes.map((note, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200"
//             >
//               <div>
//                 <span className="block font-semibold text-gray-700">{note.label}:</span>
//                 <span className="text-gray-600">{note.value}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="grid gap-5">
//           {numbers.map((numbers, idx) => (
//             <div
//               key={idx}
//               className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-200"
//             >
//               {numbers.icon && <div className="flex-shrink-0">{numbers.icon}</div>}
//               <div>
//                 <span className="block font-semibold text-gray-700">{numbers.label}:</span>
//                 <span className="text-gray-600">{numbers.value}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

