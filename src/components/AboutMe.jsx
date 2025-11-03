import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-[#462F9F]">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-20 md:py-24">
        
        {/* Coluna Esquerda: Título */}
        <div className="md:w-1/3 flex justify-between mb-10 md:mb-0">
            <h2 className="text-4xl sm:text-5xl font-bold">
              Sobre Mim
            </h2>
        </div>

        {/* Coluna Direita: Conteúdo */}
        <div className="md:w-2/3 md:pl-24">
          <p className="text-[#B8B8CA] leading-relaxed mb-8">
            Sou curioso por natureza e apaixonado por tecnologia desde sempre. Aprendi a montar e desmontar computadores antes mesmo de saber o que era uma tag HTML. Hoje, mergulhei de cabeça no desenvolvimento web e venho construindo minha base técnica com muita dedicação.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">O que já estudei:</h3>
            <ul className="list-disc list-inside space-y-2 text-[#B8B8CA]">
              <li>HTML5, CSS3 e JavaScript puro: a tríade essencial do frontend.</li>
              <li>Bootstrap: pra acelerar layouts com responsividade.</li>
              <li>Tailwind CSS: estilos com produtividade.</li>
              <li>React: componentização e interfaces modernas.</li>
              <li>PHP, C# e MySQL: estudando backend com foco prático.</li>
              <li>Docker: usando conteinerização para fazer deploy de aplicações.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Outros conhecimentos:</h3>
            <ul className="list-disc list-inside space-y-2 text-[#B8B8CA]">
              <li>Informática avançada (Pacote Office, Windows, manutenção de sistemas).</li>
              <li>Hardware: montagem, manutenção e funcionamento de computadores.</li>
              <li>Redes? Só se for pra fugir delas 😂</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;