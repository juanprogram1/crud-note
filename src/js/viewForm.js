import { showBox2form } from "./showDate_showContent";
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
export { viewForm };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld0Zvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi92aWV3Rm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsU0FBUyxRQUFRO0lBQ2YsaUNBQWlDO0lBQ2pDLE1BQU0sT0FBTyxHQUFhLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFcEQsbUNBQW1DO0lBQ25DLE1BQU0sU0FBUyxHQUFzQixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FDdkQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FDMUIsQ0FBQztJQUVGLG1DQUFtQztJQUNuQyxNQUFNLFFBQVEsR0FBWSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQU0sQ0FBQyxDQUFDLENBQUM7SUFFdkUsMkNBQTJDO0lBQzNDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFrQixFQUFFLEVBQUU7UUFDbEMsTUFBTSxVQUFVLEdBQUc7O2dDQUVTLElBQUksQ0FBQyxLQUFLO2lDQUNULElBQUksQ0FBQyxJQUFJO3NDQUNKLElBQUksQ0FBQyxRQUFROztPQUU1QyxDQUFDO1FBRUosdURBQXVEO1FBQ3ZELFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMifQ==