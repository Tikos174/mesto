class Section{
    constructor({ items, renderer}, selectorContainer){
        this._items = items;
        this._renderer = renderer;
        this._selectorContainer = document.querySelector(selectorContainer)
    }

    addItem (element) {
        this._selectorContainer.prepend(element)
    }

    renderItems(){
        this._items.forEach(item => {
            this._renderer(item)
        });
    }
}

export {Section};
