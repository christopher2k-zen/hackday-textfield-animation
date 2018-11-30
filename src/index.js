const textFields = document.querySelectorAll(".textfield input");

textFields.forEach(element => {
  element.addEventListener("change", evt => {
    const label = evt.target.parentElement.querySelector("label");
    if (evt.target.value === "" && label.classList.contains("lockedLabel")) {
      label.classList.remove("lockedLabel");
    } else if (
      evt.target.value.length > 0 &&
      !label.classList.contains("lockedLabel")
    ) {
      label.classList.add("lockedLabel");
    }
  });
});
