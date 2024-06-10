import "./css/index.css";
import { getNowDate, showBox2form } from "./showDate_showContent";
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
  const dateDMY = dateValue.split(",")[1];

  // if empty
  if (titleValue === "" || textareaValue === "") {
    alert("ingresa tu información");
    return;
  }

  // generate a random string to use as a key for localStorage
  const ID = uuidv4();

  const titleSet = `title${ID}`;
  const textareaSet = `textarea${ID}`;
  const dateSet = `date${ID}`;

  // save the form register in localStorage
  localStorage.setItem(titleSet, titleValue);
  localStorage.setItem(textareaSet, textareaValue);
  localStorage.setItem(dateSet, dateDMY);

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
}
