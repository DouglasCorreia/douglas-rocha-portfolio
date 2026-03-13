import SkillsCard from "@/components/skills/SkillsCard";
import SkillsCardAnimatedWrapper from "@/components//skills/SkillsCardAnimatedWrapper";

function Skills() {
    const skills = [
        {
            title: "Front-end",
            subtitles: [
                {
                    name: "HTML"
                },
                {
                    name: "CSS"
                },
                {
                    name: "JavaScript"
                },
                {
                    name: "TypeScript"
                },
                {
                    name: "SCSS"
                },
                {
                    name: "SASS"
                },
                {
                    name: "React"
                },
                {
                    name: "Tailwind CSS"
                },
                {
                    name: "Wordpress"
                }
            ]
        },
        {
            title: "Habilidades Essênciais",
            subtitles: [
                {
                    name: "Desenvolvimento front-end"
                },
                {
                    name: "UX/UI"
                },
                {
                    name: "SEO"
                },
                {
                    name: "SEO on-page"
                },
                {
                    name: "Page Speed"
                },
                {
                    name: "Desenvolvimento Responsivo"
                }
            ]
        },
        {
            title: "Plataformas de e-commerce",
            subtitles: [
                {
                    name: "Wake Commerce"
                },
                {
                    name: "Tray Commerce"
                },
                {
                    name: "UAPPI"
                },
                {
                    name: "Olist VNDA"
                },
                {
                    name: "Yampi"
                },
                {
                    name: "Nuvem Shop"
                },
                {
                    name: "WooCommerce"
                }
            ]
        },
        {
            title: "Controle de versão",
            subtitles: [
                {
                    name: "Git"
                },
                {
                    name: "GitHub"
                },
                {
                    name: "GitLab"
                },
                {
                    name: "Bitbucket"
                },
            ]
        }
    ]

    return (
        <section id="skills" className="bg-gradient-to-b from-black-900 to-black-800">
            <div className="container">
                <div className="mb-12">
                    <h2 className="title">Habilidades</h2>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    {
                        skills.map((skill, index) => (
                            <SkillsCardAnimatedWrapper
                                key={index}
                                index={index}
                            >
                                <SkillsCard
                                    title={skill.title}
                                    subtitles={skill.subtitles}
                                />
                            </SkillsCardAnimatedWrapper>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;