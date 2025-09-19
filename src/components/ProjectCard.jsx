const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="rounded-2xl shadow-md p-6 hover:shadow-xl transition bg-[#31323C] min-w-[300px]">
        <img src={project.image} alt="Imagem do projeto" />
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </>
  );
};

export default ProjectCard;
