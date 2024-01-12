buttonifyInputs = function(buttonClasses = '', lableClasses = '') {
    const labelEmptyFileListText = "No files selected";
    const buttonText = "Select file";

    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll("input[type=file]").forEach((input, index) => {
            // check if the input is already "button-ified"
            if (input.dataset.buttonIfied) {
                return
            }

            id = input.id !== "" ? input.id : `file-${index}`

            // create the label element
            const label = document.createElement("label");
            label.className = lableClasses;
            label.textContent = labelEmptyFileListText;
            label.setAttribute("for", id);

            // create the button element
            const button = document.createElement("button");
            button.className = buttonClasses;
            button.textContent = buttonText
            button.onclick = () => input.click();

            // hide the original input element
            input.style.display = "none"

            // set id incase it was not set before
            input.id = id

            // append elements after the hidden input
            input.insertAdjacentElement('afterend', button)
                .insertAdjacentElement('afterend', document.createElement("br"))
                .insertAdjacentElement('afterend', label)

            // set the label when input value changes
            input.onchange = (event) => {
                const fileNames = Array.from(event.target.files).map((file) => file.name).join(", ")
                label.textContent = fileNames !== "" ? fileNames : labelEmptyFileListText
            }

            // mark input element as "button-ified"
            input.dataset.buttonIfied = true
        })
    });
}