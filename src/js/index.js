import "./css/index.css";
import { getNowDate, showBox2form } from "./showDate_showContent";
import { v4 as uuidv4 } from "uuid";
import { viewForm } from "./viewForm";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFbEUsT0FBTyxFQUFFLEVBQUUsSUFBSSxNQUFNLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV0QyxrQkFBa0I7QUFDbEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDL0QsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQXNCLENBQUM7SUFDOUUsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQWdCLENBQUM7SUFFOUUsSUFBSSxVQUFVLElBQUksYUFBYSxFQUFFLENBQUM7UUFDaEMsaURBQWlEO1FBQ2pELFVBQVUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUVsQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUN0RCxRQUFRLEVBQUUsSUFBSTtZQUNkLE1BQU0sRUFBRSxhQUFhO1NBQ3RCLENBQUMsQ0FBQztJQUNMLENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILDBDQUEwQztBQUMxQyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUMvRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlB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