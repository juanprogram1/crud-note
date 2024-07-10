function initializeButtonEvents(): void {
  const editButtons = document.querySelectorAll(".botonEdit");
  const showButtons = document.querySelectorAll(".botonShow");
  const deleteButtons = document.querySelectorAll(".botonDelete");

  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      `Editar`;
    });
  });

  showButtons.forEach((button) => {
    button.addEventListener("click", (e): void => {
      e.preventDefault();
      const box1 = document.querySelector(".box1") as HTMLDivElement;
      const boxShow = document.querySelector(".boxShow") as HTMLDivElement;

      if (box1 && boxShow) {
        //  hidden the box1 and show the hidden content
        box1.classList.add("hidden");
        boxShow.classList.remove("hidden");

        boxShow.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 400,
          easing: "ease-in-out",
        });
      }
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event): void => {
      event.preventDefault();
      const keysDelete: string = button.getAttribute("data-key") as string;
      const parentDiv: HTMLDivElement = document.querySelector(
        `[data-key="${keysDelete}"]`,
      ) as HTMLDivElement;

      if (localStorage.getItem(keysDelete)) {
        // delete the item from localStorage
        localStorage.removeItem(keysDelete);
      }

      if (parentDiv) {
        // delete the div parent Html
        parentDiv.remove();
      }
    });
  });
}

export { initializeButtonEvents };
