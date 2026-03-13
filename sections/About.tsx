
import AboutAnimatedWrapper from "@/components/about/AboutAnimatedWrapper";
import Image from "next/image";

function About () {
    return (
        <section className="flex items-center bg-gradient-to-b from-black-800 to-black-900" id="about">
            <div className="container">
                <AboutAnimatedWrapper
                >
                    <div className="col-span-2 lg:col-span-1">
                        <Image
                            src="/img/image-profile-work.jpg"
                            alt="Logo do desenvolvedor front-end Douglas Rocha"
                            width={365}
                            height={535}
                            className="w-full max-w-[365px] h-auto mx-auto lg:mx-0 rounded-tl-4xl rounded-br-4xl"
                            loading="lazy"
                        />
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <h2 className="block leading-none text-white text-4xl font-bold uppercase mb-6">Sobre mim</h2>

                        <p className="block leading-6 text-white text-md mb-2">
                            Desenvolvedor Front-End com quase 8 anos de experiência transformando ideias em e-commerces de alta performance que geram resultados reais para o negócio.    
                        </p>

                        <p className="block leading-6 text-white text-md mb-2">
                           Especializo-me em construir experiências digitais que convertem: 
                        </p>

                        <ul className="pl-4 text-white mb-4 mt-4 *:mb-2 *:last-of-type:mb-0">
                            <li className="list-disc!">Desenvolvimento de interfaces responsivas para plataformas Wake Commerce, Tray Commerce, Olist VNDA, Yampi e Nuvem Shop;</li>
                            <li className="list-disc!">Otimização de performance e aplicação de SEO técnico para maximizar conversão e retenção;</li>
                            <li className="list-disc!">Criação de sites institucionais, blogs e landing pages com foco em jornada do usuário.</li>
                        </ul>

                        <p className="block leading-6 text-white text-md">
                            Tenho sólida formação em SEO técnico e UX/UI, com certificações em HTML, CSS, SEO avançado e projetos front-end. Meu código é sempre organizado, escalável e orientado à sustentabilidade do produto.
                        </p>
                    </div>
                </AboutAnimatedWrapper>
            </div>
        </section>
    )
}

export default About;