import Element from '../Element';

describe('Element class', () => {
  let container;
  let button;
  let element;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    button = document.createElement('button');
    button.setAttribute('title', 'Popover title');
    button.setAttribute('data-content', 'Popover content');
    container.appendChild(button);

    element = new Element(button);
    element.init();
  });

  afterEach(() => {
    container.remove();
  });

  test('should show popover on click', () => {
    button.click();
    const popoverElement = document.querySelector('.popover');
    expect(popoverElement).toBeTruthy();
  });

  test('should hide popover on blur', () => {
    button.focus();
    button.blur();
    const popoverElement = document.querySelector('.popover');
    expect(popoverElement).toBeFalsy();
  });
});
