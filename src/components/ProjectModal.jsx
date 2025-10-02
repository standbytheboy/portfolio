const ProjectModal = ({ project, onClose }) => {
  // Impede o clique no conteúdo do modal de fechá-lo
  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[#00000050] flex justify-center items-center z-50 p-4"
    >
      {/* Conteúdo do Modal */}
      <div
        onClick={handleContentClick}
        className="bg-[#31323C] rounded-lg max-w-2xl w-full p-12 relative animate-fade-in-up"
      >
        {/* Botão de fechar */}
        <button
          onClick={onClose}
          className="absolute top-12 right-12 text-white hover:text-gray-400 text-3xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-3xl font-bold mb-4 text-white">{project.title}</h2>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-md mb-4" />
        <p className="text-gray-200 mb-6">{project.description}</p>
        
        {/* Links */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#462F9F] text-white rounded hover:bg-purple-800 transition-colors"
            >
              Ver Online
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800 transition-colors"
            >
              Código Fonte (GitHub)
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;