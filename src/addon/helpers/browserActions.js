import common from '@misakey/ui/colors/common';
import isString from 'lodash/isString';
import isInteger from 'lodash/isInteger';

export function log(element) {
  // eslint-disable-next-line no-console
  console.log(element);
}

export function setBadgeBackgroundColor(color) {
  try {
    browser.browserAction.setBadgeBackgroundColor({ color });
  } catch (error) {
    log('Operation not supported by device');
  }
}

export function setBadgeTextColor(color) {
  try {
    browser.browserAction.setBadgeTextColor({ color });
  } catch (error) {
    log('Operation not supported by device');
  }
}

export function setBadgeText(text) {
  try {
    browser.browserAction.setBadgeText({ text });
  } catch (error) {
    log('Operation not supported by device');
  }
}

export function setIcon(path) {
  try {
    browser.browserAction.setIcon({ path });
  } catch (error) {
    log('Operation not supported by device');
  }
}

export function toggleBadgeAndIconOnPaused(paused = false) {
  const color = paused ? common.primary : common.misakey;
  const path = paused ? 'ico/icon-32x32-grey.png' : 'ico/icon-32x32.png';

  setBadgeBackgroundColor(color);
  setIcon(path);
}

/* Helper function used to both reset, increment and show the current value of
* the blocked requests counter for a given tabId.
*/
export const updateActiveRequestsCounter = (tabId, value) => {
  if (tabId === -1 || !(isInteger(value) || isString(value))) { return; }
  setBadgeText(value.toString());
};
