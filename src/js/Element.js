import Popover from './Popover';

export default class Element {
  constructor(element) {
    this.element = element;
    this.popover = new Popover(element);
    this.isPopoverVisible = false;
  }

  init() {
    this.element.addEventListener('click', this.togglePopover.bind(this));
    document.addEventListener('click', this.onDocumentClick.bind(this));
  }

  togglePopover() {
    if (this.isPopoverVisible) {
      this.popover.removePopover();
    } else {
      this.popover.positionPopover();
    }
    this.isPopoverVisible = !this.isPopoverVisible; // Переключаем флаг видимости popover
  }

  onDocumentClick(e) {
    if (!this.element.contains(e.target)) {
      this.popover.removePopover();
      this.isPopoverVisible = false; // Сбрасываем флаг видимости popover
    }
  }
}
// onClick(e) {
//   e.preventDefault();
//   const currentPopover = document.querySelector('.popover');

//   if (
//     currentPopover &&
//     currentPopover.querySelector('.popovertitle').textContent ===
//     this.element.getAttribute('title')
//   ) {
//     this.popover.removePopover();
//   } else {
//     this.popover.positionPopover();
//   }
// }

// onBlur() {
//   this.popover.removePopover();
// }
// }
