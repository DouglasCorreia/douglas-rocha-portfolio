"use client";

import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { IMaskInput } from "react-imask";
import ReCAPTCHA from "react-google-recaptcha";

function Contact () {
    const [status, setStatus] = useState<"loading" | "success" | "error" | "error-recaptcha" | "" | null>(null);
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        phone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        if (!captchaValue) {
            setStatus("error-recaptcha");

            setTimeout(() => {
                setStatus("");
            }, 3000);
            
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "", phone: "" });

                setTimeout(() => {
                    setStatus("");
                }, 3000);
            } else {
                setStatus("error");

                setTimeout(() => {
                    setStatus("");
                }, 3000);
            }
        } catch (error) {
            setStatus("error");

            setTimeout(() => {
                setStatus("");
            }, 3000);
        }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    return (
        <section ref={ref} id="contact">
            <div className="container">
                <div className="mb-12">
                    <h2 className="title">Contato</h2>
                </div>

                <motion.div
                    className="grid grid-cols-2 gap-8"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    <motion.div
                        variants={fadeLeft}
                        className="col-span-2 lg:col-span-1"
                    >
                        <p className="block leading-6 text-white text-md">Se você está em busca de um desenvolvedor front-end que combine excelência técnica com visão estratégica de produto, posso ajudar a transformar suas ideias em experiências digitais eficientes, modernas e orientadas a resultados. Vamos conversar sobre como posso contribuir para o sucesso do seu projeto.</p>
                    </motion.div>

                    <div className="col-span-2 lg:col-span-1">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <motion.input
                                type="text"
                                name="name"
                                placeholder="Seu nome"
                                variants={fadeUp}
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />
                            
                            <motion.input
                                type="email"
                                name="email"
                                placeholder="Seu e-mail"
                                variants={fadeUp}
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="input-field"
                            />

                            <motion.div
                                variants={fadeUp}
                                className="w-full"
                            >
                                <IMaskInput
                                    mask={[
                                        { mask: "(00) 0000-0000" },
                                        { mask: "(00) 00000-0000" }
                                    ]}
                                    value={formData.phone}
                                    onAccept={(value) =>
                                        setFormData({ ...formData, phone: value })
                                    }
                                    placeholder="Telefone ou celular"
                                    className="input-field"
                                />
                            </motion.div>

                            <motion.textarea
                                name="message"
                                placeholder="Sua mensagem"
                                variants={fadeUp}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="input-field"
                                rows={5}
                            />

                            <ReCAPTCHA
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                                onChange={(value: string | null) => setCaptchaValue(value)}
                            />

                            <motion.button
                                custom={3}
                                variants={fadeUp}
                                type="submit"
                                className="flex items-center justify-center h-12 rounded-4xl bg-white cursor-pointer text-sm font-bold uppercase duration-200 transition-colors lg:hover:bg-anakiwa-300"
                            >
                                {
                                    status === "loading" ? "Enviando..." : "Enviar"    
                                }
                            </motion.button>
                        </form>

                        {status === "success" && <p className="rounded-full mt-4 block leading-none text-center py-3.5 text-white bg-green-400">Mensagem enviada!</p>}
                        {status === "error-recaptcha" && <p className="rounded-full mt-4 block leading-none text-center py-3.5 text-white bg-red-400">Por favor, confirme que você não é um robô!</p>}
                        {status === "error" && <p className="rounded-full mt-4 block leading-none text-center py-3.5 text-white bg-red-400">Erro ao enviar.</p>}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact;