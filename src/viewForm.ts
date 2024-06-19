import { Tasks } from "./designate";
import { showBox2form } from "./showDate_showContent";

function viewForm(): void {
  // get all keys from localStorage
  const allKeys: string[] = Object.keys(localStorage);

  // get all values from localStorage
  const allValues: (string | null)[] = allKeys.map((key) =>
    localStorage.getItem(key),
  );

  // parse all values to FormRegister
  const allTasks: Tasks[] = allValues.map((value) => JSON.parse(value!));
  allTasks.sort((a, b) => a.id - b.id);

  // map the register to the form for display
  allTasks.map((task: Tasks) => {
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
