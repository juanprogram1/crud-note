import { getNowDate, showBox2form } from "./showDate_showContent";
import { Tasks2 } from "./designate";
import { bottomDelete } from "./bottoms/bottomDelete";
import { bottomShow } from "./bottoms/bottomShow";
import { bottomClose } from "./bottoms/bottomShow";
import { bottomEdit } from "./bottoms/bottomEdit";

// fuction to generate a unique id
function generateIdUnique(): string {
  // obtain the time current in milliseconds from the epoch Unix time
  const timestamp = Date.now();

  // convert the timestamp to seconds
  const timestampSegundos = Math.floor(timestamp / 1000);

  // generate a unique id
  return `${timestampSegundos}`;
}

function saveForm() {
  // call title and textarea from HTML
  const title = document.getElementById("title") as HTMLInputElement;
  const textarea = document.getElementById("writenote") as HTMLTextAreaElement;

  // obtain the form data
  const titleValue: string = title.value;
  const textareaValue: string = textarea.value;
  const dateValue = getNowDate();
  const dateDMY: string = dateValue.split(",")[1].trim();

  // if empty
  if (titleValue !== "" && textareaValue !== "") {
    // generate a random string to use as a key for localStorage

    const idUser = generateIdUnique();

    const tasks: Tasks2 = {
      id: idUser,
      title: titleValue,
      textarea: textareaValue,
      date: dateValue,
    };

    // save the form register in localStorage
    localStorage.setItem(idUser, JSON.stringify(tasks));

    const contexform = `
      <div id="form${idUser}" class="text-content-box" data-key="${idUser}">
        <div>
          <h3 class="titleh3">${titleValue}</h3>
          <p class="date-text">${dateDMY}</p>
          <p class="text-paragraph">${textareaValue}</p>
        </div>
                <div class="container">
                  <button data-key="${idUser}" class="botonShow">Mostrar</button>
                </div>
                <div class="container">
                  <button data-key="${idUser}" class="botonEdit">Editar</button>
                </div>
                <div class="container">
                  <button data-key="${idUser}" class="botonDelete">Borrar</button>
                </div>
      </div>
    `;

    // show the content of the form in the text-content-box
    showBox2form(contexform);

    // clean the form
    title.value = ""; // clean the title input
    textarea.value = ""; // clean the textarea input
  } else {
    const messageWarning = document.querySelector(".message-warning");

    /* if the title and textarea are empty */
    if (titleValue === "" || textareaValue === "") {
      // remove the hidden class to show the message warning
      messageWarning!.classList.remove("hidden");
      messageWarning!.classList.remove("hide-message");
      messageWarning!.classList.add("show-message");

      /* setTimeout to hide the message after 2.5 seconds */
      setTimeout(() => {
        /* remove the show-message class to hide the message */
        messageWarning!.classList.remove("show-message");
        messageWarning!.classList.add("hide-message");
      }, 2500);
    }
  }
  bottomDelete();
  bottomShow();
  bottomEdit();
  bottomClose();
}

export { saveForm };
