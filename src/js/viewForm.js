import { showBox2form } from "./showDate_showContent";
import { initializeButtonEvents } from "./bottomsDelete";
function viewForm() {
    // get all keys from localStorage
    const allKeys = Object.keys(localStorage);
    // get all values from localStorage
    const allValues = allKeys.map((key) => localStorage.getItem(key));
    // parse all values to FormRegister
    const allTasks = allValues.map((value) => JSON.parse(value));
    allTasks.sort((a, b) => a.id - b.id);
    // map the register to the form for display
    allTasks.map((task) => {
        const contexform = `
        <div class="text-content-box" data-key="${task.id}">
          <h3 class="titleh3">${task.title}</h3>
          <p class="date-text">${task.date}</p>
          <p class="text-paragraph">${task.textarea}</p>
                <div class="container">
                  <div class="barraMostrar"></div>
                  <button data-key="${task.id}" class="botonShow">Mostrar</button>
                </div>
                <div class="container">
                  <div class="barra"></div>
                  <button data-key="${task.id}" class="botonEdit">Editar</button>
                </div>
                <div class="container">
                  <div class="barraDelete"></div>
                  <button data-key="${task.id}" class="botonDelete">Borrar</button>
                </div>
        </div>
      `;
        // show the content of the form in the text-content-box
        showBox2form(contexform);
    });
    initializeButtonEvents();
}
export { viewForm };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld0Zvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi92aWV3Rm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsU0FBUyxRQUFRO0lBQ2YsaUNBQWlDO0lBQ2pDLE1BQU0sT0FBTyxHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFcEQsbUNBQW1DO0lBQ25DLE1BQU0sU0FBUyxHQUFzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDdkQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FDMUIsQ0FBQztJQUVGLG1DQUFtQztJQUNuQyxNQUFNLFFBQVEsR0FBWSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUM7SUFDdkUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXJDLDJDQUEyQztJQUMzQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBVyxFQUFFLEVBQUU7UUFDM0IsTUFBTSxVQUFVLEdBQUc7a0RBQzJCLElBQUksQ0FBQyxFQUFFO2dDQUN6QixJQUFJLENBQUMsS0FBSztpQ0FDVCxJQUFJLENBQUMsSUFBSTtzQ0FDSixJQUFJLENBQUMsUUFBUTs7O3NDQUdiLElBQUksQ0FBQyxFQUFFOzs7O3NDQUlQLElBQUksQ0FBQyxFQUFFOzs7O3NDQUlQLElBQUksQ0FBQyxFQUFFOzs7T0FHdEMsQ0FBQztRQUVKLHVEQUF1RDtRQUN2RCxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDSCxzQkFBc0IsRUFBRSxDQUFDO0FBQzNCLENBQUM7QUFFRCxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMifQ==