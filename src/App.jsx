import { Header, Main } from "./components";
import { serversCollection, referencesCollection } from "./data";

import "./App.css";

function App() {
  return (
    <>
      <Header/>
      <Main
        serversCollection={serversCollection}
        referencesCollection={referencesCollection}
      />
    </>
  );
}

export default App;
