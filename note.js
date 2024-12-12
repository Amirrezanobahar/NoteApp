
    let $ = document;
    let input = $.querySelector('input');
    let color = $.querySelectorAll('.colors');
    let container2 = $.getElementById('container2');
    let add = $.querySelector('.add');
    let p = $.querySelector('p'); // Ensure this element exists
    let remove = $.querySelector('.remove');
    let inputColor = 'white'; // Default color
    let body=$.body;

    // Your existing code here...

for (let i = 0; i < 8; i++) {
    color[i].addEventListener('click', function () {
        inputColor = color[i].style.backgroundColor;
        input.style.backgroundColor = inputColor;
    });
}

remove.addEventListener('click', function () {
    input.value = ''; // Clear the input field
    input.style.backgroundColor='white';
});

add.addEventListener('click', function () {
    if (input.value.trim() === '') {
        alert('Please enter a note.'); // Alert if the input is empty
        return; // Exit the function if the input is empty
    }
    let newPElement = $.createElement('p');
    newPElement.textContent = input.value; // Set the text content to the input value
    container2.appendChild(newPElement); // Append the new element to container2
    input.value = ''; // Clear the input field after adding the note
    newPElement.style.backgroundColor = inputColor;
    input.style.backgroundColor='white';
    newPElement.addEventListener('click',removeot)

});

function removeot(event){
event.target.remove();
}
body.addEventListener('keydown',function(event){
if(event.keyCode==13){
    if (input.value.trim() === '') {
        alert('Please enter a note.'); // Alert if the input is empty
        return; // Exit the function if the input is empty
    }
    let newPElement = $.createElement('p');
    newPElement.textContent = input.value; // Set the text content to the input value
    container2.appendChild(newPElement); // Append the new element to container2
    input.value = ''; // Clear the input field after adding the note
    newPElement.style.backgroundColor = inputColor;
    input.style.backgroundColor='white';
    newPElement.addEventListener('click',removeot)

}
})