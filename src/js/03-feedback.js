function onInput(evt) {
  const target = evt.target;
  target.nodeName === 'INPUT'
    ? (email = target.value)
    : (message = target.value);
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email,
      message,
    })
  );
  valueObj.email = email;
  valueObj.message = message;
}

// додано перевірку наявності даних в localStorage
if (localStorage.getItem('feedback-form-state')) {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData.email) {
    email = savedData.email;
    input.value = email;
  }
  if (savedData.message) {
    message = savedData.message;
    textarea.value = message;
  }
}

if (localStorage.getItem('feedback-form-state')) {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (savedData.email) {
    email = savedData.email;
    input.value = email;
  }
  if (savedData.message) {
    message = savedData.message;
    textarea.value = message;
  }
}


// input.addEventListener('focus', onFocus);
// textArea.addEventListener('focus', onFocus);

// function onFocus(evt) {
//   if (JSON.parse(localStorage.getItem('feedback-form-state'))) {
//     const localData = JSON.parse(
//       localStorage.getItem('feedback-form-state'))
//     Object.values(localData);
//     if (evt.target === input) {
//       evt.target.value = Object.values(localData)[0];

//     } else {
//       evt.target.value = Object.values(localData)[1]
//     }
//   }
// }