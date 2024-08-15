function bottomEdit() {
  const editButtons = document.querySelectorAll(
    ".botonEdit",
  ) as NodeListOf<HTMLButtonElement>;

  editButtons.forEach((editButton) => {
    editButton.addEventListener("click", () => {
      const key = editButton.dataset.key;
      // obtain classList of the element
      const modal = document.querySelector(".container-modal") as HTMLElement;
      const modalInfo = document.querySelector(".modal-info") as HTMLElement;
      const box1 = document.querySelector(".box1") as HTMLElement;
      const box2 = document.querySelector(".box2") as HTMLElement;
      const header = document.querySelector("header") as HTMLElement;
      const footer = document.querySelector("footer") as HTMLElement;
      const saveChanges = document.querySelector(".btnSaveEdit") as HTMLElement;
      // get the info from localStorage
      const infoLocalStorageKey = localStorage.getItem(key!);
      // parse the JSON
      const JSONInfoLocalStorageKey = JSON.parse(infoLocalStorageKey!);

      const titleValue: string = JSONInfoLocalStorageKey.title;
      const textareaValue: string = JSONInfoLocalStorageKey.textarea;
      const dateValue: string = JSONInfoLocalStorageKey.date;

      const allModalInfo = `
        <div class="date-modal">${dateValue}</div>
        <h3 id="title${key}" class="title-modal" contenteditable="true">${titleValue}</h3>
        <p id="textarea${key}" class="textarea-modal" contenteditable="true">${textareaValue}</p>
      `;

      modalInfo.innerHTML = allModalInfo;

      // if the exist classList
      if (modal !== null && box1 !== null && box2 !== null) {
        modal.animate(
          [
            {
              opacity: 0,
              transform: "translateY(1%)",
            },
            {
              opacity: 1,
              transform: "translateY(0%)",
            },
          ],
          {
            duration: 900,
            easing: "ease-in-out",
            fill: "forwards",
          },
        );
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
        saveChanges.classList.remove("hidden");

        // ADD THE EVENT LISTENER TO THE SAVECHANGES BOTTON TO SAVE THE CHANGES
        saveChanges.addEventListener("click", () => {
          const obtainedTitle = document.querySelector<HTMLElement>(
            "#title" + key,
          )?.innerText;
          const obtainedTextarea = document.querySelector<HTMLElement>(
            "#textarea" + key,
          )?.innerText;

          if (obtainedTitle && obtainedTextarea) {
            const allvalue = {
              id: key,
              title: obtainedTitle,
              textarea: obtainedTextarea,
              date: dateValue,
            };

            // save the form register in localStorage
            localStorage.setItem(key!, JSON.stringify(allvalue));
          }
        });
      } else {
        alert("no existe contenido");
      }
    });
  });
}

export { bottomEdit };
