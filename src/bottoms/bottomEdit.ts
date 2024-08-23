import { getNowDate, showBox2form } from "../showDate_showContent";
import { Tasks } from "../designate";
import { bottomClose, bottomShow } from "./bottomShow";
import { bottomDelete } from "./bottomDelete";

// function to edit the form
function bottomEdit() {
  const editButtons = document.querySelectorAll(
    ".botonEdit",
  ) as NodeListOf<HTMLButtonElement>;

  editButtons.forEach((editButton) => {
    editButton.addEventListener("click", () => {
      const key = editButton.dataset.key;
      // obtain classList of the element
      const modal = document.querySelector(".container-modal") as HTMLElement;
      const modalInfo = document.querySelector(".modal-info") as HTMLElement;
      const box1 = document.querySelector(".box1") as HTMLElement;
      const box2 = document.querySelector(".box2") as HTMLElement;
      const header = document.querySelector("header") as HTMLElement;
      const footer = document.querySelector("footer") as HTMLElement;
      const saveChanges = document.querySelector(".btnSaveEdit") as HTMLElement;
      // get the info from localStorage
      const infoLocalStorageKey = localStorage.getItem(key!);
      // parse the JSON
      const JSONInfoLocalStorageKey = JSON.parse(infoLocalStorageKey!);

      const titleValue: string = JSONInfoLocalStorageKey.title;
      const textareaValue: string = JSONInfoLocalStorageKey.textarea;
      const dateValue: string = JSONInfoLocalStorageKey.date;

      // create the modalInfo
      const allModalInfo = `
      <div id="modal-info-secondary" data-key="${key}">
        <div class="date-modal">${dateValue}</div>
        <h3 id="title${key}" class="title-modal title-modal-edit" contenteditable="true">${titleValue}</h3>
        <p id="textarea${key}" class="textarea-modal textarea-modal-edit" contenteditable="true">${textareaValue}</p>
      </div>
      `;

      // add the AllModalInfo to the modalInfo
      modalInfo.innerHTML = allModalInfo;

      // if the exist classList
      if (modal !== null && box1 !== null && box2 !== null) {
        modal.animate(
          [
            {
              opacity: 0,
              transform: "translateY(1%)",
            },
            {
              opacity: 1,
              transform: "translateY(0%)",
            },
          ],
          {
            duration: 900,
            easing: "ease-in-out",
            fill: "forwards",
          },
        );
        // remove the classList of the modal
        modal.classList.remove("hidden");
        // add the classList of the box1
        box1.classList.add("hidden");
        // add the classList of the box2
        box2.classList.add("hidden");
        // add the classList of the header
        header.classList.add("hidden");
        // add the classList of the footer
        footer.classList.add("hidden");
        // add the classList of the saveChanges
        saveChanges.classList.remove("hidden");
      }
    });
  });
}

function saveChanges() {
  // clear the text-content
  const textContent = document.getElementById("text-content");
  textContent!.innerHTML = "";

  /* initialize the variables */
  const idModalInfoSecondary = document.getElementById("modal-info-secondary");
  const key = idModalInfoSecondary!.dataset.key;
  const title = document.getElementById("title" + key)?.innerText;
  const textarea = document.getElementById("textarea" + key)?.innerText;
  const date = getNowDate();

  /* validate the title and textarea */
  if (title === "") {
    alert("El título no puede estar vacío");
  } else if (textarea === "") {
    alert("El contenido no puede estar vacío");
  }

  /* save the changes */
  const infoLocalStorageKey = localStorage.getItem(key!);
  // parse the JSON
  const JSONInfoLocalStorageKey = JSON.parse(infoLocalStorageKey!);
  JSONInfoLocalStorageKey.title = title;
  JSONInfoLocalStorageKey.textarea = textarea;
  JSONInfoLocalStorageKey.date = date;
  // stringify the JSON
  const JSONInfoLocalStorageKeyString = JSON.stringify(JSONInfoLocalStorageKey);
  // save the changes in localStorage
  localStorage.setItem(key!, JSONInfoLocalStorageKeyString);

  /* ---------------- Upload the changes to the text-content to localStorage --------------- */

  // get all keys from localStorage
  const allKeys: string[] = Object.keys(localStorage);

  // get all values from localStorage
  const allValues: (string | null)[] = allKeys.map((key) =>
    localStorage.getItem(key),
  );

  // parse all values to FormRegister
  const allTasks: Tasks[] = allValues.map((value) => JSON.parse(value!));
  allTasks.sort((a, b) => a.id - b.id);

  // map the register to the form for display
  allTasks.forEach((task: Tasks) => {
    const dateDMY: string = task.date.split(",")[1].trim();
    const contexform = `
         <div id="form${task.id}" class="text-content-box" data-key="${task.id}">
           <div>
             <h3 class="titleh3">${task.title}</h3>
             <p class="date-text">${dateDMY}</p>
             <p class="text-paragraph">${task.textarea}</p>
           </div>
                 <div class="container">
                   <div class="barraMostrar"></div>
                   <button data-key="${task.id}" class="botonShow">Mostrar</button>
                 </div>
                 <div class="container">
                   <div class="barra"></div>
                   <button data-key="${task.id}" class="botonEdit">Editar</button>
                 </div>
                 <div class="container">
                   <div class="barraDelete"></div>
                   <button data-key="${task.id}" class="botonDelete">Borrar</button>
                 </div>
         </div>
       `;

    showBox2form(contexform);
    bottomEdit();
    bottomShow();
    bottomClose();
    bottomDelete();
  });
}

export { bottomEdit, saveChanges };
