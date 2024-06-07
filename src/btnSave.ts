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

//formHandler.ts

function handleForm(): void {
  const form = document.getElementById("form") as HTMLFormElement;
  const title = document.getElementById("title") as HTMLInputElement;
  const textarea = document.getElementById("writenote") as HTMLTextAreaElement;

  // fuction to show the content of the form in the text-content-box
  function showBox2form(contentForm: string): void {
    // add text-content-box to the text-content article
    const textContent = document.getElementById("text-content");
    if (textContent) {
      textContent.insertAdjacentHTML("afterbegin", contentForm); // insert the content HTML into the div
    }
  }

  // Event listener for the submit button of the form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // obtain the form data
    const titleValue: string = title.value;
    const textareaValue: string = textarea.value;
    const dateValue = getNowDate();
    const dateDMY = dateValue.split(",")[1];

    if (titleValue && textareaValue && dateDMY) {
      // save the form data to localStorage
      localStorage.setItem("title", titleValue); // save the form data to localStorage
      localStorage.setItem("textarea", textareaValue); // save the form data to localStorage
      localStorage.setItem("date", dateDMY); // save the form data to localStorage

      const saveTitle = localStorage.getItem("title"); // recuperate the form data from localStorage for div text-content-box
      const saveTextarea = localStorage.getItem("textarea"); // recuperate the form data from localStorage for div text-content-box
      const saveDate = localStorage.getItem("date"); // recuperate the form data from localStorage for div text-content-box

      // recuperate the form data from localStorage for div text-content-box
      const contentForm = `
          <div class="text-content-box">
            <h3 class="titleh3">${saveTitle}</h3>
            <p class="date-text">${saveDate}</p>
            <p class="text-paragraph">${saveTextarea}</p>
          </div>
      `;

      // show the form in the text-content-box
      showBox2form(contentForm);

      // clean the form
      textarea.value = "";
      title.value = "";
    } else {
      alert("Por favor rellene todos los campos!");
    }
  });
}

export { getNowDate, handleForm };
