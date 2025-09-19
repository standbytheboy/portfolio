const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col rounded-2xl shadow-md p-6 hover:shadow-xl transition bg-[#31323C] min-w-[300px] w-[300px]">
      {/* Container para a imagem e o título */}
      <div>
        <img src={project.image} alt="Imagem do projeto" className="mb-6 rounded-xl h-40 w-full object-cover"/>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      </div>
      
      {/* Parágrafo que vai crescer para preencher o espaço */}
      <p className="text-sm flex-grow">{project.description}</p>
    </div>
  );
};

export default ProjectCard;