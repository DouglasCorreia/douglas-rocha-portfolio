import { FaWordpress, FaShoppingCart, FaGlobe, FaCog, FaRegWindowMaximize } from "react-icons/fa";
import { IconType } from "react-icons";

type ServiceCardProps = {
    title: string;
    description: string;
    icon: string;
}

type IconItem = {
  name: string;
  iconBase: IconType;
};

function ServiceCard({ title, description, icon }:ServiceCardProps){
    const icons:IconItem[] = [
        {
            name: "site",
            iconBase: FaGlobe
        },
        {
            name: "cart",
            iconBase: FaShoppingCart
        },
        {
            name: "blog",
            iconBase: FaWordpress
        },
        {
            name: "page",
            iconBase: FaRegWindowMaximize
        },
        {
            name: "gear",
            iconBase: FaCog
        }
    ];

    const IconComponent = icons.find((p) => p.name === icon)?.iconBase;

    return(
        <>
            <div className="flex items-center justify-center size-10 bg-white rounded-lg mb-4">
                { IconComponent && <IconComponent className="text-black-700" /> }
            </div>

            <h3 className="block leading-none text-white font-semibold text-lg mb-4 text-left">{ title }</h3>
                
            <p className="text-white text-sm leading-6">{ description }</p>
        </>
    )
}

export default ServiceCard;