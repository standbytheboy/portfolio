import { ArrowUpRight, Envelope, GithubFill, InstagramFill, LinkedinBoxFill } from 'akar-icons';

const contactLinks = [
  {
    name: 'LinkedIn',
    url: '#',
    icon: <LinkedinBoxFill size={36} />
  },
  {
    name: 'Instagram',
    url: '#',
    icon: <InstagramFill size={36} />
  },
  {
    name: 'GitHub',
    url: '#',
    icon: <GithubFill size={36} />
  },
  {
    name: 'Email',
    url: 'mailto:seu-email@exemplo.com',
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
              <ArrowUpRight size={24} className="group-hover:text-white" />
            </a>
          ))}
        </div>
        
        {/* Rodapé */}
        <footer className="text-center text-[#B8B8CA] mt-20">
          <p>Obrigado por visitar esse site!</p>
          <p className="text-sm">Feito por Lucas Morais</p>
        </footer>

      </div>
    </section>
  );
};

export default Contact;
