import { Section } from "./Section";
import { Aside } from "./Aside";

import "./Main.css";

export const Main = ({ serversCollection }) => {
  return (
    <main className="main-content">
      <Aside />
      <ul className="sections-list">
        {serversCollection.map((server, index) => (
          <Section index={index + 1} server={server} />
        ))}
      </ul>
    </main>
  );
};
