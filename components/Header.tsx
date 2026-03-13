'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="header fixed top-0 left-0 w-full py-4 z-20">
            <div className="container">
                <div className="flex flex-wrap items-center">
                    <div className="header-log w-1/2 lg:w-1/5">
                        <Link href="/">
                            <Image
                                src="/img/drf-logo-white.png"
                                alt="Logo do desenvolvedor front-end Douglas Rocha"
                                width={80}
                                height={85}
                                className="w-full max-w-[85px] h-auto"
                                fetchPriority="high"
                            />
                        </Link>
                    </div>

                    <div className="headers-tabs w-1/2 flex justify-end lg:hidden" onClick={() => {setShowMenu(true)}}>
                        <div className="tabs-inner text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                        </div>
                    </div>

                    <div className={`header-nav max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:h-[100dvh] max-lg:bg-black/70 w-full lg:w-3/4 transition-opacity duration-200 ease-in-out max-lg:opacity-0 max-lg:invisible ${showMenu ? "max-lg:opacity-100 max-lg:visible" : "max-lg:opacity-0 max-lg:invisible" }`}>
                        <div className="header-nav-close w-full text-white p-4 lg:hidden" onClick={() => {setShowMenu(false)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ml-auto size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                        </div>

                        <nav>
                            <ul className="flex max-lg:flex-col max-lg:items-center lg:justify-end lg:gap-3.5">
                                <li>
                                    <Link
                                        href="/#about"
                                        scroll={true}
                                        className="max-lg:py-4 max-lg:block text-white text-lg font-semibold duration-200 transition-colors lg:hover:text-anakiwa-300"
                                    >
                                        Sobre
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/#services"
                                        scroll={true}
                                        className="max-lg:py-4 max-lg:block text-white text-lg font-semibold duration-200 transition-colors lg:hover:text-anakiwa-300"
                                    >
                                        Serviços
                                    </Link>  
                                </li>

                                <li>
                                    <Link
                                        href="/#cases"
                                        scroll={true}
                                        className="max-lg:py-4 max-lg:block text-white text-lg font-semibold duration-200 transition-colors lg:hover:text-anakiwa-300"
                                    >
                                        Cases
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/#skills"
                                        scroll={true}
                                        className="max-lg:py-4 max-lg:block text-white text-lg font-semibold duration-200 transition-colors lg:hover:text-anakiwa-300"
                                    >
                                        Habilidades</Link>
                                </li>

                                <li>
                                    <Link
                                        href="/#contact"
                                        scroll={true}
                                        className="max-lg:py-4 max-lg:block text-white text-lg font-semibold duration-200 transition-colors lg:hover:text-anakiwa-300"
                                    >
                                        Contato</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;