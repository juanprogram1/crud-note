import { Tasks } from "./designate";
import { showBox2form } from "./showDate_showContent";
import { bottomDelete } from "./bottoms/bottomDelete";
import { bottomShow } from "./bottoms/bottomShow";
import { bottomClose } from "./bottoms/bottomShow";
import { bottomEdit } from "./bottoms/bottomEdit";

function viewForm() {
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
    const dateParts = task.date?.split(",");
    const dateDMY = dateParts && dateParts.length > 1 ? dateParts[1] : "";
    const contexform = `
        <div id="form${task.id}" class="text-content-box" data-key="${task.id}">
          <div>
            <h3 class="titleh3">${task.title}</h3>
            <p class="date-text">${dateDMY}</p>
            <p class="text-paragraph">${task.textarea}</p>
          </div>
                <div class="container">
                  <button data-key="${task.id}" class="botonShow">Mostrar</button>
                </div>
                <div class="container">
                  <button data-key="${task.id}" class="botonEdit">Editar</button>
                </div>
                <div class="container">
                  <button data-key="${task.id}" class="botonDelete">Borrar</button>
                </div>
        </div>
      `;

    // show the content of the form in the text-content-box
    showBox2form(contexform);
  });
  bottomDelete();
  bottomShow();
  bottomEdit();
  bottomClose();
}

export { viewForm };
