function bottomShow() {
  const showButtons = document.querySelectorAll(
    ".botonShow",
  ) as NodeListOf<HTMLButtonElement>;

  showButtons.forEach((showButton) => {
    showButton.addEventListener("click", () => {
      // obtain classList of the element
      const modal = document.querySelector(".container-modal") as HTMLElement;
      const box1 = document.querySelector(".box1") as HTMLElement;
      const box2 = document.querySelector(".box2") as HTMLElement;

      // if the exist classList
      if (modal !== null && box1 !== null && box2 !== null) {
        // remove the classList of the modal
        modal.classList.remove("hidden");
        // add the classList of the box1
        box1.classList.add("hidden");
        // add the classList of the box2
        box2.classList.add("hidden");
      }
    });
  });
}

export { bottomShow };
