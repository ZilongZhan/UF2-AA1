import { Section } from "./Section";
import { Aside } from "./Aside";

import "./Main.css";

export const Main = ({ serversCollection, referencesCollection }) => {
  return (
    <main className="main-content">
      <Aside referencesCollection={referencesCollection} />
      <ul className="sections-list">
        {serversCollection.map((server, index) => (
          <Section key={index} index={index + 1} server={server} />
        ))}
      </ul>
    </main>
  );
};
