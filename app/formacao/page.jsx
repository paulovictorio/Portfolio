"use client";

import { motion } from "framer-motion";
import { FaAngular, FaHtml5, FaCss3, FaFigma, FaJs, FaShoppingCart, FaLeaf, FaReact, FaDatabase, FaAws, FaMobile, FaGithub, FaNodeJs } from "react-icons/fa";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Formacao() {
  return (
    <main className="bg-gray-700 text-white min-h-screen flex flex-col items-center px-4 py-12">
      <motion.div
        className="text-center max-w-3xl space-y-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl font-bold">Formação Acadêmica</h1>

        <div className="space-y-4 text-gray-300 flex flex-wrap justify-center gap-6">
          <div>
            <p className="text-lg font-semibold text-white">🎓 Fatec Votorantim</p>
            <p>Desenvolvimento de Software Multiplataforma</p>
            <p className="text-sm text-gray-300">(2023 – em andamento)</p>
          </div>

          <div>
            <p className="text-lg font-semibold text-white">💻 ETEC Elias Miguel Júnior</p>
            <p>Técnico em Informática para Internet</p>
            <p className="text-sm text-gray-300">(2020 – 2022)</p>
          </div>
        </div>
    </motion.div>
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl font-bold text-center">Projetos</h1>
          <div className="flex flex-wrap justify-center gap-6">
            <Card className="mt-6 w-96 bg-gray-600 shadow-lg rounded-lg">
            <CardBody className="flex flex-col justify-between h-full items-center text-center gap-2 px-16 ">
                 <FaLeaf size={40} />
              <Typography variant="h5" color="blue-gray" className="mb-2 text-white">
                RecycleHub
              </Typography>
              <Typography className="text-gray-300 px-4">
                Projeto Integrador do primeiro e segundo semestre da Fatec Votorantim, focado em sustentabilidade, 
                tinha como objetivo aproximar vendedores de grandes quantidades de sucata e outros materiais recicláveis com potenciais compradores.
              </Typography>
              <CardFooter className="flex flex-wrap gap-3 pb-4">
                <FaAngular size={24}/>
                <FaHtml5 size={24}/>
                <FaCss3 size={24}/>
                <FaJs size={24}/>
                <FaFigma size={24}/>
                <FaDatabase size={24}/>
                <FaGithub size={24}/>
              </CardFooter>
            </CardBody>
            </Card>

            <Card className="mt-6 w-96 bg-gray-600 shadow-lg rounded-lg">
              <CardBody className="flex flex-col items-center text-center">
                <FaShoppingCart size={40} />
                <Typography variant="h5" color="blue-gray" className="mb-2 text-white">
                  Projeto Compras Fatec
                </Typography>
                <Typography className="text-gray-300 px-4">
                  Projeto Integrador do terceiro semestre em diante da Fatec Votorantim, tem como objetivo facilitar a comunicação entre
                  a diretora de serviços administrativos e os demais funcionários da Fatec. O projeto permite que funcionários realizem
                  pedidos de materiais, enquanto a diretora de serviços administrativos, ou administradora, possui registros de todos os pedidos
                  para fins organizacionais, além de poder informar o status do pedido para quem o fez e filtrar pedidos também para organização e relatório
                </Typography>
                <CardFooter className="flex flex-wrap gap-3 px-4 pb-4">
                  <FaReact size={24}/>
                  <FaHtml5 size={24}/>
                  <FaCss3 size={24}/>
                  <FaJs size={24}/>
                  <FaNodeJs size={24}/>
                  <FaFigma size={24}/>
                  <FaDatabase size={24}/>
                  <FaGithub size={24}/>
                  <FaAws size={24}/>
                  <FaMobile size={24}/>
                </CardFooter>
              </CardBody>
            </Card>
          </div>
    </motion.div>
      
    </main>
  );
}
