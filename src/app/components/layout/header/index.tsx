"use client";

import { useState } from "react";
import Logo from "../logo";
import Link from "next/link";

const Header = () => {
    const handleDownloadPDF = () => {
        window.print();
    };
    return (
        <header className="navbar top-0 left-0 z-999 w-full absolute">
            <div className="container">
                <nav className="py-7">
                    <div className="flex items-center gap-4 sm:gap-8">
                        <div>
                            <Logo />
                        </div>

                        <Link
                            className="download-link relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                            download="Jose_Luis_Acosta_Resume.pdf"
                            href="/data/resume.pdf">
                            <span className="relative z-10 text-xl font-medium text-black group-hover:text-white transition-colors duration-300">
                                Download PDF Resume
                            </span>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
