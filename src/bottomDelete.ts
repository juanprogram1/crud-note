function bottomDelete() {
  const deleteButtons = document.querySelectorAll(
    ".botonDelete",
  ) as NodeListOf<HTMLButtonElement>;

  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      // get the key of the element
      const key: string = deleteButton.getAttribute("data-key")!;
      const textContentBox = document.querySelector(`[data-key="${key}"]`);

      // if the element has a father && key is not null
      if (textContentBox !== null && key !== null) {
        // remove the element from the DOM
        textContentBox.remove();
        localStorage.removeItem(key);
      }
    });
  });
}

// Export the function
export { bottomDelete };
