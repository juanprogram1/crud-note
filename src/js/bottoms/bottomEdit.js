import { getNowDate, showBox2form } from "../showDate_showContent";
import { bottomClose, bottomShow } from "./bottomShow";
import { bottomDelete } from "./bottomDelete";
// function to edit the form
function bottomEdit() {
    const editButtons = document.querySelectorAll(".botonEdit");
    editButtons.forEach((editButton) => {
        editButton.addEventListener("click", () => {
            const key = editButton.dataset.key;
            // obtain classList of the element
            const modal = document.querySelector(".container-modal");
            const modalInfo = document.querySelector(".modal-info");
            const box1 = document.querySelector(".box1");
            const box2 = document.querySelector(".box2");
            const header = document.querySelector("header");
            const footer = document.querySelector("footer");
            const saveChanges = document.querySelector(".btnSaveEdit");
            // get the info from localStorage
            const infoLocalStorageKey = localStorage.getItem(key);
            // parse the JSON
            const JSONInfoLocalStorageKey = JSON.parse(infoLocalStorageKey);
            const titleValue = JSONInfoLocalStorageKey.title;
            const textareaValue = JSONInfoLocalStorageKey.textarea;
            const dateValue = JSONInfoLocalStorageKey.date;
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
                modal.animate([
                    {
                        opacity: 0,
                        transform: "translateY(1%)",
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0%)",
                    },
                ], {
                    duration: 900,
                    easing: "ease-in-out",
                    fill: "forwards",
                });
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
    /* initialize the variables */
    const idModalInfoSecondary = document.getElementById("modal-info-secondary");
    const key = idModalInfoSecondary.dataset.key;
    const title = document.getElementById("title" + key)?.innerText.trim();
    const textarea = document.getElementById("textarea" + key)?.innerText.trim();
    const date = getNowDate();
    if (title !== "" && textarea !== "") {
        // clear the text-content
        const textContent = document.getElementById("text-content");
        textContent.innerHTML = "";
        /* save the changes */
        const infoLocalStorageKey = localStorage.getItem(key);
        // parse the JSON
        const JSONInfoLocalStorageKey = JSON.parse(infoLocalStorageKey);
        JSONInfoLocalStorageKey.title = title;
        JSONInfoLocalStorageKey.textarea = textarea;
        JSONInfoLocalStorageKey.date = date;
        // stringify the JSON
        const JSONInfoLocalStorageKeyString = JSON.stringify(JSONInfoLocalStorageKey);
        // save the changes in localStorage
        localStorage.setItem(key, JSONInfoLocalStorageKeyString);
        /* ---------------- Upload the changes to the text-content to localStorage --------------- */
        // get all keys from localStorage
        const allKeys = Object.keys(localStorage);
        // get all values from localStorage
        const allValues = allKeys.map((key) => localStorage.getItem(key));
        // parse all values to FormRegister
        const allTasks = allValues.map((value) => JSON.parse(value));
        allTasks.sort((a, b) => a.id - b.id);
        // map the register to the form for display
        allTasks.forEach((task) => {
            const dateDMY = task.date.split(",")[1].trim();
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
            /* show the message edit save */
            const messageEdit = document.querySelector(".message-save-edit");
            messageEdit.classList.remove("hidden");
            messageEdit.classList.remove("hide-message");
            messageEdit.classList.add("show-message");
            // setTimeout to hide the message after 1.5 seconds
            setTimeout(() => {
                messageEdit.classList.remove("show-message");
                messageEdit.classList.add("hide-message");
            }, 900);
        });
    }
    else {
        if (title === "" || textarea === "") {
            const messageEdit = document.querySelector(".message-warning-edit");
            messageEdit.classList.remove("hidden");
            messageEdit.classList.remove("hide-message");
            messageEdit.classList.add("show-message");
            // setTimeout to hide the message after 1.5 seconds
            setTimeout(() => {
                messageEdit.classList.remove("show-message");
                messageEdit.classList.add("hide-message");
            }, 1500);
        }
    }
}
export { bottomEdit, saveChanges };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tRWRpdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2JvdHRvbXMvYm90dG9tRWRpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU5Qyw0QkFBNEI7QUFDNUIsU0FBUyxVQUFVO0lBQ2pCLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDM0MsWUFBWSxDQUNvQixDQUFDO0lBRW5DLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtRQUNqQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUN4QyxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNuQyxrQ0FBa0M7WUFDbEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBZ0IsQ0FBQztZQUN4RSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBZ0IsQ0FBQztZQUN2RSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQztZQUM1RCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQztZQUM1RCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBZ0IsQ0FBQztZQUMvRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBZ0IsQ0FBQztZQUMvRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMs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