import Popover from "./popover";

export default class Element {
    constructor(element) {
        this.element = element;
        this.popover = new Popover(element);
    }

    init() {
        this.element.addEventListener('click', this.onClick.bind(this));
        this.element.addEventListener('blur', this.onBlur.bind(this));
    }

    onClick(e) {
        e.preventDefault();
        const currentPopover = document.querySelector('.popover');

        if(currentPopover && currentPopover.querySelector('.popovertitle').textContent === this.element.getAttribute('title')){
            this.popover.removePopover();
        } else {
            this.popover.positionPopover();
        }
    }

    onBlur() {
        this.popover.removePopover();
    }
}
