function showPostItem() {
    const postCont = document.getElementById("AddItemConttt");
    
    postCont.classList.remove("addItemhidden");
}
function hidePostItem() {
    const postCont = document.getElementById("AddItemConttt");

    postCont.classList.add("addItemhidden");
}
function redirect(){
    window.location.href = "listings.html";
}