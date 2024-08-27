function bottomDelete() {
  const deleteButtons = document.querySelectorAll(
    ".botonDelete",
  ) as NodeListOf<HTMLButtonElement>;

  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      // get the key of the element
      const key: string = deleteButton.getAttribute("data-key")!;
      const textContentBox = document.getElementById("form" + key);

      // if the element has a father && key is not null
      if (textContentBox !== null && key !== null) {
        // remove the element from the DOM
        textContentBox.remove();
        localStorage.removeItem(key);

        const messageDelete = document.getElementById("message-delete");
        messageDelete!.classList.remove("hidden");
        messageDelete!.classList.remove("hide-message");
        messageDelete!.classList.add("show-message");

        // setTimeout to hide the message after 1.3 seconds
        setTimeout(() => {
          messageDelete!.classList.remove("show-message");
          messageDelete!.classList.add("hide-message");
        }, 1300);
      }
    });
  });
}

// Export the function
export { bottomDelete };
