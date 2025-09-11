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
            </div>
        </footer>
    );
}
