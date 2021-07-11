/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
const html = document.querySelector('html');
const checkbox = document.querySelector('input[name=theme]');

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  bgColor: getStyle(html, '--bg-color'),
  colorText: getStyle(html, '--color-text'),
  bgGout: getStyle(html, '--bg-gout'),
  colorGout: getStyle(html, '--color-gout'),
};

const darkMode = {
  bgColor: '#353440',
  colorText: '#FFF',
  bgGout: '#FF4F4F',
  colorGout: '#FFF',
};

const transformKey = key => `--${key.replace(/([A-Z])/, '-$1').toLowerCase()}`;

const changeColors = colors => {
  Object.keys(colors).map(key =>
    html.style.setProperty(transformKey(key), colors[key]),
  );
};

checkbox.addEventListener('change', ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
});
