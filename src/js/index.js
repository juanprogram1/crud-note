import "./css/index.css";
import { getNowDate, showBox2form } from "./showDate_showContent";
import { v4 as uuidv4 } from "uuid";
// bottomShow Form
document.getElementById("bottomShow")?.addEventListener("click", function () {
    const bottomShow = document.getElementById("bottomShow");
    const hiddenContent = document.getElementById("hiddenContent");
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
    const title = document.getElementById("title");
    const textarea = document.getElementById("writenote");
    // obtain the form data
    const titleValue = title.value;
    const textareaValue = textarea.value;
    const dateValue = getNowDate();
    const dateDMY = dateValue.split(",")[1].trim();
    // if empty
    if (titleValue !== "" && textareaValue !== "") {
        // generate a random string to use as a key for localStorage
        const ID = uuidv4();
        const tasks = {
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
    }
    else {
        alert("ingresa tu información");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    viewForm();
});
function viewForm() {
    // get all keys from localStorage
    const allKeys = Object.keys(localStorage);
    // get all values from localStorage
    const allValues = allKeys.map((key) => localStorage.getItem(key));
    // parse all values to FormRegister
    const allTasks = allValues.map((value) => JSON.parse(value));
    // map the register to the form for display
    allTasks.map((task) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLEVBQUUsSUFBSSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEMsa0JBQWtCO0FBQ2xCLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQy9ELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFzQixDQUFDO0lBQzlFLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFnQixDQUFDO0lBRTlFLElBQUksVUFBVSxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBQ2hDLGlEQUFpRDtRQUNqRCxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFFbEMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDdEQsUUFBUSxFQUFFLElBQUk7WUFDZCxNQUFNLEVBQUUsYUFBYTtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCwwQ0FBMEM7QUFDMUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDL0QsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxNQUFNLFlBQVksR0FBRyxRQUFRLENB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