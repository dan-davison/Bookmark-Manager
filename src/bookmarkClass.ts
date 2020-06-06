export class bookmark {
    title: string;
    icon: string;
    favourite: boolean = false;
    url: string;

    constructor(Title: string, Icon: string, Url: string) {
        this.title = Title;
        this.icon = Icon
        this.url = Url
    }
}

export class bookmarkElement {
    BM: bookmark;
    element: HTMLElement | null = null;
    private root: HTMLElement | null = null;

    constructor(bm: bookmark){
        this.BM = bm;
    }

    private deleteClicked() {
        if (this.element == null || this.root == null) return;
        this.root?.removeChild(this.element)
    }


    spawn(root: HTMLElement) {
        this.root = root
        this.element = document.createElement("div");
        this.element.classList.add("bookmarkDiv");

        let title = document.createElement("h1")
        title.appendChild(document.createTextNode(this.BM.title))
        title.classList.add("h1");

        this.element.appendChild(document.createElement("br"))

        let url = document.createElement("p")
        url.appendChild(document.createTextNode(this.BM.url))
        url.classList.add("p")


        let button = document.createElement("button")
        button.appendChild(document.createTextNode("☆"))
        button.onclick = () => this.deleteClicked()
        button.classList.add("favouriteButton");

        this.element.appendChild(title)
        this.element.appendChild(url)
        this.element.appendChild(button)
        root.appendChild(this.element)

    }
}