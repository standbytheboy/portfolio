import { AngularFill, CssFill, FigmaFill, HtmlFill, JavascriptFill, PhpFill, PostgresqlFill, ReactFill } from 'akar-icons';

const technologies = [
  { name: 'HTML/CSS', icon: <HtmlFill size={20} /> },
  { name: 'React', icon: <ReactFill size={20} /> },
  { name: 'Angular', icon: <AngularFill size={20} /> },
  { name: 'JavaScript', icon: <JavascriptFill size={20} /> },
  { name: 'Tailwind', icon: <CssFill size={20} /> },
  { name: 'Figma', icon: <FigmaFill size={20} /> },
  { name: 'PHP', icon: <PhpFill size={20} /> },
  { name: 'SQL', icon: <PostgresqlFill size={20} /> }
];

const Header = () => {
  return (
    <main className="flex flex-col justify-center items-center text-center gap-20 pt-12 pb-24">
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-bold text-4xl sm:text-5xl">Lucas Morais</h1>
        <p className="w-140 max-w-2xl m-auto scroll-mb-12 mb-12">
          Aqui você vai conhecer um pouco do que já estudei, dos projetos que
          estou desenvolvendo e da minha jornada no universo da programação.
          Seja bem-vindo(a)!
        </p>

        {/* Lista de tecnologias renderizada com map */}
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {technologies.map((tech) => (
            <li 
              key={tech.name} 
              className="bg-[#462F9F] py-2 px-4 rounded-md flex items-center gap-2"
            >
              {tech.icon}
              <span>{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Header;