export const ServerNav = ({ server }) => {
  return (
    <li>
      <a href={`#${server.label}`}>{server.label}</a>
    </li>
  );
};
