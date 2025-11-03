import {
  AngularFill,
  CssFill,
  FigmaFill,
  HtmlFill,
  JavascriptFill,
  PhpFill,
  PostgresqlFill,
  ReactFill,
} from "akar-icons";
import { motion } from "framer-motion";
import { FaDocker } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const technologies = [
  { name: "HTML/CSS", icon: <HtmlFill size={20} /> },
  { name: "React", icon: <ReactFill size={20} /> },
  { name: "Angular", icon: <AngularFill size={20} /> },
  { name: "JavaScript", icon: <JavascriptFill size={20} /> },
  { name: "Tailwind", icon: <CssFill size={20} /> },
  { name: "Figma", icon: <FigmaFill size={20} /> },
  { name: "PHP", icon: <PhpFill size={20} /> },
  { name: "SQL", icon: <PostgresqlFill size={20} /> },
  { name: "Docker", icon: <FaDocker size={20} /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Hero = () => {
  return (
    <main className="flex flex-col justify-center items-center text-center gap-16 md:gap-20 py-20 px-4">
      <motion.div
        className="flex flex-col items-center gap-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <TypeAnimation
            sequence={[
              "Lucas Morais",
              3000,
              "", // Apaga
              "Professor de Desenvolvimento Web",
              3000,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            className="font-bold text-4xl sm:text-5xl lg:text-6xl"
          />
        </motion.div>

        <motion.p variants={itemVariants} className="max-w-2xl mb-12">
          Aqui você vai conhecer um pouco do que já estudei, dos projetos que
          estou desenvolvendo e da minha jornada no universo da programação.
          Seja bem-vindo(a)!
        </motion.p>

        <motion.ul
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-[45rem]"
        >
          {technologies.map((tech) => (
            <motion.li
              key={tech.name}
              className="bg-[#462F9F] py-2 px-4 rounded-md flex items-center gap-2"
              variants={itemVariants}
            >
              {tech.icon}
              <span>{tech.name}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </main>
  );
};

export default Hero;
