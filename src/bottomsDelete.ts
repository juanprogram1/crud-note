function initializeButtonEvents(): void {
  const editButtons = document.querySelectorAll(".botonEdit");
  const showButtons = document.querySelectorAll(".botonShow");
  const deleteButtons = document.querySelectorAll(".botonDelete");

  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Editar");
      // Implementa la lógica para editar la nota
    });
  });

  showButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Mostrar");
      // Implementa la lógica para mostrar la nota
    });
  });

  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Eliminar");
      // Implementa la lógica para eliminar la nota
    });
  });
}
export { initializeButtonEvents };
