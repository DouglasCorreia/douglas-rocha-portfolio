import SkillsCard from "@/components/skills/SkillsCard";
import SkillsCardAnimatedWrapper from "@/components//skills/SkillsCardAnimatedWrapper";
import skillsData from '../data/skills.json';
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiVuedotjs, SiGit, SiNpm, SiNextdotjs, SiTailwindcss, SiSass, SiGraphql, SiFigma, SiWordpress, SiVite, SiWebpack } from "react-icons/si";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  "HTML": SiHtml5,
  "CSS": SiCss,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "React": SiReact,
  "Vue": SiVuedotjs,
  "GIT": SiGit,
  "NPM": SiNpm,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "SCSS/SASS": SiSass,
  "GraphQL": SiGraphql,
  "Figma": SiFigma,
  "Wordpress": SiWordpress,
  "Vite": SiVite,
  "Webpack": SiWebpack,
};

type Skills = {
    title: string;
    icon: React.ComponentType<{ size?: number }>;
}

function Skills() {
    const skills: Skills[] = skillsData.map((skill) => {
        const IconComponent = iconMap[skill.title];
        
        return {
            title: skill.title,
            icon: IconComponent || SiHtml5,
        };
    });

    return (
        <section id="technologies" className="bg-gradient-to-b from-black-900 to-black-800">
            <div className="container">
                <div className="mb-12">
                    <h2 className="title">Tecnologias</h2>
                    <p className="block leading-none text-center text-white text-md mt-4">Possuo experiência com tecnologias modernas e amplamente utilizadas no mercado, incluindo:</p>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    {
                        skills.map((skill, index) => (
                            <SkillsCardAnimatedWrapper
                                key={index}
                                index={index}
                            >
                                <SkillsCard
                                    title={skill.title }
                                    icon={skill.icon}
                                />
                            </SkillsCardAnimatedWrapper>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills;