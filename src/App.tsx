import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";

import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Page />
      <Footer />
    </>
  );
};

export default App;
