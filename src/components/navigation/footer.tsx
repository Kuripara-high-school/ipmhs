import Image from "next/image";
import ashraful from "@/assets/image/ashraful.png";

export default function Footer() {
    return (
        <footer className="max-width  mb-7 mt-primary">
            {/* Top Section */}
            <div className="flex flex-col items-center">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4  ">
                    {/* Author Info */}
                    <div className="flex items-center sm:items-start sm:flex-col gap-4">
                        <div className="rounded-full w-[70px] h-[70px] bg-sec overflow-hidden shrink-0">
                            <Image
                                src={ashraful}
                                alt="ashraful pathan"
                                className="object-cover scale-[130%] object-bottom mt-[6px]"
                            />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Created by</p>
                            <p className="font-semibold text-lg">Ashraful Pathan</p>
                            <p className="text-gray-600">Full Stack Developer</p>
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-lg mb-3">Useful Links</h4>
                        <a href="https://www.ashraful.top" target="_blank">Website</a>
                        <a href="https://www.ashraful.top" target="_blank">Order</a>
                        <a href="https://www.ashraful.top" target="_blank">Pricing</a>
                        <a href="https://www.ashraful.top" target="_blank">Offers</a>
                        <a href="https://www.ashraful.top" target="_blank">Services</a>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-lg mb-3">Contact Info</h4>
                        <a>Bangladesh, Narayanganj</a>
                        <a href="mailto:ashrafulpathan@yahoo.com">ashrafulpathan@yahoo.com</a>
                        <a href="tel:+8801614871378">+880 1614-871378</a>
                        <a href="https://www.ashraful.top" target="_blank">Website</a>
                    </div>

                    {/* Social Media */}
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-lg mb-3">Follow Me</h4>
                        <a href="#" target="_blank">Facebook</a>
                        <a href="#" target="_blank">LinkedIn</a>
                        <a href="#" target="_blank">Twitter</a>
                        <a href="#" target="_blank">Instagram</a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex-c-center">
                <hr className="w-full my-6" />
                <p className="text-sm text-gray-500 text-center">
                    © 2025 All rights reserved | Designed & Developed by{" "}
                    <span className="font-semibold">Ashraful Pathan</span>
                </p>
                <div className="the-text text-white">
                    <a href="https://www.google.com/">a</a>
                    <a href="https://www.facebook.com/">b</a>
                    <a href="https://x.com/AshrafulPa25233">c</a>
                    <a href="https://discord.gg/XzD3KPWP">d</a>
                    <a href="https://kuripara-high-school.vercel.app/">e</a>
                    <a href="https://kuriparahs.edu.bd/">2</a>
                    <a href="https://www.dhakacollege.edu.bd/en">f</a>
                    <a href="https://www.du.ac.bd/">g</a>
                    <a href="https://www.uniranks.com/ranking/bangladesh">h</a>
                    <a href="https://www.sohopathi.com/rank/top-20-schools-in-chandpur-district/">i</a>
                    <a href="https://dis.edu.bd/chandpur-version">k</a>
                    <a href="https://ashraful-pathan.web.app/">j</a>
                    <a href="https://www.ashraful.top/">school</a>
                    <a href="https://github.com/AshrafulPatHan">school</a>
                    <a href="https://www.facebook.com/p/-%E0%A6%87%E0%A6%AE%E0%A6%BE%E0%A6%AE%E0%A6%AA%E0%A7%81%E0%A6%B0-%E0%A6%AA%E0%A6%B2%E0%A7%8D%E0%A6%B2%E0%A7%80-%E0%A6%AE%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A6%B2-%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A-%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%9F--100066806514589/?locale=bn_IN">school</a>
                    <a href="https://dshe.portal.gov.bd/">school</a>
                    <a href="https://en.wikipedia.org/wiki/Secondary_school">school</a>
                    <a href="http://www.tgghsd.edu.bd/">school</a>
                    <a href="https://www.dcgpsc.edu.bd/">school</a>
                    <a href="https://igsc.edu.bd/">school</a>
                    <a href="https://sagc.edu.bd/">school</a>
                    <a href="https://dcghs.edu.bd/">school</a>
                    <a href="https://anandamoyeeghs.edu.bd/">school</a>
                    <a href="https://sgc.edu.bd/">school</a>
                    <a href="https://www.bbggc.gov.bd/en">school</a>
                    <a href="http://www.dhakamohilacollege.edu.bd/">school</a>
                    <a href="https://www.dhakacitycollege.edu.bd/">school</a>
                    <a href="https://ndc.edu.bd/">school</a>
                    <a href="https://www.isdbd.org/">school</a>
                    <a href="https://www.aisdhaka.org/">school</a>
                    <a href="https://premierschooldhaka.com/">school</a>
                    <a href="https://bd.ambafrance.org/The-French-International-School-of-Dhaka-EFID">school</a>
                    <a href="">school</a>
                </div>
            </div>
        </footer>
    );
}
