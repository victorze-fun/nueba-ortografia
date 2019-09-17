$('#submit').addEventListener('click', e => {
  e.preventDefault()

  let input = $('#input').value

  $('#output').innerHTML = `
    <textarea readonly spellcheck="false" cols="60" rows="10">
      ${simplifySpelling(input)}
    </textarea>`
});

function $(selector) {
  return document.querySelector(selector)
}

