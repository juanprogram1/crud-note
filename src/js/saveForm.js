import { getNowDate, showBox2form } from "./showDate_showContent";
import { viewForm } from "./viewForm";
import { initializeButtonEvents } from "./bottomsDelete";
// viewForm function
viewForm();
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
            date: dateDMY,
        };
        // save the form register in localStorage
        localStorage.setItem(idUser, JSON.stringify(tasks));
        const contexform = `
      <div class="text-content-box" data-key="${idUser}">
        <h3 class="titleh3">${titleValue}</h3>
        <p class="date-text">${dateDMY}</p>
        <p class="text-paragraph">${textareaValue}</p>
                <div class="container">
                  <div class="barraMostrar"></div>
                  <button data-key="${idUser}" class="botonShow">Mostrar</button>
                </div>
                <div class="container">
                  <div class="barra"></div>
                  <button data-key="${idUser}" class="botonEdit">Editar</button>
                </div>
                <div class="container">
                  <div class="barraDelete"></div>
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
        alert("ingresa tu información");
    }
    initializeButtonEvents();
}
export { saveForm };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F2ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zYXZlRm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRWxFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDdEMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekQsb0JBQW9CO0FBQ3BCLFFBQVEsRUFBRSxDQUFDO0FBRVgsa0NBQWtDO0FBQ2xDLFNBQVMsZ0JBQWdCO0lBQ3ZCLG1FQUFtRTtJQUNuRSxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFFN0IsbUNBQW1DO0lBQ25DLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFFdkQsdUJBQXVCO0lBQ3ZCLE9BQU8sR0FBRyxpQkFBaUIsRUFBRSxDQUFDO0FBQ2hDLENBQUM7QUFFRCxTQUFTLFFBQVE7SUFDZixvQ0FBb0M7SUFDcEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQXFCLENBQUM7SUFDbkUsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQXdCLENBQUM7SUFFN0UsdUJBQXVCO0lBQ3ZCLE1BQU0sVUFBVSxHQUFXLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDdkMsTUFBTSxhQUFhLEdBQVcsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUM3QyxNQUFNLFNBQVMsR0FBRyxVQUFVLEVBQUUsQ0FBQztJQUMvQixNQUFNLE9BQU8sR0FBVyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRXZELFdBQVc7SUFDWCxJQUFJLFVBQVUsS0FBSyxFQUFFLElBQUksYUFBYSxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQzlDLDREQUE0RDtRQUU1RCxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO1FBRWxDLE1BQU0sS0FBSyxHQUFXO1lBQ3BCLEVBQUUsRUFBRSxNQUFNO1lBQ1YsS0FBSyxFQUFFLFVBQVU7WUFDakIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsSUFBSSxFQUFFLE9BQU87U0FDZCxDQUFDO1FBRUYseUNBQXlDO1FBQ3pDLFlBQVksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVwRCxNQUFNLFVBQVUsR0FBRztnREFDeUIsTUFBTTs4QkFDeEIsVUFBVTsrQkFDVCxPQUFPO29DQUNGLGFBQWE7OztzQ0FHWCxNQUFNOzs7O3NDQUlOLE1BQU07Ozs7c0NBSU4sTUFBTTs7O0tBR3ZDLENBQUM7UUFFRix1REFBdUQ7UUFFdkQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXpCLGlCQUFpQjtRQUNqQixLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QjtRQUMxQyxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLDJCQUEyQjtJQUNsRCxDQUFDO1NBQU0sQ0FBQztRQUNOLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxzQkFBc0IsRUFBRSxDQUFDO0FBQzNCLENBQUM7QUFFRCxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMifQ==