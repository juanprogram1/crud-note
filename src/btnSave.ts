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

// formHandler.ts
function handleForm(): void {
  /*  call the function to handle the form */
  const form = document.getElementById("form") as HTMLFormElement;
  const title = document.getElementById("title") as HTMLInputElement;
  const textarea = document.getElementById("writenote") as HTMLTextAreaElement;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titleValue: string = title.value;
    const textareaValue: string = textarea.value;
    const dateValue = getNowDate();

    // send the form data to the server
  });
}

export { getNowDate, handleForm };
