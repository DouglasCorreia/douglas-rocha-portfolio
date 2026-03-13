"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type CaseItem = {
    id: number;
    title: string;
    image: string;
    tags: string[];
    link: string;
    description: string;
}

function Cases () {
    const [selectedCase, setSelectedCase] = useState<number | null>(null);

    const cases:CaseItem[] = [
        {
            id: 1,
            title: "Nicola Farmácias",
            image: "/img/cases/case-tray-nicola-farmacia.jpeg",
            tags: ["E-commerce", "Tray Commerce", "Agência Serie A"],
            description: "dsdsds",
            link: "https://www.nicolafarmacias.com.br/"
        }
    ]

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.5 },
        }),
    };

    return (
       <section id="cases">
            <div className="container">
                <div className="mb-12">
                    <h2 className="title">Cases</h2>

                    <p className="block leading-none text-center text-white text-md mt-4">Confira alguns dos projetos no qual fiz parte e desenvolvi</p>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    {
                        cases.map((c, index) => (
                            <motion.div
                                key={c.id}
                                className="col-span-4 case-item bg-white rounded-lg"
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={cardVariants}
                            >
                                <div className="case-image">
                                    <Image
                                        src={ c.image }
                                        alt={`Imagem do projeto ${c.title}`}
                                        width={ 379 }
                                        height={ 213 }
                                        className="w-full h-auto rounded-lg"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="case-content p-4">
                                    <div className="case-tags mb-3">
                                        <ul className="flex flex-wrap gap-2">
                                            {c.tags.map((tag, i) => (
                                                <li
                                                    key={ i }
                                                    className="px-3 py-1 rounded-xl bg-saffron-300 text-sm text-black-800"
                                                >
                                                    { tag }
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <h3 className="text-black-800 font-bold text-xl text-center mb-3">{ c.title }</h3>

                                    <button
                                        onClick={() => {
                                            setSelectedCase(c.id)
                                        }}
                                        className="mx-auto cursor-pointer flex flex-wrap items-center justify-center bg-black-700 text-white px-6 h-9 text-md font-normal rounded-2xl"
                                    >
                                        Ver mais detalhes
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Cases;