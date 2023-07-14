export default class Popover{
  constructor(element){
    this.element = element;
    this.title = element.getAttribute('title');
    this.content = element.getAttribute('data-content');
    this.popover = this.createPopover();
  }

  createPopover() {
    const popover = document.createElement('div');
    popover.classList.add('popover');

    const popoverTitle = document.createElement('div');
    popoverTitle.textContent = this.title;
    popoverTitle.classList.add('popover-title');
    popover.appendChild(popoverTitle);

    const popoverContent = document.createElement('div');
    popoverContent.textContent = this.content;
    popoverContent.classList.add('popover-content');
    popover.appendChild(popoverContent);

    return popover;
  }

  positionPopover(){
    this.element.parentElement.appendChild(this.popover);
    const {offsetTop: top, offsetLeft: left, offsetWidth: width } = this.element;
    this.popover.style.top = `${top - this.popover.offsetHeight - 5}px`;
    this.popover.style.left = `${left + width / 2 - this.popover.offsetWidth / 2}px`
  }

  removePopover() {
    const currentPopover = document.querySelector('.popover');
    if (currentPopover) {
      currentPopover.remove();
    }
  }
}