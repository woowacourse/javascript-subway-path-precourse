export default ($childNodesList, $parentNode) => {
  $childNodesList.forEach(({ element }) => $parentNode.appendChild(element));
};
