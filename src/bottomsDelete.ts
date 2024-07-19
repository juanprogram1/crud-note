import { Tasks } from "./designate";

function initializeButtonEvents(): void {
  const editButtons = document.querySelectorAll(".botonEdit");
  const showButtons = document.querySelectorAll(".botonShow");
  const deleteButtons = document.querySelectorAll(".botonDelete");

  // editButtons
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      "Editar";
    });
  });

  // showButtons
  showButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      //declare the variables
      const box1 = document.querySelector(".box1") as HTMLDivElement;
      const boxShow = document.querySelector(".boxShow") as HTMLDivElement;
      // get all keys from localStorage
      const allKeys: string[] = Object.keys(localStorage);

      // get all values from localStorage
      const allValues: (string | null)[] = allKeys.map((key) =>
        localStorage.getItem(key),
      );

      // parse all values to FormRegister
      const allTasks: Tasks[] = allValues.map((value) => JSON.parse(value!));
      allTasks.sort((a, b) => a.id - b.id);
      console.log(allTasks);

      if (box1 && boxShow) {
        //  hidden the box1 and show the hidden content
        box1.classList.add("hidden");
        boxShow.classList.remove("hidden");

        boxShow.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: 400,
          easing: "ease-in-out",
        });

        boxShow.innerHTML = "";
      }
      //showBoton information
      allTasks.forEach((task: Tasks) => {
        console.log(task);
        // Information of contentBoxShow
        const contentBoxShow = `
        <h1 class="boxShow-title" data-key="${task.id}">${task.title}</h1>
        <p class="boxShow-text-paragraph" data-key="${task.id}">${task.textarea}</p>
        <div class="boxShow-date" data-key="${task.id}">${task.date}</div>
      `;

        boxShow.innerHTML = contentBoxShow;
      });
    });
  });

  // deleteButtons
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event): void => {
      event.preventDefault();
      const keysDelete: string = button.getAttribute("data-key") as string;
      const parentDiv: HTMLDivElement = document.querySelector(
        `[data-key="${keysDelete}"]`,
      ) as HTMLDivElement;

      if (localStorage.getItem(keysDelete) && parentDiv) {
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
