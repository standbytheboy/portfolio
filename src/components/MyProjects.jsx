import Carousel from "./Carousel";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "GardenMe",
    description:
      "E-commerce desenvolvido em ReactJs e PHP, com banco de dados MySQL. O diferencial empreendedor é que, ao adquirir plantas nessa plataforma, os clientes recebam automaticamente dicas de como cuidar de suas plantas.",
  },
  {
    title: "GardenMe",
    description:
      "E-commerce desenvolvido em ReactJs e PHP, com banco de dados MySQL. O diferencial empreendedor é que, ao adquirir plantas nessa plataforma, os clientes recebam automaticamente dicas de como cuidar de suas plantas.",
  },
  {
    title: "GardenMe",
    description:
      "E-commerce desenvolvido em ReactJs e PHP, com banco de dados MySQL. O diferencial empreendedor é que, ao adquirir plantas nessa plataforma, os clientes recebam automaticamente dicas de como cuidar de suas plantas.",
  },
  {
    title: "GardenMe",
    description:
      "E-commerce desenvolvido em ReactJs e PHP, com banco de dados MySQL. O diferencial empreendedor é que, ao adquirir plantas nessa plataforma, os clientes recebam automaticamente dicas de como cuidar de suas plantas.",
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
        <Carousel items={ projects } RenderComponent={({ item }) => <ProjectCard project={ item } />}/>
      </div>
    </section>
  );
};

export default MyProjects;
