import "./Section.css";

export const Section = ({ index, server }) => {
  return (
    <section id={server.label} className="content-section">
      <div className="content-container">
        <h1 className="section-heading">{`${index}. ${server.label}`}</h1>
        <div className="text-container">
          <p>{server.description}</p>
          <aside className="section-aside">
            <h3>Language(s)</h3>
            <ul>
              {server.languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
            <h3>Advantages</h3>
            <ul>
              {server.advantages.map((advantage, index) => (
                <li key={index}>{advantage}</li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};
