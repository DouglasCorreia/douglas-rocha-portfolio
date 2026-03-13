import ServicesCard from "@/components/services/ServicesCard";
import ServicesCardAnimatedWrapper from "@/components/services/ServicesCardAnimatedWrapper";
import servicesData from '../data/services.json';

type servicesItem = {
    title: string;
    description: string;
    icon: string;
}

function Services() {
    const services:servicesItem[] = servicesData;

    return (
        <section className="bg-gradient-to-b from-black-900 to-black-800" id="services">
            <div className="container">
                <div className="mb-12">
                    <h2 className="title">Serviços</h2>

                    <p className="block leading-none text-center text-white text-md mt-4">Explore os serviços que disponibilizo e veja como posso transformar suas ideias em realidade</p>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    {
                        services.map((service, index) => (
                            <ServicesCardAnimatedWrapper
                                key={index}
                                index={index}
                            >
                                <ServicesCard
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                />
                            </ServicesCardAnimatedWrapper>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services;