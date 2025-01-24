const panelsContainer = document.querySelector(".container");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((panelData) => {
      const panel = document.createElement("div");
      panel.className = panelData.class;
      panel.style.backgroundImage = `url('${panelData.backgroundImage}')`;

      const content = document.createElement("div");
      content.className = "content";

      const title = document.createElement("h3");
      title.textContent = panelData.title;

      const description = document.createElement("p");
      description.textContent = panelData.description;

      content.appendChild(title);
      content.appendChild(description);
      panel.appendChild(content);
      panelsContainer.appendChild(panel);
    });

    const panels = document.querySelectorAll(".panel");
    let previousPanel = null;

    panels.forEach((panel) => {
      if (panel.classList.contains("face")) panel.classList.add("mark");
      panel.addEventListener("click", () => {
        if (
          previousPanel &&
          previousPanel !== panel &&
          previousPanel.classList.contains("mark")
        ) {
          previousPanel.classList.add("face");
        }
        removeActiveClasses();
        panel.classList.add("active");
        panel.classList.remove("face");
        previousPanel = panel;
      });
    });

    function removeActiveClasses() {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    }
  });
