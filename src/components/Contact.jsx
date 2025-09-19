import { ArrowUpRight, Envelope, GithubFill, InstagramFill, LinkedinBoxFill } from 'akar-icons';

const contactLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lucas-morais-149556252/',
    icon: <LinkedinBoxFill size={36} />
  },
  {
    name: 'GitHub',
    url: 'https://github.com/standbytheboy',
    icon: <GithubFill size={36} />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/lusquinha_05/',
    icon: <InstagramFill size={36} />
  },
  {
    name: 'Email',
    url: 'mailto:moraislcs05@gmail.com',
    icon: <Envelope size={36} />
  },
];

const Contact = () => {
  return (
    <section className="text-[#B8B8CA] py-20 px-4 md:px-12">
      <div className="mx-auto max-w-6xl text-center">
        
        {/* Título e Subtítulo */}
        <h2 className="text-4xl md:text-5xl font-bold">Contato</h2>
        <p className="text-[#B8B8CA] mt-4 max-w-lg mx-auto">
          Quer conversar sobre tecnologia, colaborar em algum projeto ou só trocar uma ideia? Me chama!
        </p>

        {/* Links de Contato */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 w-full sm:w-60 border border-[#B8B8CA] rounded-lg px-6 py-3 
                         hover:bg-[#ffffff15] hover:border-slate-500 transition-all duration-300"
            >
              <div className="flex items-center gap-3 group-hover:text-white">
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </div>
              <ArrowUpRight
                size={24}
                className="group-hover:text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          ))}
        </div>
        
        {/* Rodapé */}
        <footer className="text-center text-[#B8B8CA] mt-20">
          <p>Obrigado por visitar esse site!</p>
          <p className="mt-2 text-sm">Feito por Lucas Morais</p>
        </footer>

      </div>
    </section>
  );
};

export default Contact;
