/* eslint-disable no-undef */
const buttonHeader = document.querySelector('header button');
const sectionFormDonors = document.querySelector('section.form');

buttonHeader.addEventListener('click', () => {
  sectionFormDonors.classList.toggle('hidden');
});
