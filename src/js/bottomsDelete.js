function initializeButtonEvents() {
    const editButtons = document.querySelectorAll(".botonEdit");
    const showButtons = document.querySelectorAll(".botonShow");
    const deleteButtons = document.querySelectorAll(".botonDelete");
    editButtons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log("Editar");
        });
    });
    showButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const box1 = document.querySelector(".box1");
            const boxShow = document.querySelector(".boxShow");
            if (box1 && boxShow) {
                //  hidden the box1 and show the hidden content
                box1.classList.add("hidden");
                boxShow.classList.remove("hidden");
                boxShow.animate([{ opacity: 0 }, { opacity: 1 }], {
                    duration: 400,
                    easing: "ease-in-out",
                });
            }
        });
    });
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const keysDelete = button.getAttribute("data-key");
            const parentDiv = document.querySelector(`[data-key="${keysDelete}"]`);
            if (localStorage.getItem(keysDelete)) {
                // delete the item from localStorage
                localStorage.removeItem(keysDelete);
            }
            if (parentDiv) {
                // delete the div parent Html
                parentDiv.remove();
            }
        });
    });
}
export { initializeButtonEvents };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tc0RlbGV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2JvdHRvbXNEZWxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyxzQkFBc0I7SUFDN0IsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVELE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RCxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFaEUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzdCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUM3QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFRLEVBQUU7WUFDM0MsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ25CLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFtQixDQUFDO1lBQy9ELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFtQixDQUFDO1lBRXJFLElBQUksSUFBSSxJQUFJLE9BQU8sRUFBRSxDQUFDO2dCQUNwQiwrQ0FBK0M7Z0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM3QixPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFbkMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7b0JBQ2hELFFBQVEsRUFBRSxHQUFHO29CQUNiLE1BQU0sRUFBRSxhQUFhO2lCQUN0QixDQUFDLENBQUM7WUFDTCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztJQUVILGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUMvQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFRLEVBQUU7WUFDL0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sVUFBVSxHQUFXLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFXLENBQUM7WUFDckUsTUFBTSxTQUFTLEdBQW1CLFFBQVEsQ0FBQyxhQUFhLENBQ3RELGNBQWMsVUFBVSxJQUFJLENBQ1gsQ0FBQztZQUVwQixJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztnQkFDckMsb0NBQW9DO2dCQUNwQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFFRCxJQUFJLFNBQVMsRUFBRSxDQUFDO2dCQUNkLDZCQUE2QjtnQkFDN0IsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3JCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUNELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxDQUFDIn0=