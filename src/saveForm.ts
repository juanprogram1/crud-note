import { getNowDate, showBox2form } from "./showDate_showContent";
import { Tasks2 } from "./designate";
import { viewForm } from "./viewForm";
import { sectionDad } from "./showDate_showContent";

// viewForm function
viewForm();

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
      date: dateDMY,
    };

    // save the form register in localStorage
    localStorage.setItem(idUser, JSON.stringify(tasks));

    const contexform = `
      <div class="text-content-box" data-key="${idUser}">
        <div data-key="${idUser}">
          <h3 class="titleh3">${titleValue}</h3>
          <p class="date-text">${dateDMY}</p>
          <p class="text-paragraph">${textareaValue}</p>
        </div>
                <div class="container">
                  <div class="barraMostrar"></div>
                  <button data-key="${idUser}" class="botonShow">Mostrar</button>
                </div>
                <div class="container">
                  <div class="barra"></div>
                  <button data-key="${idUser}" class="botonEdit">Editar</button>
                </div>
                <div class="container">
                  <div class="barraDelete"></div>
                  <button data-key="${idUser}" class="botonDelete">Borrar</button>
                </div>
      </div>
    `;

    const hiddenContent = `<div class="boxShow boxShow-content-text hidden" data-key="${idUser}"></div>`;

    // show the content of the form in the text-content-box
    showBox2form(contexform);
    sectionDad(hiddenContent);

    // clean the form
    title.value = ""; // clean the title input
    textarea.value = ""; // clean the textarea input
  } else {
    alert("ingresa tu información");
  }
}

export { saveForm };
