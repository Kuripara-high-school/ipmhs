import Image from "next/image";
import phone  from "@/assets/icon/phone.svg";
import email  from "@/assets/icon/mail.svg";
import Location  from "@/assets/icon/map-pin.svg";

export default function Map() {
  return (
    <div className="mt-high">
      <div className="bg-gradient-to-bl from-amber-400 to-blue-600 bg-clip-text text-transparent ">
        <h2 className="text-header text-center mb-5">
          ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়
        </h2>
      </div>
      <p className="text-center mb-8 font-bold text-sm md:text-lg">Reach Out, Connect, and Start Your Journey with Us Today!</p>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 md:gap-28 mb-low">
        <div className="flex-c-center">
          <div className="w-20 h-20 rounded-full bg-primary mb-2 flex-center"><Image src={phone} alt="icon" /></div>
          <h3 className="text-2xl font-bold">Phone</h3>
          <p className="">+8801309103904</p>
        </div>
        <div className="flex-c-center">
          <div className="w-20 h-20 rounded-full bg-primary mb-2 flex-center"><Image src={email} alt="icon" /></div>
          <h3 className="text-2xl font-bold">Email</h3>
          <p className="">imampurpm@gmail.com</p>
        </div>
        <div className="flex-c-center">
          <div className="w-20 h-20 rounded-full bg-primary mb-2 flex-center"><Image src={Location} alt="icon" /></div>
          <h3 className="text-2xl font-bold">Location</h3>
          <p className="">মতলব উত্তর, চাঁদপুর</p>
          <p>কালিপুর বাজার</p>
        </div>
      </div>

      {/* google map */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.669553868412!2d90.61264229999999!3d23.472381199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375454a647830a27%3A0x775bffb2437c71bc!2sImampur%20High%20School!5e0!3m2!1sen!2sbd!4v1757323227696!5m2!1sen!2sbd"
          height="500"
          className="rounded-lg shadow-md border-0 w-[100vw] "
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
