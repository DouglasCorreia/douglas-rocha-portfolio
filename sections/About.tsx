
import AboutAnimatedWrapper from "@/components/about/AboutAnimatedWrapper";
import Image from "next/image";

function About () {
    return (
        <section className="flex items-center bg-gradient-to-b from-black-800 to-black-900" id="about">
            <div className="container">
                <AboutAnimatedWrapper
                >
                    <div className="col-span-2 lg:col-span-1">
                        <div className="relative w-full max-w-[365px] before:content-[''] before:absolute before:w-full before:h-full before:inset-0 before:border before:border-white before:top-[18px] sm:before:top-[18px] before:left-[14px] sm:before:left-[34px] before:rounded-tl-4xl before:rounded-br-4xl">
                            <Image
                                src="/img/image-profile-work.jpg"
                                alt="Logo do desenvolvedor front-end Douglas Rocha"
                                width={365}
                                height={535}
                                className="w-full max-w-[365px] h-auto mx-auto lg:mx-0 rounded-tl-4xl rounded-br-4xl relative z-10"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1">
                        <h2 className="block leading-none text-white text-4xl font-medium mb-6">Sobre mim</h2>

                        <p className="block leading-6 text-white text-md mb-2">Desenvolvedor Front-End com 8 anos de experiência criando aplicações web, interfaces de alta performance e produtos digitais voltados à melhor experiência do usuário. Atualmente, meu foco está no desenvolvimento com React, TypeScript e JavaScript, construindo aplicações modernas, escaláveis e de fácil manutenção.</p>

                        <p className="block leading-6 text-white text-md mb-2">Tenho experiência no desenvolvimento de interfaces responsivas, reutilização de componentes, integração com APIs REST, otimização de performance e aplicação de boas práticas de desenvolvimento, sempre buscando código limpo, organizado e sustentável para o crescimento do produto.</p>

                        <p className="block leading-6 text-white text-md mb-2">Minha stack inclui React, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, Git, Vite, Webpack e Figma. Também possuo experiência com metodologias ágeis (Scrum e Kanban), versionamento de código e colaboração próxima com times de produto, design e back-end.</p>

                        <p className="block leading-6 text-white text-md">Ao longo da minha carreira, desenvolvi soluções para grandes operações de e-commerce utilizando plataformas como Wake Commerce, Tray Commerce, Olist VNDA, Yampi e Nuvem Shop. Essa experiência me proporcionou uma forte visão de negócio, conversão, SEO técnico e otimização da experiência do usuário, conhecimentos que aplico no desenvolvimento de qualquer produto digital.</p>
                    </div>
                </AboutAnimatedWrapper>
            </div>
        </section>
    )
}

export default About;