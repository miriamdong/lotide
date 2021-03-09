const titleCase = (str) => {
  return str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

module.exports = titleCase;

// titleCase("this is an example");
// titleCase("test");
// titleCase("i r cool");
// titleCase("WHAT HAPPENS HERE");
// titleCase("");
// titleCase("A");