// Regular Expression
// goto website regexpr.com

// regular exp are the patterns used to find in a string

const regex = /very/g;
// g means globaly present
const text = "Harry is a very very nice awsome nice very boy "
// it will change only first very
console.log(text.replace("very","VERY"));

// it will change all the very 
console.log(text.replace(regex,"VERY"));

// goto website regexpr.com
// goto this site very good and imp site for regex

// . used for one char before not a new line
// it also consider a space
// eg .arry = harry parry marry etc
// just visit the site and check the exp list
// just visit its cheatsheet
// you gett all things their

