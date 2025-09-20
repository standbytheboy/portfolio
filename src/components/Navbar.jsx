const Navbar = () => {
  return (
    <nav className="pt-12">
      <ul className="flex flex-wrap justify-center gap-8 md:gap-16">
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#formation">Formação</a>
        </li>
        <li>
          <a href="#about-me">Sobre Mim</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
