import { bookmark, bookmarkElement } from "./bookmarkClass";

let bookmarkContainer = document.getElementById("bookmarkContainer") as HTMLDivElement | null;

let myButton = document.getElementById("myButton") as HTMLButtonElement | null;
if (myButton == null || bookmarkContainer == null) {
    alert("Button not found.");
} 
else {
    
    myButton.onclick = function () {
        if(myButton == undefined || bookmarkContainer == null) return;
        let BM = new bookmark("Example Title", "Icon", "https://insertURLhere");
        let bmElement = new bookmarkElement(BM);
        bmElement.spawn(bookmarkContainer);
        BM.favourite = true;
    }
}