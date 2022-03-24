import ChartImage from "../../assets/img/ChartImage.png";

import Container from "./styles";

const Page = () => {
  return (
    <Container>
      <img src={ChartImage} />
      <div className="subtitles-container">
        <h2>Legenda:</h2>
        <div className="subtitles-box">
          <div>
            <div className="subtitle-box-color entries"></div>
            <h3>Entradas</h3>
          </div>
          <div>
            <div className="subtitle-box-color profit"></div>
            <h3>Lucro Líquido</h3>
          </div>
          <div>
            <div className="subtitle-box-color exits"></div>
            <h3>Saídas</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Page;
