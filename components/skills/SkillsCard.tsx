type Subtitle = {
  name: string;
}

type SkillsCardProps = {
    title: string;
    subtitles: Subtitle[];
}

function SkillsCard({ title, subtitles }:SkillsCardProps){
    return(
        <>
            <h3 className="block leading-none text-white font-semibold text-lg mb-4 text-center sm:text-left">{ title }</h3>
                
            {
                subtitles.length > 0 && (
                    <ul className="flex flex-wrap justify-center sm:justify-start gap-3">
                        {
                            subtitles.map((subtitle, index) => (
                                <li
                                    key={index}
                                    className="basis-auto border border-white border-solid rounded-[120px] px-4 py-2 w-max text-white font-semibold
                                     text-sm"
                                >
                                    { subtitle.name }
                                </li>
                            ))
                        }
                    </ul>
                )
            }
        </>
    )
}

export default SkillsCard;