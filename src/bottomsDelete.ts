function initializeButtonEvents(): void {
  const editButtons = document.querySelectorAll(".botonEdit");
  const showButtons = document.querySelectorAll(".botonShow");
  const deleteButtons = document.querySelectorAll(".botonDelete");

  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Editar");
    });
  });

  showButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Mostrar");
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
