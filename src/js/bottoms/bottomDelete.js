function bottomDelete() {
    const deleteButtons = document.querySelectorAll(".botonDelete");
    deleteButtons.forEach((deleteButton) => {
        deleteButton.addEventListener("click", () => {
            // get the key of the element
            const key = deleteButton.getAttribute("data-key");
            const textContentBox = document.getElementById("form" + key);
            // if the element has a father && key is not null
            if (textContentBox !== null && key !== null) {
                // remove the element from the DOM
                textContentBox.remove();
                localStorage.removeItem(key);
                const messageDelete = document.getElementById("message-delete");
                messageDelete.classList.remove("hidden");
                messageDelete.classList.remove("hide-message");
                messageDelete.classList.add("show-message");
                // setTimeout to hide the message after 1.3 seconds
                setTimeout(() => {
                    messageDelete.classList.remove("show-message");
                    messageDelete.classList.add("hide-message");
                }, 1300);
            }
        });
    });
}
// Export the function
export { bottomDelete };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tRGVsZXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYm90dG9tcy9ib3R0b21EZWxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxZQUFZO0lBQ25CLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDN0MsY0FBYyxDQUNrQixDQUFDO0lBRW5DLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtRQUNyQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUMxQyw2QkFBNkI7WUFDN0IsTUFBTSxHQUFHLEdBQVcsWUFBWSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUUsQ0FBQztZQUMzRCxNQUFNLGNBQWMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUU3RCxpREFBaUQ7WUFDakQsSUFBSSxjQUFjLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFDNUMsa0NBQWtDO2dCQUNsQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3hCLFlBQVksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRTdCLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDaEUsYUFBYyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLGFBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNoRCxhQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFFN0MsbURBQW1EO2dCQUNuRCxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLGFBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUNoRCxhQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBRUQsc0JBQXNCO0FBQ3RCLE9BQU8sRUFBRSxZQUFZLEVBQUUsQ0FBQyJ9