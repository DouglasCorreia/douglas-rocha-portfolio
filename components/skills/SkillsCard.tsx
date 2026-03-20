type SkillsCardProps = {
  title: string;
  icon: React.ComponentType<{ size?: number }>;
}

function SkillsCard({ title, icon: Icon }:SkillsCardProps){
    return(
        <>
            <div className="text-center flex justify-center text-black-400 mb-4">
                <Icon size={40} />
            </div>

            <h3 className="block leading-none text-black-400 font-medium text-md text-center">{ title }</h3>
        </>
    )
}

export default SkillsCard;