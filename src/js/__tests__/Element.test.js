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

  test('should show and hide popover on click', () => {
    // Initial state
    let popoverElement = document.querySelector('.popover');
    expect(popoverElement).toBeFalsy();

    // Click to show popover
    button.dispatchEvent(new MouseEvent('click'));
    popoverElement = document.querySelector('.popover');
    expect(popoverElement).toBeTruthy();

    // Click again to hide popover
    button.dispatchEvent(new MouseEvent('click'));
    popoverElement = document.querySelector('.popover');
    expect(popoverElement).toBeFalsy();
  });
});
