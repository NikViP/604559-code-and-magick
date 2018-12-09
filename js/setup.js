'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var getWizards = function () {
  var firstName = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var surName = ['даМарья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

  var catalogWizards = [];

  for (var i = 0; i <= 3; i++) {
    var currentWizard = {};

    var firstNameRand = Math.floor(Math.random() * firstName.length);
    var surNameRand = Math.floor(Math.random() * surName.length);
    var coatColorRand = Math.floor(Math.random() * coatColor.length);
    var eyesColorRand = Math.floor(Math.random() * eyesColor.length);

    currentWizard.name = firstName[firstNameRand] + ' ' + surName[surNameRand];
    currentWizard.coatColor = coatColor[coatColorRand];
    currentWizard.eyesColor = eyesColor[eyesColorRand];
    catalogWizards[i] = currentWizard;
  }

  return catalogWizards;
};

var createWizard = function (wizardObj) {
  var wizard = document.querySelector('#similar-wizard-template').cloneNode(true).;
  console.log(wizard.querySelector('.wizard-coat'));
  wizard.getElementsByClassName('setup-similar-label').innerHTML = wizardObj.name;
  wizard.querySelector('.wizard-coat').style.cssText = 'fill: ' + wizardObj.coatColor + ';';
  wizard.getElementsByClassName('wizard-eyes').style.fill = wizardObj.eyesColor;

  return wizard;
};

var renderWizards = function (wizardsArr) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < wizardsArr.length; i++) {
    fragment.appendChild(createWizard(wizardsArr[i]));
  }

  document.querySelector('.setup-similar-list').appendChild(fragment);
};

var wizards = getWizards();

renderWizards(wizards);

/*
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
*/
