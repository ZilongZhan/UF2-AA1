import { Header, Main, Footer } from "./components";
import { serversCollection, referencesCollection } from "./data";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Main
        serversCollection={serversCollection}
        referencesCollection={referencesCollection}
      />
      <Footer />
    </>
  );
}

export default App;
