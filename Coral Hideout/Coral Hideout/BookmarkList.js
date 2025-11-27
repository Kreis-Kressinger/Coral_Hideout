/*
+       Pallette: 
+        #FFF9EC
+        #FFDCCC
+        #FCB1A6
+        #FB6376
+        #5D2A42
*/
    
// make it so that pressing enter presses the add button
var urlInput = document.getElementById("bookmarkUrl");
urlInput.addEventListener("keypress", function(event) {

    if(event.key === "Enter") 
        {
            event.preventDefault();
            document.getElementById("addButton").click();
        }
})


function bookmarkAdding()
{
    
    // Check if string is empty, don't add element to list if it is
    let userURL = document.getElementById("bookmarkUrl").value;
    if(userURL != "")
     {
    
    // Create a list element and add it to the list
        const bookmarkList = document.getElementById("bookmarkList");
        bookmarkList.setAttribute("id", "bookmarkList");
        bookmarkList.setAttribute("class", "bookmarkList")
        let bookmarkHolder = document.createElement("li");
        let bookmarkURL = document.createElement("a");
        bookmarkList.appendChild(bookmarkHolder);
        bookmarkHolder.appendChild(bookmarkURL);
    
    // Check if the user URL had "https"
        let hasHttps = userURL.includes("https://www.");
        if(hasHttps == !true)
            {
                userURL = ("https://www." + userURL);
            }
    
    // Add the URL to the list element
        bookmarkURL.href= userURL;
        bookmarkURL.innerHTML= "&nbsp;" + userURL + "&nbsp;";
        bookmarkURL.className="bookmarks"
        bookmarkURL.setAttribute("target", "_blank")
        document.getElementById("bookmarkUrl").value = "";

    // Create a delete button next to the element
        let deleteButton = document.createElement("button");
        bookmarkHolder.appendChild(deleteButton, bookmarkHolder);
        deleteButton.className="deleteButtons";
        deleteButton.innerText="X";
        deleteButton.addEventListener("click",()=> deleteParent(deleteButton));
    }
}

// Deletes the parent of the delete button (the li element)
function deleteParent(deleteButton)
{
    deleteButton.parentElement.remove();
}


// function to hide the list on button click and move the button to the left
function hideList() {
    let bookmarkHolder = document.getElementById("bookmarkList");
    let bookmarkURL = document.getElementById("bookmarkUrl");
    bookmarkHolder.classList.toggle("invisible");
    hideButton = document.getElementById("hideButton");
    addButton = document.getElementById("addButton");
    
    if(hideButton.value === "0")
        {
            hideButton.innerText = "show list";
            hideButton.value = "1";
            addButton.classList.toggle("invisible");
            bookmarkURL.classList.toggle("invisible");
            hideButton.classList.toggle("hideButton");
            hideButton.classList.toggle("hideButtonLeft");
            
        }
    else
        {
            hideButton.classList.toggle("hideButton");
            hideButton.classList.toggle("hideButtonLeft");
            hideButton.innerText = "hide list";
            hideButton.value = "0";
            addButton.classList.toggle("invisible");
            bookmarkURL.classList.toggle("invisible");
        }
}
