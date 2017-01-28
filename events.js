console.log('javascript is linked');

// When any section is clicked the output target text should be 
// "You clicked on the {text of the section} section"

const outputDiv = document.getElementById("output-target");
const sections = document.getElementsByClassName("article-section");
//sections is an HTML collection
console.log('sections:', sections);
//this makes it an array
sectionsArray = Array.from(sections);
console.log('sectionsArray:', sectionsArray);

//this iterates through and assigns an eventlistenr to each
sectionsArray.forEach((section) => section.addEventListener("click", sectionOutput));

//this defines the callBack
function sectionOutput (event) {
 	let sectionMessage = `you clicked on the ${event.target.innerHTML} section`;
 	outputDiv.innerHTML = sectionMessage;
 }


 // When the mouse is over the h1 tag, 
 // the output element should contain the text "You moved your mouse over the header".
 
const title = document.getElementById("page-title");
const titleMessage = `You moved your mouse over the header.`;

//message while its over
title.addEventListener("mouseover", e => outputDiv.innerHTML = titleMessage);



 // When the mouse leaves the h1 tag, 
 // the output element should contain the text "You left me!!".
const titleMessageOut = `You left me!!`; 
title.addEventListener("mouseout", e => outputDiv.innerHTML = titleMessageOut);

 // When you type characters into the input field, 
 // the output element should mirror the text in the input field.
 const input = document.getElementById("keypress-input")

 input.addEventListener("keypress", function(e) { 
 		let inputValue = input.value;
 		outputDiv.innerHTML += inputValue;
 	});

 // When you click the "Add color" button, 
 // the `guinea-pig` element's text color should change to blue.
 const colorButton = document.getElementById("add-color");
 const guineaPig = document.getElementById("guinea-pig");

 colorButton.addEventListener("click", e => guineaPig.classList.add("blue"));

 // When you click the "Hulkify" button, 
 // the `guinea-pig` element's font size should become much larger.
 const hulkifyButton = document.getElementById("make-large");
 hulkifyButton.addEventListener("click", e => guineaPig.classList.add("large"));

 

 // When you click the "Capture it" button, 
 // the `guinea-pig` element should have a border added to it.
 const captureButton = document.getElementById("add-border");
 captureButton.addEventListener("click", e => guineaPig.classList.add("border"));
 

 // When you click the "Rounded" button, 
 // the `guinea-pig` element's border should become rounded.
 const roundedButton = document.getElementById("add-rounding");
 roundedButton.addEventListener("click", e => guineaPig.classList.add("rounded"));

 

 // The first section's text should be bold.
 sections[0].classList.add("bold");

 // The last section's text should be bold and italicized.
 sections[5].classList.add("italics");

 // Make the buttons stop appearing next to each other as inline elements. 
 // Change them into block elements.
 const buttons = document.getElementsByTagName("button");
 buttonsArray = Array.from(buttons);
 buttonsArray.forEach((button) => button.classList.add("block"));
 







