const educationData = [
  {
    institution: 'Senac Lapa Tito',
    date: 'Ago 2024 - Fev 2026',
    title: 'Técnico em Informática para Internet',
    details: [
      'Desenvolver e manter aplicações web e mobile, atuando no front-end e back-end, com integração a web services e banco de dados.',
      'Criar interfaces gráficas, estruturar bancos de dados, organizar o processo de desenvolvimento, testar e publicar aplicações, além de documentar as etapas do projeto e aplicar comandos SQL.',
    ],
  },
  {
    institution: 'Alura',
    date: 'Abr 2024 - Set 2024',
    title: 'Front-End (34h)',
    details: [
      'JavaScript para Web: Crie páginas dinâmicas (de 22/04/2024 a 12/09/2024) 10h',
      'HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags (de 19/06/2024 a 19/06/2024) 8h',
      'HTML e CSS: Classes, posicionamento e Flexbox (de 18/05/2024 a 18/05/2024) 8h',
      'Bootstrap: crie uma landing page responsiva (de 20/07/2024 a 08/09/2024) 8h',
    ],
  },
  {
    institution: 'Alura',
    date: 'Abr 2024',
    title: 'Data Science (10h)',
    details: ['VBA: automatizando tarefas diárias sem ser Dev (de 01/04/2024 a 10/04/2024) 10h'],
  },
  {
    institution: 'Alura',
    date: 'Nov 2023 - Jan 2024',
    title: 'Formação: Aprenda a programar em JavaScript com foco no back-end (73h)',
    details: [
      'JavaScript: tipos, variáveis e funções (22/11/2023) 12h',
      'JavaScript: Arrays (de 23/11/2023 a 24/11/2023) 8h',
      'JavaScript: objetos (de 04/12/2023 a 05/12/2023) 8h',
      'JavaScript I: algoritmos de ordenação (de 08/12/2023 a 06/01/2024) 8h',
      'Algoritmos com JavaScript II: aprofundando em algoritmos de ordenação e busca (de 11/12/2023 a 18/01/2024) 10h',
      'Node.js: criando sua primeira biblioteca (de 13/12/2023 a 16/12/2023) 12h',
      'JavaScript: programação orientada a objetos (de 18/12/2023 a 04/01/2024) 10h',
    ],
  },
];

const TimelineItem = ({ item }) => (
  <div className="relative flex items-start mb-12">
    {/* Conteúdo da Esquerda (Instituição e Data) */}
    <div className="w-1/3 text-right pr-12">
      <h3 className="font-bold text-lg text-[#B8B8CA]">{item.institution}</h3>
      <p className="text-sm text-slate-500 mt-1">{item.date}</p>
    </div>

    {/* Ponto e Linha Central */}
    <div className="absolute left-[33.33%] top-1 transform -translate-x-1/2">
      <div className="w-5 h-5 bg-cyan-500 rounded-full border-4 border-[#1E202C]"></div>
    </div>

    {/* Conteúdo da Direita (Curso e Detalhes) */}
    <div className="w-2/3 pl-12">
      <h3 className="font-bold text-lg text-[#B8B8CA]">{item.title}</h3>
      <ul className="mt-2 space-y-2 text-slate-400">
        {item.details.map((detail, index) => (
          <li key={index} className="text-sm leading-relaxed">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Formation = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#B8B8CA]">Formação</h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Mesmo em formação, acredito que aprender se faz com prática. Aqui estão alguns projetos que venho desenvolvendo:
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Linha Vertical */}
          <div className="absolute left-[33.33%] top-2 h-full w-0.5 bg-slate-700 transform -translate-x-1/2"></div>
          
          <div>
            {educationData.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Formation;