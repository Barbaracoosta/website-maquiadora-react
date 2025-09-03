import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Pâmella Borba. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
