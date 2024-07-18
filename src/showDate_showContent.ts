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
    textContent.insertAdjacentHTML("afterbegin", contentForm);
    // insert the content HTML into the div textContent
  }
}
function sectionDad(contentForm: string) {
  // add div show-content-box to the sectionDad
  const textContent = document.querySelector(".sectionDad") as HTMLElement;
  if (textContent) {
    textContent.insertAdjacentHTML("afterbegin", contentForm);
    // insert the content HTML into the div textContent
  }
}

export { getNowDate, showBox2form, sectionDad };
