import FotoPam from '../assets/PAM-FOTO.jpeg';
import "./Sobre.css";

function Sobre() {
  return (
    <section id="sobre" className="sobre">     

      <div className="texto-sobre">
        <h2>Sobre Mim</h2>
        <p>
          Sou <strong>Pâmella Borba</strong>, maquiadora profissional e apaixonada por valorizar a beleza de cada mulher.
          Com amor, técnica e muito brilho, levo autoestima e elegância para todas as ocasiões.
        </p>
        <h2> Minha jornada </h2>
        <p>
          Comecei minha trajetória vendendo produtos Mary Kay, e rapidamente me tornei uma referência por incentivar outras mulheres
          a acreditarem em seu potencial e iniciarem seus próprios negócios.
          Hoje, em uma nova fase da minha carreira, atuo como maquiadora profissional, 
          ampliando ainda mais meu impacto: ofereço serviços de maquiagem para realçar a beleza e autoestima das minhas clientes, 
          cursos de automaquiagem com dicas práticas para o dia a dia e 
          workshops voltados para mulheres que desejam dar os primeiros passos no empreendedorismo.
        </p>
      </div>
      
      <div className="foto-sobre">
        <img src={FotoPam} alt="Pâmella Borba" />
      </div>
    </section>
  );
}

export default Sobre;
