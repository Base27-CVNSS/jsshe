const searchInput = document.querySelector("#article-search");
const articleEntries = [...document.querySelectorAll(".article-entry")];
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

function normalize(value) {
  return value
    .toLocaleLowerCase("en")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function updateIndex(query = "") {
  const searchTerm = normalize(query.trim());
  let visibleCount = 0;

  articleEntries.forEach((entry) => {
    const isMatch = !searchTerm || normalize(entry.textContent).includes(searchTerm);
    entry.hidden = !isMatch;
    if (isMatch) visibleCount += 1;
  });

  resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "article" : "articles"}`;
  emptyState.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", (event) => updateIndex(event.target.value));

document.addEventListener("keydown", (event) => {
  const activeElement = document.activeElement;
  const isTyping = activeElement && /input|textarea|select/i.test(activeElement.tagName);

  if (event.key === "/" && !isTyping) {
    event.preventDefault();
    searchInput.focus();
  }

  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    updateIndex();
    searchInput.blur();
  }
});
