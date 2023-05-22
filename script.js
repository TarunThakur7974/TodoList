let title = document.querySelector('.textinput');
let description = document.querySelector('.texttext');
let items = document.querySelector('.items');
let count = 0
let element;
let Title;
let Description;
let displaydata;
let sum = "";

let dataTitle;
let dataDescription;

dataTitle = []
dataDescription = []

let add = () => {
    if (title.value != '' && description.value != '') {
        count = count + 1
        dataTitle.push(title.value)
        localStorage.setItem('storedTitle', JSON.stringify(dataTitle))
        title.value = ""
        //Description code start's from here
        dataDescription.push(description.value)
        localStorage.setItem('storedDescription', JSON.stringify(dataDescription))
        description.value = ""

        Title = JSON.parse(localStorage.getItem('storedTitle')) // Get the value from local storage 
        Description = JSON.parse(localStorage.getItem('storedDescription'))// Get the value from local storage 
        //Display the data 
        displaydata = `<tr><td>${count}</td>
                          <td>${Title[count - 1]}</td>
                          <td>${Description[count - 1]}</td>
                          </tr>
                          `;
        sum += displaydata;
                        //   <td>
                        //       <button onclick="deleteItems()">
                        //           Delete
                        //           </button>
                        //           </td>
        items.innerHTML = sum;
    }

    else {
        alert("Please Enter a value in Title or Description")
    }

}

let deleteItems = () => {
    // let dele = Title[0];
    // let dele2 = Description[0];
    // console.log("help")
    // console.log(Title[0],Description[0])
    localStorage.removeItem('storedTitle');
    localStorage.removeItem('storedDescription');
}

let cleared = () => {
    // localStorage.clear()
    location.reload();
}
let abouts = document.getElementById('abouts')
abouts.style.display = "none";

let about = () => {
    abouts = document.getElementById('abouts');
    abouts.style.display = "block"
}

let closed = () => {
    abouts = document.getElementById('abouts');
    abouts.style.display = "none"
}

