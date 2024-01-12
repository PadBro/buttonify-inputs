buttonifyInputs = function(buttonClasses = '', lableClasses = '') {
    const labelEmptyFileListText = "No files selected";
    const buttonText = "Select file";

    $(document).ready(function() {
        $("input[type=file]").each((index, element) => {
            // check if the input is already "button-ified"
            if ($(element).data('buttonIfied')) {
                return;
            }

            const id = element.id !== "" ? element.id : `file-${index}`

            // create the button element
            const button = $("<button />")
                .text(buttonText)
                .on("click", () => element.click())
                .addClass(buttonClasses)

            // create the label element
            const label = $("<label />")
                .text(labelEmptyFileListText)
                .attr("for", id)
                .addClass(lableClasses)

            $(element)
                // hide the original input element
                .hide()
                // set id incase it was not set before
                .attr('id', id)
                // append the new elements
                .after(button, "<br />", label)
                // set the label when input value changes
                .on('change', (event) => {
                    const fileNames = Array.from(event.target.files).map((file) => file.name).join(", ")
                    label.text(fileNames !== "" ? fileNames : labelEmptyFileListText);
                })
                // mark input element as "button-ified"
                .data('buttonIfied', true);
        });
    });
}