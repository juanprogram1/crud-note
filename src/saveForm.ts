import { getNowDate, showBox2form } from "./showDate_showContent";
import { Tasks } from "./designate";

// Función para obtener el contador actual del localStorage
function getCardCounter() {
  const counter = localStorage.getItem("cardCounter");
  return counter ? parseInt(counter, 10) : 0;
}

// Función para incrementar el contador y guardarlo en localStorage
function incrementCardCounter() {
  const currentCounter = getCardCounter();
  localStorage.setItem("cardCounter", String(currentCounter + 1));
}

// Modificación de la función saveForm para incluir la lógica de ID único
function saveForm() {
  // Obtener título y área de texto del formulario
  const title = document.getElementById("title") as HTMLInputElement;
  const textarea = document.getElementById("writenote") as HTMLTextAreaElement;

  // Obtener los datos del formulario
  const titleValue: string = title.value;
  const textareaValue: string = textarea.value;
  const dateValue = getNowDate();
  const dateDMY: string = dateValue.split(",")[1].trim();

  // Verificar si están vacíos
  if (titleValue !== "" && textareaValue !== "") {
    // Generar un ID único para esta tarea
    const taskId = getCardCounter() + 1;
    incrementCardCounter();

    const tasks: Tasks = {
      id: taskId,
      title: titleValue,
      textarea: textareaValue,
      date: dateDMY,
    };

    // Guardar el registro del formulario en localStorage
    localStorage.setItem(`${taskId}`, JSON.stringify(tasks));
    const contexform = `
        <div class="text-content-box">
          <h3 class="titleh3">${titleValue}</h3>
          <p class="date-text">${dateDMY}</p>
          <p class="text-paragraph">${textareaValue}</p>
        </div>
      `;

    // Mostrar el contenido del formulario en el text-content-box
    showBox2form(contexform);

    // Limpiar el formulario
    title.value = ""; // Limpiar el input del título
    textarea.value = ""; // Limpiar el textarea
  } else {
    alert("ingresa tu información");
  }
}

export { saveForm };
