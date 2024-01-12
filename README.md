# Buttonify Inputs

This repository contains a small JavaScript and jQuery snippet to automatically hide all input elements of type file and replace them with a button and a label. The label will display either an empty file label or the names of the selected files.

## Overview

Modern web applications often require customized file input elements for a better user experience. This snippet enhances file input elements by automatically hiding them and replacing them with a button and a label, providing a cleaner and more intuitive interface.

## Features

- Automatic hiding of file input elements
- Replacement with a button and label
- Display of selected file names in the label
- Support for multiple file selections
- Optional arguments to customize button and label classes

## Usage

To use this snippet in your project, follow these steps:

1. Include the either the JavaScript or the JQuery file in your HTML file.
```html
<script src="path/to/javascript.js"></script>
<script src="path/to/jquery.js"></script>
```
2. Call the imported buttonifyInputs() function to enhance your input elements. Optionally, you can pass two arguments: buttonClasses and labelClasses to customize the styling.
```html
<script>
  buttonifyInputs("button", "label")
</script>
```
Now, your file input elements will be automatically hidden and replaced with a button and a label, with optional custom classes applied.

## Example
A basic example of how to use the function is found in the [example.html](example.html)
