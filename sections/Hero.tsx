import { FaLinkedinIn, FaGithub, FaGoogle, FaWhatsapp } from "react-icons/fa";

function Hero () {
    return (
       <section className="min-h-dvh relative" id="hero">
            <div className="parallax-bg absolute left-0 top-0 h-dvh w-full bg-[url('https://douglas-rocha-portfolio.vercel.app/img/banner-hero.jpg')] bg-center lg:bg-fixed bg-cover z-10 grayscale-[60%]"></div>

            <div className="container absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1 className="block leading-none text-center lg:text-left text-white text-[64px] sm:text-8xl uppercase font-bold font-montserrat">
                    <span className="block leading-none font-normal text-5xl sm:text-7xl">Douglas</span>
                    
                    Rocha

                    <span className="block text-[15px] sm:text-[23px] tracking-[0.3px] w-max max-lg:mx-auto">
                        <span className="typewriter">Desenvolvedor front-end</span>
                    </span>
                </h1>

                <div className="flex items-center justify-center lg:justify-start gap-4 mt-4">
                    <a
                        href="/cv-douglas-rocha.pdf"
                        className="flex items-center border border-white h-8 w-max px-6 rounded-2xl text-white"
                        download
                        aria-label="Link para baixar o currículo"
                    >
                        Currículo
                    </a>

                    <a
                        href="#cases"
                        className="flex items-center border border-white h-8 w-max px-6 rounded-2xl text-white"
                        aria-label="Link para direcionar até a seção de projetos da página"
                    >
                        Projetos
                    </a>
                </div>
            </div>

            <div className="container absolute z-10 top-full left-1/2 -translate-x-1/2 -mt-16">
                <ul className="flex items-center justify-center lg:justify-start gap-2">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/douglas-rocha/"
                            target="_blank"
                            rel="noreferer noopener"
                            aria-label="Link para o linkedin"
                            className="text-3xl text-white"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://github.com/douglascorreia"
                            target="_blank"
                            rel="noreferer noopener"
                            aria-label="Link para a página do github"
                            className="text-3xl text-white"
                        >
                            <FaGithub />
                        </a>
                    </li>

                    <li>
                        <a
                            href="mailto:douglascorreia17@gmail.com"
                            target="_blank"
                            rel="noreferer noopener"
                            aria-label="Link para o e-mail"
                            className="text-3xl text-white"
                        >
                            <FaGoogle />
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://wa.me/5511949610992"
                            target="_blank"
                            rel="noreferer noopener"
                            aria-label="Link para o celular"
                            className="text-3xl text-white"
                        >
                            <FaWhatsapp />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Hero;