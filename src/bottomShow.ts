function bottomShow() {
  const showButtons = document.querySelectorAll(
    ".botonShow",
  ) as NodeListOf<HTMLButtonElement>;

  showButtons.forEach((showButton) => {
    showButton.addEventListener("click", () => {
      // get the key from the data-key attribute
      const key = showButton.dataset.key;
      // obtain classList of the element
      const modal = document.querySelector(".container-modal") as HTMLElement;
      const modalInfo = document.querySelector(".modal-info") as HTMLElement;
      const box1 = document.querySelector(".box1") as HTMLElement;
      const box2 = document.querySelector(".box2") as HTMLElement;
      const header = document.querySelector("header") as HTMLElement;
      const footer = document.querySelector("footer") as HTMLElement;
      // get the info from localStorage
      const infoLocalStorageKey = localStorage.getItem(key!);
      // parse the JSON
      const JSONInfoLocalStorageKey = JSON.parse(infoLocalStorageKey!);

      const allModalInfo = `
        <div class="date-modal">${JSONInfoLocalStorageKey.date}</div>
        <h3 class="title-modal">${JSONInfoLocalStorageKey.title}</h3>
        <p class="textarea-modal">${JSONInfoLocalStorageKey.textarea}</p>
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
      } else {
        alert("no existe contenido");
      }
    });
  });
}

function bottomClose() {
  const bottomClose = document.querySelectorAll(
    ".bottom-close",
  ) as NodeListOf<HTMLButtonElement>;

  bottomClose.forEach((close) => {
    close.addEventListener("click", () => {
      // obtain classList of the element
      const modal = document.querySelector(".container-modal") as HTMLElement;
      const box1 = document.querySelector(".box1") as HTMLElement;
      const box2 = document.querySelector(".box2") as HTMLElement;
      const header = document.querySelector("header") as HTMLElement;
      const footer = document.querySelector("footer") as HTMLElement;

      // if the exist classList
      if (
        modal !== null &&
        box1 !== null &&
        box2 !== null &&
        header !== null &&
        footer !== null
      ) {
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
