/**
 * @jest-environment jsdom
 */

import Popover from '../popover';

test('popover is rendered', () => {
  const element = document.querySelector('button');
  const popover = new Popover(element);
  popover.showPopover();
  // document.querySelector('.popover')
  expect(document.querySelector('.popover')).toBeTruthy();
});

test('button exists in DOM', () => {
  const element = document.body.querySelector('button');
  expect(element.classList.contains('btn')).toEqual(true);
});
