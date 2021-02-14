/**
 * Toggle idea collapsible
 */
const ideaToggle = () => {
  let idea = document.querySelector('.idea');
  let note = document.querySelector('.note');
  let ideaBtn = document.querySelector('.idea-btn')
  
  ideaBtn.addEventListener('click', () => {
    idea.classList.toggle('idea-small');
    note.classList.toggle('note-large');
  }) 
};

/**
 * Toggle summary collapsible
 */
const sumToggle = () => {
  let inner = document.querySelector('.inner-container');
  let sum = document.querySelector('.summary');
  let sumBtn = document.querySelector('.sum-btn');
  
  sumBtn.addEventListener('click', () => {
    inner.classList.toggle('inner-container-large');
    sum.classList.toggle('summary-small');
  })
};

/**
 * Move blockquote from note to summary
 */
const writeSum = () => {
  let block = document.querySelector('blockquote');
  let sum = document.querySelector('.summary');
  sum.appendChild(block);
};

/**
 * Create id attribute from text and add it to strong/em elements
 */
const addId = () => {
  let elems = document.querySelectorAll('strong, em');

  for (let i = 0; i < elems.length; i++) {
    let elem = elems[i];
    let id = elem.textContent.toLowerCase();

    // Check if text has more than one word
    if (id.includes(' ')) {
      id = id.split(' ').join('-');
    }
    elem.id = id;
  }
};

/**
 * Create idea links to headers and important texts in note area
 */
const ideaLinks = () => {
  let ideas = document.querySelectorAll('h2, h3, h4, h5, h6, strong, em');
  let ideaArea = document.querySelector('.idea');

  for (let i = 0; i < ideas.length; i++) {
    let idea = ideas[i];

    // Wrap link with original tag
    let outerTag = document.createElement(`${idea.tagName.toLowerCase()}`)
    let link = document.createElement('a');

    link.href = `#${idea.id}`;
    link.innerText = idea.textContent;

    outerTag.appendChild(link);
    ideaArea.appendChild(outerTag);
  }
}

(function() {
  // Toggle collapsible areas
  ideaToggle();
  sumToggle();

  // Display blockquote in summary area
  writeSum();

  // Display links in idea area
  addId();
  ideaLinks();
})();