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
        const dateParts = task.date?.split(",");
        const dateDMY = dateParts && dateParts.length > 1 ? dateParts[1] : "";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld0Zvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi92aWV3Rm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWxELFNBQVMsUUFBUTtJQUNmLGlDQUFpQztJQUNqQyxNQUFNLE9BQU8sR0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRXBELG1DQUFtQztJQUNuQyxNQUFNLFNBQVMsR0FBc0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ3ZELFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQzFCLENBQUM7SUFFRixtQ0FBbUM7SUFDbkMsTUFBTSxRQUFRLEdBQVksU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNyQywyQ0FBMkM7SUFDM0MsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVcsRUFBRSxFQUFFO1FBQy9CLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sT0FBTyxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEUsTUFBTSxVQUFVLEdBQUc7dUJBQ0EsSUFBSSxDQUFDLEVBQUUsd0NBQXdDLElBQUksQ0FBQyxFQUFFOztrQ0FFM0MsSUFBSSxDQUFDLEtBQUs7bUNBQ1QsT0FBTzt3Q0FDRixJQUFJLENBQUMsUUFBUTs7O3NDQUdmLElBQUksQ0FBQyxFQUFFOzs7c0NBR1AsSUFBSSxDQUFDLEVBQUU7OztzQ0FHUCxJQUFJLENBQUMsRUFBRTs7O09BR3RDLENBQUM7UUFFSix1REFBdUQ7UUFDdkQsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsWUFBWSxFQUFFLENBQUM7SUFDZixVQUFVLEVBQUUsQ0FBQztJQUNiLFVBQVUsRUFBRSxDQUFDO0lBQ2IsV0FBVyxFQUFFLENBQUM7QUFDaEIsQ0FBQztBQUVELE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyJ9