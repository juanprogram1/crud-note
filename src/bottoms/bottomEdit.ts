import { getNowDate, showBox2form } from "../showDate_showContent";
import { bottomDelete } from "./bottomDelete";
import { bottomClose, bottomShow } from "./bottomShow";

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
        <div class="date-modal">${dateValue}</div>
        <h3 id="title${key}" class="title-modal title-modal-edit" contenteditable="true">${titleValue}</h3>
        <p id="textarea${key}" class="textarea-modal textarea-modal-edit" contenteditable="true">${textareaValue}</p>
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

        // ADD THE EVENT LISTENER TO THE SAVECHANGES BOTTON TO SAVE THE CHANGES
        saveChanges.addEventListener("click", () => {
          const obtainedTitle = document.querySelector<HTMLElement>(
            "#title" + key,
          )?.innerText;
          const obtainedTextarea = document.querySelector<HTMLElement>(
            "#textarea" + key,
          )?.innerText;
          const date: string = getNowDate();
          const dateValue: string = date.split(",")[1].trim();
          const form = document.querySelector<HTMLElement>(`#form${key}`)!;

          // if the form is not empty
          if (obtainedTitle && obtainedTextarea) {
            // save in object to localStorage
            const allvalue = {
              id: key,
              title: obtainedTitle,
              textarea: obtainedTextarea,
              date: date,
            };

            const contextForm = `
            <div id="form${key}" class="text-content-box" data-key="${key}">
              <div>
                <h3 class="titleh3">${obtainedTitle}</h3>
                <p class="date-text">${dateValue}</p>
                <p class="text-paragraph">${obtainedTextarea}</p>
              </div>
                  <div class="container">
                    <div class="barraMostrar"></div>
                    <button data-key="${key}" class="botonShow">Mostrar</button>
                  </div>
                  <div class="container">
                    <div class="barra"></div>
                    <button data-key="${key}" class="botonEdit">Editar</button>
                  </div>
                  <div class="container">
                    <div class="barraDelete"></div>
                    <button data-key="${key}" class="botonDelete">Borrar</button>
                  </div>
            </div>
    `;

            // if the form exist and the key exist
            if (form !== null && key !== null) {
              form.remove();
              localStorage.removeItem(key!);
              showBox2form(contextForm);
            }

            // save the form register in localStorage
            localStorage.setItem(key!, JSON.stringify(allvalue));
            // call the function to show the form innicialize the bottoms
            bottomEdit();
            bottomShow();
            bottomClose();
            bottomDelete();
          }

          // get the messageBoxEdit
          const editMessageBox =
            document.querySelector<HTMLElement>("#messageBoxEdit")!;

          // show the messageBoxEdit
          if (editMessageBox !== null) {
            // remove the classList hide of the messageBoxEdit
            editMessageBox.classList.remove("hidden");
            editMessageBox.style.display = "block";
            editMessageBox.animate(
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
                duration: 700,
                easing: "ease-in-out",
                fill: "forwards",
              },
            );

            // hide the messageBoxEdit
            setTimeout(() => {
              // animation to hide the messageBoxEdit
              editMessageBox.animate(
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
                  duration: 700,
                  easing: "ease-in-out",
                  fill: "forwards",
                },
              );
            }, 1500);
          }
        });
      }
    });
  });
}

export { bottomEdit };
