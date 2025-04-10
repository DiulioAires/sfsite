import react from 'react';
import './home.css';

function home() {
    return (
        <>
        <section className='hero'>
        <div className='hero_conteudo'>
            <h1>Conectamos confiança, tecnologia e inovação para transformar sua casa e sua empresa.</h1>
            <button className="btn">Conheça nossos serviços</button>
        </div>
        </section>
        <section className="hero2">
            <h1>Nossos serviços</h1>
            <div className="servicos">
                <img src="router.png" alt="" />
                <h1>Redes</h1>
                <p>Oferecemos instalação, configuração e manutenção de redes de computadores, garantindo conexão estável, segura e de alto desempenho para sua empresa ou residência.</p>
            </div>
            <div className="servicos">
                <img src="multifunction-printer.png" alt="" />
                <h1>Impressoras</h1>
                <p>Manutenção preventiva e corretiva, outsourcing de impressão, gestão de suprimentos.</p>
            </div>
            <div className="servicos">
                <img src="teleworking.png" alt="" />
                <h1>Suporte remoto</h1>
                <p>Atendimento rápido e eficiente sem necessidade de deslocamento, resolução de problemas em tempo real.</p>
            </div>
            <div className="servicos">
                <img src="smart-house.png" alt="" />
                <h1>Automação Residencial</h1>
                <p>Proteção de dados, backup em nuvem, antivírus corporativo e firewall.</p>
            </div>
        </section>
        <section className="hero3">
            <h1>Sobre a S&F Tech</h1>
            <p>Somos especialistas em soluções de TI empresarial, com mais de 10 anos de experiência no mercado. Nossa equipe altamente qualificada está pronta para atender todas as necessidades tecnológicas da sua empresa.</p>
            <div className="quadrado">
                <h1>30+</h1>
                <p>Anos de experiência</p>
            </div>
            <div className="quadrado">
                <h1>500+</h1>
                <p>Clientes atendidos</p>
            </div>
            <div className="quadrado">
                <h1>24/7</h1>
                <p>Suporte disponível</p>
            </div>
        </section>
        </>
    )

}