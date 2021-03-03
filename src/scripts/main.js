'use strict';

function convertToNumber(string) {
  return +(string.replace(/\$|,/g, ''));
};

function sortList(list) {
  return [...list].sort((current, next) => (
    convertToNumber(next.dataset.salary)
      - convertToNumber(current.dataset.salary)
  ));
}

const employees = document.querySelectorAll('li');
const sortedEmployees = sortList(employees);

const listWithEmployees = document.querySelector('ul');

sortedEmployees.forEach(function(value) {
  listWithEmployees.append(value);
});
