function bottomShow() {
    const showButtons = document.querySelectorAll(".botonShow");
    showButtons.forEach((showButton) => {
        showButton.addEventListener("click", () => {
            // get the key from the data-key attribute
            const key = showButton.dataset.key;
            // obtain classList of the element
            const modal = document.querySelector(".container-modal");
            const modalInfo = document.querySelector(".modal-info");
            const box1 = document.querySelector(".box1");
            const box2 = document.querySelector(".box2");
            const header = document.querySelector("header");
            const footer = document.querySelector("footer");
            const saveChanges = document.querySelector(".btnSaveEdit");
            // get the info from localStorage
            const infoLocalStorageKey = localStorage.getItem(key);
            // parse the JSON
            const JSONInfoLocalStorageKey = JSON.parse(infoLocalStorageKey);
            const allModalInfo = `
        <div class="date-modal">${JSONInfoLocalStorageKey.date}</div>
        <h3 class="title-modal">${JSONInfoLocalStorageKey.title}</h3>
        <p class="textarea-modal">${JSONInfoLocalStorageKey.textarea}</p>
      `;
            modalInfo.innerHTML = allModalInfo;
            // if the exist classList
            if (modal !== null && box1 !== null && box2 !== null) {
                modal.animate([
                    {
                        opacity: 0,
                        transform: "translateY(1%)",
                    },
                    {
                        opacity: 1,
                        transform: "translateY(0%)",
                    },
                ], {
                    duration: 900,
                    easing: "ease-in-out",
                    fill: "forwards",
                });
                // remove the classList of the modal
                modal.classList.remove("hidden");
                // add the classList of the box1
                box1.classList.add("hidden");
                // add the classList of the box2
                box2.classList.add("hidden");
                // add the classList of the header
                header.classList.add("hidden");
                // add the classList of the footer
                footer.classList.add("hidden");
                // add the classList of the saveChanges
                saveChanges.classList.add("hidden");
            }
            else {
                alert("no existe contenido");
            }
        });
    });
}
function bottomClose() {
    const bottomClose = document.querySelectorAll(".bottom-close");
    bottomClose.forEach((close) => {
        close.addEventListener("click", () => {
            // obtain classList of the element}
            const modal = document.querySelector(".container-modal");
            const box1 = document.querySelector(".box1");
            const box2 = document.querySelector(".box2");
            const header = document.querySelector("header");
            const footer = document.querySelector("footer");
            // if the exist classList
            if (modal !== null &&
                box1 !== null &&
                box2 !== null &&
                header !== null &&
                footer !== null) {
                // add the classList of the modal
                modal.classList.add("hidden");
                // remove the classList of the box1
                box1.classList.remove("hidden");
                // remove the classList of the box2
                box2.classList.remove("hidden");
                // remove the classList of the header
                header.classList.remove("hidden");
                // remove the classList of the footer
                footer.classList.remove("hidden");
            }
        });
    });
}
export { bottomShow, bottomClose };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tU2hvdy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2JvdHRvbXMvYm90dG9tU2hvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLFVBQVU7SUFDakIsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUMzQyxZQUFZLENBQ29CLENBQUM7SUFFbkMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1FBQ2pDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO1lBQ3hDLDBDQUEwQztZQUMxQyxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUNuQyxrQ0FBa0M7WUFDbEMsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBZ0IsQ0FBQztZQUN4RSxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBZ0IsQ0FBQztZQUN2RSxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQztZQUM1RCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBZ0IsQ0FBQztZQUM1RCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBZ0IsQ0FBQztZQUMvRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBZ0IsQ0FBQztZQUMvRCxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBZ0IsQ0FBQztZQUMxRSxpQ0FBaUM7WUFDakMsTUFBTSxtQkFBbUIsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUksQ0FBQyxDQUFDO1lBQ3ZELGlCQUFpQjtZQUNqQixNQUFNLHVCQUF1QixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW9CLENB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