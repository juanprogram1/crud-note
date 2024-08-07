import { Tasks } from "./designate";
import { showBox2form } from "./showDate_showContent";
import { initializeButtonEvents } from "./bottomsDelete";
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
  allTasks.map((task: Tasks) => {
    const contexform = `
        <div class="text-content-box" data-key="${task.id}">
          <h3 class="titleh3">${task.title}</h3>
          <p class="date-text">${task.date}</p>
          <p class="text-paragraph">${task.textarea}</p>
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

    // show the content of the form in the text-content-box
    showBox2form(contexform);
  });
  initializeButtonEvents();
}

export { viewForm };
