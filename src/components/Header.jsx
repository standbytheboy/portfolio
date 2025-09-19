function Header() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-20 m-10">
      <nav>
        <ul className="flex justify-between gap-32">
          <li>Experiência</li>
          <li>Projetos</li>
          <li>Formação</li>
          <li>Contato</li>
        </ul>
      </nav>

      <main className="flex flex-col gap-5">
        <h1 className="font-bold">Lucas Morais</h1>
        <h3 className="w-140 m-auto scroll-mb-12">
          Aqui você vai conhecer um pouco do que já estudei, dos projetos que
          estou desenvolvendo e da minha jornada no universo da programação.
          Seja bem-vindo(a)!
        </h3>

        <ul className="flex justify-between gap-10">
          <li className="bg-[#462F9F] py-2 px-5 rounded-md">HTML/CSS</li>
          <li className="bg-[#462F9F] py-2 px-5 rounded-md">React</li>
          <li className="bg-[#462F9F] py-2 px-5 rounded-md">JavaScript</li>
          <li className="bg-[#462F9F] py-2 px-5 rounded-md">Tailwind</li>
          <li className="bg-[#462F9F] py-2 px-5 rounded-md">Figma</li>
          <li className="bg-[#462F9F] py-2 px-5 rounded-md">PHP</li>
          <li className="bg-[#462F9F] py-2 px-5 rounded-md">SQL</li>
        </ul>
      </main>
    </div>
  );
}

export default Header;
