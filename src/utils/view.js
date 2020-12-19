export const visibleToggle = () => {
  const resultContainer = document.querySelector("#result-container");
  resultContainer.style.display === ""
    ? (resultContainer.style.display = "none")
    : (resultContainer.style.display = "");
};
