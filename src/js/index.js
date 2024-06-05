import "./css/index.css";
import { handleForm, getNowDate } from "./btnSave";
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
/* getFormData, send information from HTML to server */
document.addEventListener("DOMContentLoaded", () => {
    handleForm();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRW5ELGtCQUFrQjtBQUNsQixRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUMvRCxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBc0IsQ0FBQztJQUM5RSxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBZ0IsQ0FBQztJQUU5RSxJQUFJLFVBQVUsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNoQyxpREFBaUQ7UUFDakQsVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRWxDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3RELFFBQVEsRUFBRSxJQUFJO1lBQ2QsTUFBTSxFQUFFLGFBQWE7U0FDdEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsMENBQTBDO0FBQzFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQy9ELE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekQsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM3RCxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdELE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0QsSUFBSSxVQUFVLElBQUksWUFBWSxJQUFJLFlBQVksSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNoRSwrQkFBK0I7UUFDL0IsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO1FBQy9DLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN6QyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDckMsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUN2QyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFekMsK0JBQStCO1FBQy9CLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUN6QyxZQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDckMsWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3ZDLFlBQVksQ0FBQyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUN6QyxZQUFZLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDekMsWUFBWSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO0lBQ2pELENBQUM7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILHlEQUF5RDtBQUN6RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFO0lBQ2pELFVBQVUsRUFBRSxDQUFDLENBQUMsZ0NBQWdDO0FBQ2hELENBQUMsQ0FBQyxDQUFDO0FBRUgsdURBQXVEO0FBQ3ZELFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDakQsVUFBVSxFQUFFLENBQUM7QUFDZixDQUFDLENBQUMsQ0FBQyJ9