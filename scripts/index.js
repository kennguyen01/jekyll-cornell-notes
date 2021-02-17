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
const buildFieldsets = (names) => {
  let div = document.querySelector('.container');

  for (let i = 0; i < names.length; i++) {
    let field = document.createElement('fieldset');
    field.setAttribute('data-name', `${names[i]}`);
    div.appendChild(field);
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
 * Write directory name as legend to fieldset
 */
const writeLegends = () => {
  let fields = document.querySelectorAll('fieldset');
  
  for (let i = 0; i < fields.length; i++) {
    let field = fields[i];

    let name = field.getAttribute('data-name');
    name = writeTitle(name);
    
    let legend = document.createElement('legend');
    legend.textContent = name;
    field.appendChild(legend);
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

    // Last array item is fieldset
    let field = elems.pop();

    // Add links to section
    for (let j = 0; j < elems.length; j++) {
      field.appendChild(elems[j]);
    }
  }
}

(function() {
  // Group all links under their directory section
  let dataNames = getNames();
  buildFieldsets(dataNames);
  writeLegends();
  groupLinks(dataNames);
})();