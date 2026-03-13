"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import casesData from '../data/cases.json';

type CaseTagsItem = {
    title: string;
    url: string;
}

type CaseItem = {
    id: number;
    title: string;
    image: string;
    tags: CaseTagsItem[];
    link: string;
    description: string;
}

function Cases () {
    const [selectedCase, setSelectedCase] = useState<number | null>(null);

    const cases: CaseItem[] = casesData;

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.5 },
        }),
    };

    const activeCase = cases.find((c) => c.id === selectedCase);

    return (
       <section id="cases">
            <div className="container">
                <div className="mb-12">
                    <h2 className="title">Cases</h2>

                    <p className="block leading-none text-center text-white text-md mt-4">Confira alguns dos projetos no qual fiz parte e desenvolvi</p>
                </div>

                <div className="grid grid-cols-12 gap-4">
                    {
                        cases.slice(0,6).map((c, index) => (
                            <motion.div
                                key={c.id}
                                className="col-span-12 sm:col-span-6 lg:col-span-4 case-item bg-white rounded-lg flex flex-col justify-between"
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
                                                    className="px-3 py-1 rounded-full bg-saffron-400 text-sm text-black-800"
                                                >
                                                    {
                                                        tag.url 
                                                        ? <a href={tag.url} target="_blank" rel="noopener noreferer">{tag.title}</a> 
                                                        : tag.title
                                                    }
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <h3 className="text-black-800 font-bold text-xl text-center mb-3">{ c.title }</h3>

                                    <button
                                        onClick={() => {
                                            setSelectedCase(c.id)
                                        }}
                                        className="mx-auto cursor-pointer flex flex-wrap items-center justify-center bg-black-700 text-white px-6 h-9 text-md font-normal rounded-full"
                                    >
                                        Ver mais detalhes
                                    </button>
                                </div>
                            </motion.div>
                        ))
                    }
                </div>

                <AnimatePresence>
                    {selectedCase && activeCase && (
                        <motion.div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCase(null)}
                        >
                            <motion.div
                                className="grid grid-cols-2 lg:grid-cols-12 gap-8 bg-white rounded-xl max-w-6xl w-11/12 p-4 relative"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setSelectedCase(null)}
                                    className="absolute top-4 right-4 text-white text-xl cursor-pointer"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
                                </button>

                                <div className="col-span-2 lg:col-span-6">
                                    <Image
                                        src={activeCase.image}
                                        alt={activeCase.title}
                                        width={800}
                                        height={450}
                                        className="w-full rounded-lg mb-4"
                                    />
                                </div>

                                <div className="col-span-2 lg:col-span-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {activeCase.tags.map((tag, i) => (
                                            <span
                                            key={i}
                                            className="px-3 py-1 rounded-full bg-saffron-400 text-xs text-black"
                                            >
                                                {
                                                    tag.url 
                                                    ? <a href={tag.url} target="_blank" rel="noopener noreferer">{tag.title}</a> 
                                                    : tag.title
                                                }
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3">{activeCase.title}</h3>

                                    <div className="*:text-gray-700 *:mb-4 *:last-of-type:mb-0 *:text-sm max-sm:overflow-y-auto max-sm:max-h-60" dangerouslySetInnerHTML={{ __html: activeCase.description }} />

                                    <a
                                        href={activeCase.link}
                                        target="_blank"
                                        rel="noopener noreferer"
                                        className="inline-block bg-black-700 text-md text-white px-6 py-2 rounded-full mt-4"
                                    >
                                        Visitar projeto
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                    </AnimatePresence>
            </div>
        </section>
    );
}

export default Cases;