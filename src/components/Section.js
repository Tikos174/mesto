class Section{
    constructor({renderer}, selectorContainer){
        this._renderer = renderer;
        console.log()
        this._container = document.querySelector(selectorContainer)
    }

    addItem (element) {
        this._container.prepend(element)
    }

    renderItems(cards){
        cards.forEach(item => {
            this._renderer(item)
        });
    }
}

export {Section};
