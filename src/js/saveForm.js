import { getNowDate, showBox2form } from "./showDate_showContent";
import { bottomDelete } from "./bottoms/bottomDelete";
import { bottomShow } from "./bottoms/bottomShow";
import { bottomClose } from "./bottoms/bottomShow";
import { bottomEdit } from "./bottoms/bottomEdit";
// fuction to generate a unique id
function generateIdUnique() {
    // obtain the time current in milliseconds from the epoch Unix time
    const timestamp = Date.now();
    // convert the timestamp to seconds
    const timestampSegundos = Math.floor(timestamp / 1000);
    // generate a unique id
    return `${timestampSegundos}`;
}
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
        const idUser = generateIdUnique();
        const tasks = {
            id: idUser,
            title: titleValue,
            textarea: textareaValue,
            date: dateValue,
        };
        // save the form register in localStorage
        localStorage.setItem(idUser, JSON.stringify(tasks));
        const contexform = `
      <div id="form${idUser}" class="text-content-box" data-key="${idUser}">
        <div>
          <h3 class="titleh3">${titleValue}</h3>
          <p class="date-text">${dateDMY}</p>
          <p class="text-paragraph">${textareaValue}</p>
        </div>
                <div class="container">
                  <button data-key="${idUser}" class="botonShow">Mostrar</button>
                </div>
                <div class="container">
                  <button data-key="${idUser}" class="botonEdit">Editar</button>
                </div>
                <div class="container">
                  <button data-key="${idUser}" class="botonDelete">Borrar</button>
                </div>
      </div>
    `;
        // show the content of the form in the text-content-box
        showBox2form(contexform);
        // clean the form
        title.value = ""; // clean the title input
        textarea.value = ""; // clean the textarea input
    }
    else {
        const messageWarning = document.querySelector(".message-warning");
        /* if the title and textarea are empty */
        if (titleValue === "" || textareaValue === "") {
            // remove the hidden class to show the message warning
            messageWarning.classList.remove("hidden");
            messageWarning.classList.remove("hide-message");
            messageWarning.classList.add("show-message");
            /* setTimeout to hide the message after 2.5 seconds */
            setTimeout(() => {
                /* remove the show-message class to hide the message */
                messageWarning.classList.remove("show-message");
                messageWarning.classList.add("hide-message");
            }, 2500);
        }
    }
    bottomDelete();
    bottomShow();
    bottomEdit();
    bottomClose();
}
export { saveForm };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zYXZlRm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxrQ0FBa0M7QUFDbEMsU0FBUyxnQkFBZ0I7SUFDdkIsbUVBQW1FO0lBQ25FLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUU3QixtQ0FBbUM7SUFDbkMsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUV2RCx1QkFBdUI7SUFDdkIsT0FBTyxHQUFHLGlCQUFpQixFQUFFLENBQUM7QUFDaEMsQ0FBQztBQUVELFNBQVMsUUFBUTtJQUNmLG9DQUFvQztJQUNwQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBcUIsQ0FBQztJQUNuRSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBd0IsQ0FBQztJQUU3RSx1QkFBdUI7SUFDdkIsTUFBTSxVQUFVLEdBQVcsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUN2QyxNQUFNLGFBQWEsR0FBVyxRQUFRLENBQUMsS0FBSyxDQUFDO0lBQzdDLE1BQU0sU0FBUyxHQUFHLFVBQVUsRUFBRSxDQUFDO0lBQy9CLE1BQU0sT0FBTyxHQUFXLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFdkQsV0FBVztJQUNYLElBQUksVUFBVSxLQUFLLEVBQUUsSUFBSSxhQUFhLEtBQUssRUFBRSxFQUFFLENBQUM7UUFDOUMsNERBQTREO1FBRTVELE1BQU0sTUFBTSxHQUFHLGdCQUFnQixFQUFFLENBQUM7UUFFbEMsTUFBTSxLQUFLLEdBQVc7WUFDcEIsRUFBRSxFQUFFLE1BQU07WUFDVixLQUFLLEVBQUUsVUFBVTtZQUNqQixRQUFRLEVBQUUsYUFBYTtZQUN2QixJQUFJLEVBQUUsU0FBUztTQUNoQixDQUFDO1FBRUYseUNBQXlDO1FBQ3pDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVwRCxNQUFNLFVBQVUsR0FBRztxQkFDRixNQUFNLHdDQUF3QyxNQUFNOztnQ0FFekMsVUFBVTtpQ0FDVCxPQUFPO3NDQUNGLGFBQWE7OztzQ0FHYixNQUFNOzs7c0NBR04sTUFBTTs7O3NDQUdOLE1BQU07OztLQUd2QyxDQUFDO1FBRUYsdURBQXVEO1FBQ3ZELFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV6QixpQkFBaUI7UUFDakIsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyx3QkFBd0I7UUFDMUMsUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQywyQkFBMkI7SUFDbEQsQ0FBQztTQUFNLENBQUM7UUFDTixNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFbEUseUNBQXlDO1FBQ3pDLElBQUksVUFBVSxLQUFLLEVBQUUsSUFBSSxhQUFhLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDOUMsc0RBQXNEO1lBQ3RELGNBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNDLGNBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2pELGNBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBRTlDLHNEQUFzRDtZQUN0RCxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLHVEQUF1RDtnQkFDdkQsY0FBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ2pELGNBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2hELENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUM7SUFDSCxDQUFDO0lBQ0QsWUFBWSxFQUFFLENBQUM7SUFDZixVQUFVLEVBQUUsQ0FBQztJQUNiLFVBQVUsRUFBRSxDQUFDO0lBQ2IsV0FBVyxFQUFFLENBQUM7QUFDaEIsQ0FBQztBQUVELE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyJ9