import Image from "next/image";
import Link from "next/link";

function Header() {
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

                <div className="header-nav w-full lg:w-3/4">
                    <nav>
                        <ul className="flex justify-end gap-3.5">
                            <li>
                                <Link
                                    href="/#about"
                                    scroll={true}
                                    className="text-white text-lg font-semibold duration-200 transition-colors lg:hover:text-anakiwa-300"
                                >
                                    Sobre
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#services"
                                    scroll={true}
                                    className="text-white text-lg font-semibold duration-200 transition-colors lg:hover:text-anakiwa-300"
                                >
                                    Serviços
                                </Link>  
                            </li>

                            <li>
                                <Link
                                    href="/#cases"
                                    scroll={true}
                                    className="text-white text-lg font-semibold duration-200 transition-colors lg:hover:text-anakiwa-300"
                                >
                                    Cases
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#skills"
                                    scroll={true}
                                    className="text-white text-lg font-semibold duration-200 transition-colors lg:hover:text-anakiwa-300"
                                >
                                    Habilidades</Link>
                            </li>

                            <li>
                                <Link
                                    href="/#contact"
                                    scroll={true}
                                    className="text-white text-lg font-semibold duration-200 transition-colors lg:hover:text-anakiwa-300"
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