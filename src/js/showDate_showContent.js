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
// function to show the content of the form in the text-content-box
function showBox2form(contentForm) {
    // add text-content-box to the text-content article
    const textContent = document.getElementById("text-content");
    if (textContent) {
        textContent.insertAdjacentHTML("afterbegin", contentForm);
        // insert the content HTML into the div
    }
}
export { getNowDate, showBox2form };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd0RhdGVfc2hvd0NvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zaG93RGF0ZV9zaG93Q29udGVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0REFBNEQ7QUFDNUQsU0FBUyxVQUFVO0lBQ2pCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFnQixDQUFDO0lBQzVELE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDM0IsTUFBTSxPQUFPLEdBQVc7UUFDdEIsT0FBTyxFQUFFLE1BQU07UUFDZixHQUFHLEVBQUUsU0FBUztRQUNkLEtBQUssRUFBRSxTQUFTO1FBQ2hCLElBQUksRUFBRSxTQUFTO1FBQ2YsSUFBSSxFQUFFLFNBQVM7UUFDZixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFDRixNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMvRCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDLHFDQUFxQztJQUNyRSxPQUFPLGFBQWEsQ0FBQztBQUN2QixDQUFDO0FBRUQsbUVBQW1FO0FBQ25FLFNBQVMsWUFBWSxDQUFDLFdBQW1CO0lBQ3ZDLG1EQUFtRDtJQUNuRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzVELElBQUksV0FBVyxFQUFFLENBQUM7UUFDaEIsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMxRCx1Q0FBdUM7SUFDekMsQ0FBQztBQUNILENBQUM7QUFFRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxDQUFDIn0=