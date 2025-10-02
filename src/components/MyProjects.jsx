import Carousel from "./Carousel";
import ProjectCard from "./ProjectCard";
import GardenMeImg from "../assets/gardenme.png";
import CalcImg from "../assets/Calc.png";
import TasksImg from "../assets/Tasks.png";
import SquareGameImg from "../assets/SquareGame.png";
import NexusImg from "../assets/Nexus.png";
import IdeaImg from "../assets/1dea.png";
import ServicilyImg from "../assets/Servicily.png";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Nexus Studium",
    description:
      "Inicialmente projeto integrador de Front-end do Senac Lapa Tito, essa plataforma visa compartilhar vídeoaulas sobre quaisquer tópicos, e é voltada para a comunidade. Feita em HTML/CSS puro, depois refatorada para Angular e Back-end em produção.",
    image: NexusImg,
    liveURL: null,
    repoURL: "https://github.com/standbytheboy/nexusStudiumRefatored"
  },
  {
    title: "GardenMe",
    description:
      "E-commerce desenvolvido em ReactJs e PHP, com banco de dados MySQL. O diferencial empreendedor é que, ao adquirir plantas nessa plataforma, os clientes recebam automaticamente dicas de como cuidar de suas plantas.",
    image: GardenMeImg,
  },
  {
    title: 'Jogo "Clique no Quadrado"',
    description:
      'Jogo simples e divertido para usuários de todas as idades. As funções são ativadas ao clicar no botão "Iniciar Jogo" e testam a agilidade do jogador.',
    image: SquareGameImg,
  },
  {
    title: "Calculadora",
    description:
      "Exercício prático aplicando estudos iniciais em JavaScript e Display Grid.",
    image: CalcImg,
  },
  {
    title: "1DEA",
    description:
    "Protótipo no Figma de app para empresas, que disponibiliza feedback e utilização de ideias de funcionários na produção.",
    image: IdeaImg,
  },
  {
    title: "Lista de Tarefas",
    description:
      "Projeto feito para praticar a manipulação do DOM utilizando JavaScript puro. O usuário pode adicionar, marcar como concluída e remover tarefas.",
    image: TasksImg,
  },
  {
    title: "Servicily Landing Page",
    description:
      "Protótipo desenvolvido a fim de estudar a ferramenta AutoLayout no Figma. Créditos: 'dipauix' no Dribbble",
    image: ServicilyImg,
  },
];


const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="py-16 bg-[#462F9F]">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Meus Projetos</h2>
        <p className="max-w-2xl">
          Mesmo em formação, acredito que aprender se faz com prática. Aqui
          estão alguns projetos que venho desenvolvendo:
        </p>
        <Carousel
          items={projects}
          RenderComponent={({ item }) => (
            <ProjectCard project={item} onOpenModal={handleOpenModal} />
          )}
        />
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default MyProjects;
