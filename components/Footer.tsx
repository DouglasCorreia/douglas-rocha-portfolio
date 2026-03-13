import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer bg-black-800 pt-8 border border-t-black-500">
            <div className="container teste">
                <div className="flex flex-wrap justify-center lg:justify-between items-start">
                    <div className="footer-logo w-full lg:w-1/4">
                        <Image
                            src="/img/drf-logo-white.png"
                            alt="Logo do desenvolvedor front-end Douglas Rocha"
                            width={112}
                            height={117}
                            className="w-full mx-auto lg:mx-0 max-w-28 h-auto"
                            loading="lazy"
                        />
                    </div>

                    <div className="footer-contact w-full lg:w-1/4 mt-4 lg:mt-0">
                        <h4 className="block leading-none font-semibold text-lg text-white mb-4 text-center lg:text-left">Institucional</h4>

                        <ul className="*:mb-2 *:last-of-type:mb-0">
                            <li className="leading-none">
                                <Link
                                    href="/termos-de-uso"
                                    className="flex items-center justify-center lg:justify-start gap-x-1 text-sm text-white transition-colors duration-200 lg:hover:text-anakiwa-300"
                                >
                                    Termos de uso
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-contact w-full lg:w-1/4 mt-4 lg:mt-0">
                        <h4 className="block leading-none font-semibold text-lg text-white mb-4 text-center lg:text-left">Contato</h4>

                        <ul className="*:mb-2 *:last-of-type:mb-0">
                            <li className="leading-none">
                                <a
                                    href="https://wa.me/5511949610992"
                                    target="_blank"
                                    rel="noreferer noopener"
                                    aria-label="Link para o celular"
                                    className="flex items-center justify-center lg:justify-start gap-x-1 text-sm text-white transition-colors duration-200 lg:hover:text-anakiwa-300"
                                >
                                    <FaWhatsapp />

                                    (11) 94961-0992
                                </a>
                            </li>
                            <li className="leading-none">
                                <a
                                    href="mailto:douglascorreia17@gmail.com"
                                    target="_blank"
                                    rel="noreferer noopener"
                                    aria-label="Link para o e-mail"
                                    className="flex items-center justify-center lg:justify-start gap-x-1 text-sm text-white transition-colors duration-200 lg:hover:text-anakiwa-300"
                                >
                                    <FaRegEnvelope />

                                    douglascorreia17@gmail.com
                                </a>
                            </li>
                            <li className="leading-none">
                                <a
                                    href="https://www.linkedin.com/in/douglas-rocha/"
                                    target="_blank"
                                    rel="noreferer noopener"
                                    aria-label="Link para o linkedin"
                                    className="flex items-center justify-center lg:justify-start gap-x-1 text-sm text-white transition-colors duration-200 lg:hover:text-anakiwa-300"
                                >
                                    <FaLinkedinIn />

                                    Douglas Rocha
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="pb-8 mt-8">
                <div className="container">
                    <hr className="border-t-black-500 border-solid mb-8" />

                    <div className="flex flex-wrap items-center justify-center sm:justify-end">
                        <div className="w-full sm:w-1/2">
                            <p className="block text-center sm:text-left leading-none text-xs text-white">© {new Date().getFullYear()} DRF - Doug Rock Front-end. Todos os direitos reservados.</p>
                        </div>

                        <div className="w-full sm:w-1/2 mt-4 lg:mt-0">
                            <p className="flex items-center gap-2 justify-center sm:justify-end leading-none text-xs text-white">
                                Desenvolvido com

                                <Image
                                    src="/next.svg"
                                    alt="Logo do framework Next.js"
                                    width={112}
                                    height={23}
                                    className="w-full max-w-16 h-auto invert-100"
                                    loading="lazy"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;