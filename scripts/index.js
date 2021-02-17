/**
 * Get directory name from anchor links
 * 
 * @return {Array} names
 */
const getNames = () => {
  let links = document.querySelectorAll('a');
  
  let names = []
  for (let i = 0; i < links.length; i++) {
    let name = links[i].getAttribute('data-name');
    
    if (!names.includes(name)) {
      names.push(name);
    }
  }
  return names;
}

/**
 * Create a section for each directory name
 * 
 * @param {Array} names 
 */
const buildSections = (names) => {
  let div = document.querySelector('.container');

  for (let i = 0; i < names.length; i++) {
    let sec = document.createElement('section');
    sec.setAttribute('data-name', `${names[i]}`);
    div.appendChild(sec);
  }
}

/**
 * Helper function to process string for writeHeader
 * 
 * @param {string} str
 */
const writeTitle = (str) => {

  // Capitalize string
  function titleCase(txt) {
    return txt.charAt().toUpperCase() + txt.substr(1).toLowerCase();
  }

  if (!str.includes('-')) {
    // One word string
    return titleCase(str);
  } else {
    // String with multiple words
    let strArr = str.split('-');
    
    let titleArr = [];
    for (let i = 0; i < strArr.length; i++) {
      let title = titleCase(strArr[i]);
      titleArr.push(title);
    }
    return titleArr.join(' ');
  }
}

/**
 * Add header to each section
 */
const writeHeader = () => {
  let secs = document.querySelectorAll('section');
  
  for (let i = 0; i < secs.length; i++) {
    let sec = secs[i];

    let name = sec.getAttribute('data-name');
    name = writeTitle(name);
    
    let header = document.createElement('h2');
    header.textContent = name;
    sec.appendChild(header);
  }
}

/**
 * Group all links with data attribute under same section
 * 
 * @param {Array} names 
 */
const groupLinks = (names) => {
  for (let i = 0; i < names.length; i++) {
    // Convert NodeList to Array
    let elems = Array.from(document.querySelectorAll(`[data-name='${names[i]}']`));

    // Add links to section
    let sec = elems.pop();
    for (let j = 0; j < elems.length; j++) {
      sec.appendChild(elems[j]);
    }
  }
}

(function() {
  // Group all links under their directory section
  let dataNames = getNames();
  buildSections(dataNames);
  writeHeader();
  groupLinks(dataNames);
})();