

(function() {
  let idea = document.querySelector('.idea');
  let note = document.querySelector('.note');
  let ideaBtn = document.querySelector('.idea-btn')
  
  ideaBtn.addEventListener('click', () => {
    idea.classList.toggle('idea-small');
    note.classList.toggle('note-large');
  })

  let inner = document.querySelector('.inner-container');
  let sum = document.querySelector('.summary');
  let sumBtn = document.querySelector('.sum-btn');

  sumBtn.addEventListener('click', () => {
    inner.classList.toggle('inner-container-large');
    sum.classList.toggle('summary-small');
  })
})();