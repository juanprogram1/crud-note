/* NowDate Form, send information from javascript to HTML */
function getNowDate() {
    const date = document.getElementById("date");
    const nowDate = new Date();
    const options = {
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
// formHandler.ts
function handleForm() {
    /*  call the function to handle the form */
    const form = document.getElementById("form");
    const title = document.getElementById("title");
    const textarea = document.getElementById("writenote");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const titleValue = title.value;
        const textareaValue = textarea.value;
        const dateValue = getNowDate();
        // send the form data to the server
    });
}
export { getNowDate, handleForm };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnRuU2F2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2J0blNhdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNERBQTREO0FBQzVELFNBQVMsVUFBVTtJQUNqQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBZ0IsQ0FBQztJQUM1RCxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzNCLE1BQU0sT0FBTyxHQUFXO1FBQ3RCLE9BQU8sRUFBRSxNQUFNO1FBQ2YsR0FBRyxFQUFFLFNBQVM7UUFDZCxLQUFLLEVBQUUsU0FBUztRQUNoQixJQUFJLEVBQUUsU0FBUztRQUNmLElBQUksRUFBRSxTQUFTO1FBQ2YsTUFBTSxFQUFFLFNBQVM7UUFDakIsTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDO0lBQ0YsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsQ0FBQyxxQ0FBcUM7SUFDckUsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQztBQUVELGlCQUFpQjtBQUNqQixTQUFTLFVBQVU7SUFDakIsMkNBQTJDO0lBQzNDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFvQixDQUFDO0lBQ2hFLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFxQixDQUFDO0lBQ25FLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUF3QixDQUFDO0lBRTdFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRTtRQUNwQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFFbkIsTUFBTSxVQUFVLEdBQVcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUN2QyxNQUFNLGFBQWEsR0FBVyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzdDLE1BQU0sU0FBUyxHQUFHLFVBQVUsRUFBRSxDQUFDO1FBRS9CLG1DQUFtQztJQUNyQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDIn0=