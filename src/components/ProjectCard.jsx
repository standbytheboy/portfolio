import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="flex flex-col rounded-2xl shadow-md p-6 bg-[#31323C] min-w-[300px] w-[300px]"
      whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <img src={project.image} alt="Imagem do projeto" className="mb-6 rounded-xl h-40 w-full object-cover"/>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      </div>

      <p className="text-sm flex-grow">{project.description}</p>
    </motion.div>
  );
};

export default ProjectCard;