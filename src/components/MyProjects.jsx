import Carousel from "./Carousel";
import ProjectCard from "./ProjectCard";
import GardenMeImg from "/gardenme.png";
import CalcImg from "/Calc.png";
import TasksImg from "/Tasks.png";
import SquareGameImg from "/SquareGame.png";

const projects = [
  {
    title: "GardenMe",
    description:
      "E-commerce desenvolvido em ReactJs e PHP, com banco de dados MySQL. O diferencial empreendedor é que, ao adquirir plantas nessa plataforma, os clientes recebam automaticamente dicas de como cuidar de suas plantas.",
    image: GardenMeImg,
  },
  {
    title: "Calculadora",
    description:
      "Exercício prático aplicando estudos iniciais em JavaScript e Display Grid.",
    image: CalcImg,
  },
  {
    title: "Lista de Tarefas",
    description:
      "Projeto feito para praticar a manipulação do DOM utilizando JavaScript puro. O usuário pode adicionar, marcar como concluída e remover tarefas.",
    image: TasksImg,
  },
  {
    title: 'Jogo "Clique no Quadrado"',
    description:
      'Jogo simples e divertido para usuários de todas as idades. As funções são ativadas ao clicar no botão "Iniciar Jogo" e testam a agilidade do jogador.',
    image: SquareGameImg,
  },
];

const MyProjects = () => {
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
          RenderComponent={({ item }) => <ProjectCard project={item} />}
        />
      </div>
    </section>
  );
};

export default MyProjects;
