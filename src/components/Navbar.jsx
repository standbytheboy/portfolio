import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between pt-12 px-4 md:px-8">

      <ul className="hidden md:flex flex-wrap justify-center gap-8 mx-auto">
        <li><a href="#projects">Projetos</a></li>
        <li><a href="#formation">Formação</a></li>
        <li><a href="#about-me">Sobre Mim</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="md:hidden absolute right-3">
        <button onClick={() => setIsOpen(!isOpen)}>
          {/* O ícone muda dependendo se o menu está aberto ou fechado */}
          {isOpen ? (
            // Ícone 'X' para fechar
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ícone 'Hambúrguer' para abrir
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      <ul className={`${isOpen ? 'flex' : 'hidden'}
          flex-col items-center gap-8
          absolute top-24 left-0 w-full
          bg-[#1E202C] shadow-md py-8
          md:hidden`
      }>
        <li><a href="#projects" onClick={() => setIsOpen(false)}>Projetos</a></li>
        <li><a href="#formation" onClick={() => setIsOpen(false)}>Formação</a></li>
        <li><a href="#about-me" onClick={() => setIsOpen(false)}>Sobre Mim</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;