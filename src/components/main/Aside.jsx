export const Aside = ({ referencesCollection }) => {
  return (
    <aside className="references-container">
      <h2>References</h2>
      <ul>
        {referencesCollection.map((reference, index) => (
          <li key={index}>
            <a href={reference.anchor}>{reference.label}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
