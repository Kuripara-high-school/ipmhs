

import Image from "next/image";
import school from "@/assets/image/teacher.jpg";
// import image from "@/assets/image/school.webp";
import Navbar from "@/components/navigation/nabvar";
import Footer from "@/components/navigation/footer";

export default function TeacherPage() {

  const teachers = [
    { subject:"" , name: "মোসাঃ সেলিনা পারভীন", designation: "ভারপ্রাপ্ত প্রধান শিক্ষক", photo: "/avatar.svg" },
    { subject:"সামাজিক বিজ্ঞান" , name: "ছবির আহাম্মদ", designation: "সহকারী শিক্ষক", photo: "/avatar.svg" },
    { subject:"ব্যবসা শিক্ষা" , name: "ফারুক আহাম্মদ", designation: "সহকারী শিক্ষক", photo: "/avatar.svg" },
    { subject:"গনিত" , name: "আবু আসাদ মোঃ নওশের আজম", designation: "সহকারী শিক্ষক", photo: "/avatar.svg" },
    { subject:"ইসলাম ধর্ম" , name: "মোঃ ওবায়েদুল্লাহ", designation: "সহঃ শিক্ষক", photo: "/avatar.svg" },
    { subject:"" , name: "মোহাম্মদ শেখ সাদী", designation: "সহঃ শিক্ষক শরীর চর্চা", photo: "/avatar.svg" },
    { subject:"কৃষি/গার্হস্থ্য" , name: "শেখ ফরিদ", designation: "সহঃ শিক্ষক", photo: "/avatar.svg" },
    { subject:"" , name: "মোসাম্মৎ জয়নব সুলতানা", designation: "সহকারী  গ্রন্থগারিক", photo: "/avatar.svg" },
    { subject:"" , name: "মোসাম্মদৎ জয়নব সুলতানা", designation: "সহকারী  গ্রন্থগারিক", photo: "/avatar.svg" },
    { subject:"ভৌত বিজ্ঞান " , name: "শরিনা আক্তার", designation: "সহঃ শিক্ষক", photo: "/avatar.svg" },
    { subject:"জীব বিজ্ঞান" , name: "আব্দুল্লাহ আল মামুন", designation: "সহঃ শিক্ষক", photo: "/avatar.svg" },
    { subject:"কম্পিউটার" , name: "কাজী শামসুন নাহার", designation: "সহঃ শিক্ষক", photo: "/avatar.svg" },
    { subject:"সামাজিক বিজ্ঞান" , name: "উ¤েœ সালমা", designation: "সহকারী শিক্ষক -৩", photo: "/avatar.svg" },
    { subject:"ইংরেজী" , name: "মোঃ কামাল হোসেন", designation: "সহকারী শিক্ষক-৯", photo: "/avatar.svg" },
    { subject:"( হিসাব সহকারী)" , name: "পারভেজ মিয়া", designation: "অফিস সহকারী কাম", photo: "/avatar.svg" },
    { subject:"" , name: "মোঃ সিদ্দিকুর রহমান", designation: "নিরাপত্তা কর্মী", photo: "/avatar.svg" },
    { subject:"" , name: "রুবেল প্রধান", designation: "পরিচ্ছান্নতা কর্মী", photo: "/avatar.svg" },
    { subject:"" , name: "মোঃ ওয়াছকুরুনী", designation: "আফিস সহায়ক", photo: "/avatar.svg" },
    { subject:"" , name: "তানজিলা আক্তার", designation: "আয়া", photo: "/avatar.svg" },
    { subject:"" , name: "মোঃ আল আমিন", designation: "নৈশ প্রহরী", photo: "/avatar.svg" },
    // { name: "", designation: "", photo: "/avatar.svg" },
    
  ];

  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="w-[100%]">
          <Image src={school} alt="ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়" className="w-[100vw] h-[49vw] lg:h-[20vw] object-cover   " />
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
        <h3 className="text-header text-center mt-low mb-low" >All Teacher</h3>
        <div>
          {/* all teacher data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-[#f3efef] rounded-lg py-6 px-1 flex flex-col items-center hover:shadow-xl hover:shadow-gray-300">
                <Image
                  src={teacher.photo}
                  alt={teacher.name}
                  width={160}
                  height={200}
                  className="w-[160px] h-[200px] md:w-[200px] object-cover rounded-md"
                />
                <h3 className="mt-4 text-xl font-medium text-center">{teacher.name}</h3>
                <div className="flex flex-col items-center ">
                  <p className="text-gray-700 text-center mx-auto ">{teacher.designation}</p>
                  <p className="text-gray-500 text-center mx-auto mt-2 ">{teacher.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
