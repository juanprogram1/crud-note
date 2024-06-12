import "./css/index.css";
import { getNowDate, showBox2form } from "./showDate_showContent";
import type { Tasks, FormRegister } from "./designate";
import { v4 as uuidv4 } from "uuid";

// bottomShow Form
document.getElementById("bottomShow")?.addEventListener("click", function () {
  const bottomShow = document.getElementById("bottomShow") as HTMLButtonElement;
  const hiddenContent = document.getElementById("hiddenContent") as HTMLElement;

  if (bottomShow && hiddenContent) {
    //  Hidden the button and show the hidden content
    bottomShow.style.display = "none";

    hiddenContent.classList.remove("hidden");
    hiddenContent.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 1200,
      easing: "ease-in-out",
    });
  }
});

// bottomShow Form style header and footer
document.getElementById("bottomShow")?.addEventListener("click", function () {
  const bottomShow = document.getElementById("bottomShow");
  const bottomHeader = document.getElementById("bottomHeader");
  const bottomFooter = document.getElementById("bottomFooter");
  const hiddenContent = document.getElementById("hiddenContent");
  if (bottomShow && bottomHeader && bottomFooter && hiddenContent) {
    // header source specifications
    bottomHeader.style.textTransform = "uppercase";
    bottomHeader.style.fontFamily = "Roboto";
    bottomHeader.style.fontSize = "52px";
    bottomHeader.style.paddingTop = "0rem";
    bottomHeader.style.fontWeight = "bold";
    bottomHeader.style.letterSpacing = "2px";

    // footer source specifications
    bottomFooter.style.fontFamily = "Roboto";
    bottomFooter.style.fontSize = "20px";
    bottomFooter.style.fontWeight = "bold";
    bottomFooter.style.letterSpacing = "1px";
    bottomFooter.style.paddingBottom = "8px";
    bottomFooter.style.textTransform = "uppercase";
  }
});

// NowDate Form, send information from javascript to HTML
document.addEventListener("DOMContentLoaded", () => {
  getNowDate(); // Get the current date and time
});

// saveForm function
document.getElementById("btnSave")?.addEventListener("click", saveForm);

// saveForm
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

    const ID = uuidv4();

    const tasks: Tasks = {
      title: titleValue,
      textarea: textareaValue,
      date: dateDMY,
    };

    // save the form register in localStorage
    localStorage.setItem(ID, JSON.stringify(tasks));

    const contexform = `
      <div class="text-content-box">
        <h3 class="titleh3">${titleValue}</h3>
        <p class="date-text">${dateDMY}</p>
        <p class="text-paragraph">${textareaValue}</p>
      </div>
    `;

    // show the content of the form in the text-content-box
    showBox2form(contexform);

    // clean the form
    title.value = ""; // clean the title input
    textarea.value = ""; // clean the textarea input
  } else {
    alert("ingresa tu información");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  viewForm();
});

function viewForm(): void {
  // get all keys from localStorage
  const allKeys: string[] = Object.keys(localStorage);

  // get all values from localStorage
  const allValues: (string | null)[] = allKeys.map((key) =>
    localStorage.getItem(key),
  );

  // parse all values to FormRegister
  const allTasks: Tasks[] = allValues.map((value) => JSON.parse(value!));

  // map the register to the form for display
  allTasks.map((task: FormRegister) => {
    const contexform = `
      <div class="text-content-box">
        <h3 class="titleh3">${task.title}</h3>
        <p class="date-text">${task.date}</p>
        <p class="text-paragraph">${task.textarea}</p>
      </div>
    `;

    // show the content of the form in the text-content-box
    showBox2form(contexform);
  });
}
