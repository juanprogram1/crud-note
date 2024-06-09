import { v4 as uuidv4 } from "uuid";

/* NowDate Form, send information from javascript to HTML */
function getNowDate() {
  const date = document.getElementById("date") as HTMLElement;
  const nowDate = new Date();
  const options: object = {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };
  const formattedDate = nowDate.toLocaleString("es-ES", options);
  date.innerText = formattedDate; // Set the date to the formatted date
  return formattedDate;
}

// function to show the content of the form in the text-content-box
function showBox2form(contentForm: string) {
  // add text-content-box to the text-content article
  const textContent = document.getElementById("text-content");
  if (textContent) {
    textContent.insertAdjacentHTML("afterbegin", contentForm); // insert the content HTML into the div
  }
}

//formHandler.ts
function handleForm() {
  const form = document.getElementById("form") as HTMLFormElement;
  const title = document.getElementById("title") as HTMLInputElement;
  const textarea = document.getElementById("writenote") as HTMLTextAreaElement;

  // Event listener for the submit button of the form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // obtain the form data
    const titleValue: string = title.value;
    const textareaValue: string = textarea.value;
    const dateValue = getNowDate();
    const dateDMY = dateValue.split(",")[1];

    if (titleValue && textareaValue && dateDMY) {
      // save the object to localStorage

      // generate a random string to use as a key for localStorage
      const ID = uuidv4();

      const titleSet = `title${ID}`;
      const textareaSet = `textarea${ID}`;
      const dateSet = `date${ID}`;

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
    } else {
      alert("Por favor rellene todos los campos!");
    }
  });
}

export { getNowDate, handleForm, showBox2form };
