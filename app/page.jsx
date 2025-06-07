"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
        <section
          id="sobre"
          className="flex flex-col items-center justify-center min-h-screen text-white px-4 py-8 bg-black"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <Image
              src="/foto.jpeg"
              alt="Logo"
              width={150}
              height={150}
              className="rounded-full mb-6"
            />

            <div className="max-w-3xl text-center space-y-4">
              <motion.h1
                className="text-2xl font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Sobre Mim
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Olá! Eu me chamo Paulo César Victório e atualmente estudo Desenvolvimento de Software Multiplataforma na Fatec Votorantim. Dou
            continuidade aos meus estudos em programação após ter me formado como técnico de Informática para Internet
            pela ETEC Elias Miguel Júnior, também em Votorantim.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Meu interesse por desenvolvimento começou no final do ensino fundamental com a programação de jogos — área
                na qual planejo seguir carreira.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Ao longo da minha formação, adquiri conhecimentos fundamentais em programação orientada a objetos,
                bancos de dados relacionais e não relacionais, engenharia de software e gerenciamento de projetos.
                Essas habilidades são essenciais para o desenvolvimento de jogos, onde desejo me especializar.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Este portfólio tem como objetivo apresentar minhas capacitações técnicas adquiridas durante meus cursos,
                além de destacar projetos em que atuei no desenvolvimento.
              </motion.p>
            </div>
          </motion.div>
        </section>
    </main>
  );
}
