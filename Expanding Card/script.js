const panels = document.querySelectorAll(".panel");
let previousPanel = null;

panels.forEach((panel) => {
    if (panel.classList.contains("face"))
      panel.classList.add("mark")
    panel.addEventListener("click", () => {
      if (previousPanel && previousPanel !== panel && previousPanel.classList.contains("mark")) {
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
