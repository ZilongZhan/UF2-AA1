import { ServerNav } from "./ServerNav";
import { serversCollection } from "../../data";

export const ServersList = () => {
  return (
    <ul className="nav-list">
      {serversCollection.map((server, index) => (
        <ServerNav key={index} server={server} />
      ))}
    </ul>
  );
};
