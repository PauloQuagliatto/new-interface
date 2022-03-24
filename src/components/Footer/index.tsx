import Container from "./styles";

const Footer = () => {
  const closeToExpiration = false;
  return (
    <Container closeToExpiration={closeToExpiration}>
      <div>
        <h4>
          <strong>Usuário: </strong>
          xxxxxxx
        </h4>
        <h4>
          <strong>Empresa: </strong>
          xxxxxxx
        </h4>
      </div>
      <h4 id="license">
        <strong>Licença válida até: xx/xx/xxxx</strong>
      </h4>
      <h4>Desenvolvido por Feedback Informática - 2022</h4>
    </Container>
  );
};
export default Footer;
