"use client";

export default function Libary() {
  return (
    <section className="max-w-6xl mx-auto px-1 sm:px-6 py-12">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        📚 পাঠাগারের বিবরণ
      </h2>

      {/* General Info */}
      <div className="bg-gray-50 rounded-2xl shadow p-6 mb-10">
        <p className="text-lg font-semibold text-gray-700">
          ইমামপুর পল্লীমঙ্গল উচ্চ বিদ্যালয়
        </p>
        <p className="text-gray-600 mt-2">
          গ্রন্থাগারের কক্ষের সংখ্যাঃ <span className="font-medium">১টি</span> 
          (বই পড়া এবং বই সাজানোর জন্য)
        </p>
        <p className="text-gray-600">
          অবস্থানঃ <span className="font-medium">নীচ তলায়</span>
        </p>
        <p className="text-gray-600">
          আসবাবপত্রঃ ৩টি বুক সেলফ, ৩ টি আলমারী, ২ টি টেবিল ও ২০ টি চেয়ার
        </p>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <table className=" w-[500px] sm:w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">শ্রেণি</th>
              <th className="px-4 py-2 text-left">বইয়ের বিবরণ</th>
              <th className="px-4 py-2 text-center">সংখ্যা</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-2">৬ষ্ঠ</td>
              <td className="px-4 py-2">বিভিন্ন মনিষিদের জীবনী</td>
              <td className="px-4 py-2 text-center">২০০টি</td>
            </tr>
            <tr>
              <td className="px-4 py-2">৭ম</td>
              <td className="px-4 py-2">পাঠসহায়ক বই ও কাব্যগ্রন্থ</td>
              <td className="px-4 py-2 text-center">২৫০টি</td>
            </tr>
            <tr>
              <td className="px-4 py-2">৮ম</td>
              <td className="px-4 py-2">পাঠসহায়ক বই</td>
              <td className="px-4 py-2 text-center">২০০টি</td>
            </tr>
            <tr>
              <td className="px-4 py-2">৯ম</td>
              <td className="px-4 py-2">পাঠসহায়ক বই ও কাব্যগ্রন্থ</td>
              <td className="px-4 py-2 text-center">২৫০টি</td>
            </tr>
            <tr>
              <td className="px-4 py-2">১০ম</td>
              <td className="px-4 py-2">পাঠসহায়ক বই ও কাব্যগ্রন্থ</td>
              <td className="px-4 py-2 text-center">২০০টি</td>
            </tr>
            <tr className="bg-gray-50 font-medium">
              <td className="px-4 py-2">অন্যান্য</td>
              <td className="px-4 py-2">অভিধান</td>
              <td className="px-4 py-2 text-center">১০০টি</td>
            </tr>
            <tr>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2">মুক্তিযুদ্ধ বিষয়ক</td>
              <td className="px-4 py-2 text-center">২০০টি</td>
            </tr>
            <tr>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2">ধর্মগ্রন্থ</td>
              <td className="px-4 py-2 text-center">১০০টি</td>
            </tr>
            <tr>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2">আন্তর্জাতিক বিষয়ক</td>
              <td className="px-4 py-2 text-center">৩০০টি</td>
            </tr>
            <tr>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2">ঋুমন কাহিনী</td>
              <td className="px-4 py-2 text-center">১০টি</td>
            </tr>
            {/* Total */}
            <tr className="bg-blue-100 font-bold">
              <td className="px-4 py-2 text-center" colSpan={2}>
                মোট
              </td>
              <td className="px-4 py-2 text-center">১৮১০টি</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

