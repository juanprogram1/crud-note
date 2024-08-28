import { showBox2form } from "./showDate_showContent";
import { bottomDelete } from "./bottoms/bottomDelete";
import { bottomShow } from "./bottoms/bottomShow";
import { bottomClose } from "./bottoms/bottomShow";
import { bottomEdit } from "./bottoms/bottomEdit";
function viewForm() {
    // get all keys from localStorage
    const allKeys = Object.keys(localStorage);
    // get all values from localStorage
    const allValues = allKeys.map((key) => localStorage.getItem(key));
    // parse all values to FormRegister
    const allTasks = allValues.map((value) => JSON.parse(value));
    allTasks.sort((a, b) => a.id - b.id);
    // map the register to the form for display
    allTasks.forEach((task) => {
        const dateDMY = task.date.split(",")[1];
        const contexform = `
        <div id="form${task.id}" class="text-content-box" data-key="${task.id}">
          <div>
            <h3 class="titleh3">${task.title}</h3>
            <p class="date-text">${dateDMY}</p>
            <p class="text-paragraph">${task.textarea}</p>
          </div>
                <div class="container">
                  <button data-key="${task.id}" class="botonShow">Mostrar</button>
                </div>
                <div class="container">
                  <button data-key="${task.id}" class="botonEdit">Editar</button>
                </div>
                <div class="container">
                  <button data-key="${task.id}" class="botonDelete">Borrar</button>
                </div>
        </div>
      `;
        // show the content of the form in the text-content-box
        showBox2form(contexform);
    });
    bottomDelete();
    bottomShow();
    bottomEdit();
    bottomClose();
}
export { viewForm };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld0Zvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi92aWV3Rm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELFNBQVMsUUFBUTtJQUNmLGlDQUFpQztJQUNqQyxNQUFNLE9BQU8sR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXBELG1DQUFtQztJQUNuQyxNQUFNLFNBQVMsR0FBc0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ3ZELFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQzFCLENBQUM7SUFFRixtQ0FBbUM7SUFDbkMsTUFBTSxRQUFRLEdBQVksU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQywyQ0FBMkM7SUFDM0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVcsRUFBRSxFQUFFO1FBQy9CLE1BQU0sT0FBTyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sVUFBVSxHQUFHO3VCQUNBLElBQUksQ0FBQyxFQUFFLHdDQUF3QyxJQUFJLENBQUMsRUFBRTs7a0NBRTNDLElBQUksQ0FBQyxLQUFLO21DQUNULE9BQU87d0NBQ0YsSUFBSSxDQUFDLFFBQVE7OztzQ0FHZixJQUFJLENBQUMsRUFBRTs7O3NDQUdQLElBQUksQ0FBQyxFQUFFOzs7c0NBR1AsSUFBSSxDQUFDLEVBQUU7OztPQUd0QyxDQUFDO1FBRUosdURBQXVEO1FBQ3ZELFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQztJQUNILFlBQVksRUFBRSxDQUFDO0lBQ2YsVUFBVSxFQUFFLENBQUM7SUFDYixVQUFVLEVBQUUsQ0FBQztJQUNiLFdBQVcsRUFBRSxDQUFDO0FBQ2hCLENBQUM7QUFFRCxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMifQ==