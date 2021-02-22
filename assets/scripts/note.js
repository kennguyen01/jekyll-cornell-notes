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
 * Move external links from note to nav
 */
const moveLinks = () => {
  let links = document.querySelectorAll('.note a');
  if (links) {
    let navBar = document.querySelector('.nav-links');

    for (let i = 0; i < links.length; i++) {
      navBar.appendChild(links[i]);
    }
  }
}

/**
 * Move blockquote from note to summary
 */
const moveSum = () => {
  let block = document.querySelector('blockquote');
  if (block) {
    let sum = document.querySelector('.summary');
    sum.appendChild(block);
  }
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
    
    outerTag.appendChild(link);
    link.innerText = idea.textContent;
    // Add dash before strong/em links
    if (outerTag.tagName == 'STRONG' || outerTag.tagName == 'EM') {
      link.innerText = '- ' + link.innerText;
    } else {
      // Add forward slashes before headers
      let num = +(outerTag.tagName[1]);
      link.innerText = '/'.repeat(num) + ' ' + link.innerText;
    }
    ideaArea.appendChild(outerTag);
  }
}

/**
 * Highlight text in note when user clicks on idea link
 */
const animateLinks = () => {
  let idea = document.querySelectorAll('.idea a');

  idea.forEach(link => {
    link.addEventListener('click', () => {
      let id = link.href.split('#')[1];
      let ele = document.querySelector(`#${id}`);

      // Change background color
      ele.animate([
        // Keyframes
        { background: '#f4f9f9' },
        { background: 'yellow' },
        { background: '#f4f9f9' }
      ], 2000);
    });
  });
}

(function() {
  // Toggle collapsible areas
  ideaToggle();
  sumToggle();

  // Move external links to nav
  moveLinks();

  // Move blockquote to summary area
  moveSum();

  // Create idea links
  addId();
  ideaLinks();
  animateLinks();
})();