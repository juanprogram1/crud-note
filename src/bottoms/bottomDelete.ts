import { bottomEdit } from "./bottomEdit";
import { bottomShow } from "./bottomShow";
import { bottomClose } from "./bottomShow";

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
        bottomEdit();
        bottomShow();
        bottomClose();
        bottomDelete();
      }

      // get the messageBoxEdit
      const deleteMessageBox =
        document.querySelector<HTMLElement>("#messageBoxDelete")!;

      // show the messageBoxEdit
      if (deleteMessageBox !== null) {
        // remove the classList hide of the messageBoxEdit
        deleteMessageBox.classList.remove("hidden");
        deleteMessageBox.style.display = "block";
        deleteMessageBox.animate(
          [
            {
              opacity: 0,
              transform: "translateY(60%)",
            },
            {
              opacity: 1,
              transform: "translateY(80%)",
            },
          ],
          {
            duration: 400,
            easing: "ease-in-out",
            fill: "forwards",
          },
        );

        // hide the messageBoxEdit
        setTimeout(() => {
          // animation to hide the messageBoxEdit
          deleteMessageBox.animate(
            [
              {
                opacity: 1,
                transform: "translateY(80%)",
              },
              {
                opacity: 0,
                transform: "translateY(60%)",
              },
            ],
            {
              duration: 400,
              easing: "ease-in-out",
              fill: "forwards",
            },
          );
        }, 1200);
      }
    });
  });
}

// Export the function
export { bottomDelete };
