export const matches = (arr, str) =>
  arr.filter((element) => {
    return element.toLowerCase() === str.toLowerCase();
  });

export const validateFormFields = (fields) => {
  let isValid = {
    label: true,
    required: true,
    choices: true,
    displayAlpha: true,
    default: true,
    choice: true,
  };
  if (fields.label === "") {
    isValid.label = false;
  }
  if (fields.required === "") {
    isValid.required = false;
  }
  if (fields.default === "") {
    isValid.default = false;
  }
  if (fields.choices.length === 0) {
    isValid.choices = false;
  }
  if (fields.choice.length > 40) {
    isValid.choice = false;
  }
  return isValid;
};
