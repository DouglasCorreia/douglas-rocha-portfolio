import SkillsCard from "@/components/skills/SkillsCard";
import SkillsCardAnimatedWrapper from "@/components//skills/SkillsCardAnimatedWrapper";
import skillsData from '../data/skills.json';

type SkillsSubtitles = {
    name: string;
}

type Skills = {
    title: string;
    subtitles: SkillsSubtitles[];
}

function Skills() {
    const skills:Skills[] = skillsData;

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