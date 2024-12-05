import Link from "next/link";
import React from "react";
import NavLinks from "@/components/layout/nav-links";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Separator } from "../ui/separator";
import Image from "next/image";
import Logo from "./logo";

export const socials = [
    "/linkedin_icon.png",
    "/facebook_icon.png",
    "/twitter_icon.png",
];

function Footer() {
    return (
        <footer className="bg-white border-t p-8 md:p-[55px] text-center md:text-left ">
            <div className="max-w-2xl lg:max-w-7xl mx-auto">
                {/* header */}
                <div className="flex flex-col gap-8 md:flex-row items-center justify-between md:mb-5">
                    {/* logo */}
                    <div className="my-5">
                        <Logo />
                    </div>
                    <div className="mt-5 mb-10 md:my-0">
                        <NavLinks />
                    </div>

                    {/* social icons desktop */}
                    <div className="hidden md:flex gap-[20px]">
                        {socials.map((social, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-1 bg-gray-800 rounded-full h-[34px] w-[34px]"
                            >
                                <Image
                                    width={50}
                                    height={50}
                                    src={social}
                                    alt="social icon"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* main */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* text part */}
                    <div className="md:w-2/5">
                        {/* heading */}
                        <div className="text-gray-900 inline-block font-bold text-[22px]  my-5">
                            Contact us:
                        </div>

                        {/* paragraphs */}
                        <div className="w-full h-full flex flex-col gap-y-[15px] leading-tight text-gray-900">
                            <p className="text-[16px]">
                                Email: abishaikashif975@positivus.com
                            </p>
                            <p className="text-[16px]">Phone: 555-567-8901</p>
                            <p className="text-[16px]">
                                Address: 1234 Main St <br />
                                Moonstone City, Stardust State 12345
                            </p>
                        </div>
                    </div>

                    {/* input part */}
                    <form
                        action=""
                        className="bg-primary/5 mt-10 md:mt-0 rounded-lg  gap-3 w-screen md:w-3/5 min-h-[180px]  grid place-content-center grid-cols-1 md:grid-cols-2 md:grid-rows-3 p-4 border"
                    >
                        <Textarea
                            className="col-span-1 row-span-3 w-full h-full resize-none md:rounded-r-none"
                            placeholder="Enter your message"
                        />
                        <Input
                            type="text"
                            placeholder="Enter your email"
                            className="md:rounded-l-none"
                        />
                        <Input
                            type="text"
                            placeholder="Enter your email"
                            className="md:rounded-l-none"
                        />
                        <Button className="md:rounded-l-none mt-5 md:mt-0">
                            Submit
                        </Button>
                    </form>
                </div>
                {/* </div> */}

                {/* social icons mobile */}
                <div className="md:hidden flex items-center justify-center gap-[20px] mt-10">
                    {socials.map((social, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-1 bg-gray-800 rounded-full h-[34px] w-[34px]"
                        >
                            <img src={social} alt="social icon" />
                        </div>
                    ))}
                </div>

                {/* seperator */}
                <div className="my-10">
                    <Separator className="bg-gray-300" />
                </div>

                {/* footer */}
                <div className="flex flex-col md:flex-row gap-1 md:gap-[40px]">
                    <p className="text-gray-700 text-[18px] font-light tracking-tight">
                        © 2024 Abishai k. All Rights Reserved.
                    </p>
                    <p className="text-gray-700 md:underline text-[18px] font-light tracking-tight">
                        Privacy Policy
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
