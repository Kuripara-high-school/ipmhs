import React from "react";


export default function Result() {
  // tabil data ssc
  const tableData = [
    { year: "এস.এস.সি-২০২৫", total: 156, pass: 83, boy: 66, girl: 90, rate: "53.55%" },
    { year: "এস.এস.সি-২০২৪", total: 124, pass: 111, boy: 59, girl: 65, rate: "89.36%" },
    { year: "এস.এস.সি-২০২৩", total: 109, pass: 98, boy: 48, girl: 71, rate: "90.78%" },
    { year: "এস.এস.সি-২০২২", total: 188, pass: 168, boy: 59, girl: 90, rate: "89.36%" },
    { year: "এস.এস.সি-২০২১", total: 217, pass: 212, boy: 66, girl: 139, rate: "97.69%" },
  ];

  // Table header titles
  const tableHeaders = [
    "সন",
    "মোট পরীক্ষার্থী",
    "কৃতকার্য",
    "ছাত্র",
    "ছাত্রী",
    "পাশের হার",
  ];

  // table data jsc
  const tableDatajsc = [
    { year: "এস.এস.সি-২০২৫", total: 133, pass: "", boy: 63, girl: 70, rate: "" },
    { year: "এস.এস.সি-২০২৪", total: 118, pass: 118, boy: 58, girl: 40, rate: "100%" },
    { year: "এস.এস.সি-২০২৩", total: 152, pass: 152, boy: 72, girl: 80, rate: "100%" },
    { year: "এস.এস.সি-২০২২", total: 197, pass: 197, boy: 100, girl: 97, rate: "100%" },
    { year: "এস.এস.সি-২০২১", total: 156, pass: 156, boy: 75, girl: 81, rate: "100%" },
  ];

  // Table header titles
  const tableHeadersjsc = [
    "সন",
    "মোট পরীক্ষার্থী",
    "কৃতকার্য",
    "ছাত্র",
    "ছাত্রী",
    "পাশের হার",
  ];

  // Row color classes
  const rowColors = ["bg-blue-50", "bg-green-50", "bg-pink-50"];
  return (
    <div>
      <div>
        <section>
          <div className="bg-gradient-to-tl from-amber-400 to-blue-600 bg-clip-text text-transparent pb-10 ">
            <h1 className="text-header text-center">
              গত ৫ বছরের ফলাফল ঃ- এসএসসি
            </h1>
          </div>
          {/* ssc result */}
          <div className="w-[100vw] md:w-full overflow-x-auto md:overflow-visible mb-high">
            <table className="w-[620px] sm:w-[70vw] lg:w-[60vw] xl:w-[50vw] border border-gray-300 border-collapse mx-auto shadow-2xl rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  {tableHeaders.map((header, i) => (
                    <th
                      key={i}
                      className="border border-gray-200 px-4 py-3 text-center font-bold text-sm"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr
                    key={index}
                    className={`${rowColors[index % rowColors.length]} hover:bg-yellow-100 transition`}
                  >
                    <td className="border border-gray-300 px-4 py-2 text-base font-medium">
                      {row.year}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 font-bold">{row.total}</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold">{row.pass}</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold">{row.boy}</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold">{row.girl}</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section>
          {/* jsc result */}
          <div className="bg-gradient-to-br from-amber-400 to-blue-600 bg-clip-text text-transparent pb-10 ">
            <h1 className="text-header text-center">
              গত ৫ বছরের ফলাফল ঃ- জেএসসি
            </h1>
          </div>
          <div className="w-[100vw] md:w-full overflow-x-auto md:overflow-visible mb-high">
            <table className="w-[620px] sm:w-[70vw] lg:w-[60vw] xl:w-[50vw] border border-gray-300 border-collapse mx-auto shadow-2xl rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                  {tableHeadersjsc.map((header, i) => (
                    <th
                      key={i}
                      className="border border-gray-200 px-4 py-3 text-center font-bold text-sm"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableDatajsc.map((row, index) => (
                  <tr
                    key={index}
                    className={`${rowColors[index % rowColors.length]} hover:bg-yellow-100 transition`}
                  >
                    <td className="border border-gray-300 px-4 py-2 text-base font-medium">
                      {row.year}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 font-bold">{row.total}</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold">{row.pass}</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold">{row.boy}</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold">{row.girl}</td>
                    <td className="border border-gray-300 px-4 py-2 font-bold">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
