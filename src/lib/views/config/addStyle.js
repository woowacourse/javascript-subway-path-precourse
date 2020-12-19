const openStyleTag = "<style>";
const closeStyleTag = "</style>";

const addTableStyle = `
  table, th, td {
    border: 1px solid black;
  }
  tr {
    text-align: center;
  }
`;

export default () => {
  const $head = document.querySelector("head");
  $head.innerHTML = [openStyleTag, addTableStyle, closeStyleTag].reduce(
    (tag, cssRuleSet) => tag + cssRuleSet,
    "",
  );
};
