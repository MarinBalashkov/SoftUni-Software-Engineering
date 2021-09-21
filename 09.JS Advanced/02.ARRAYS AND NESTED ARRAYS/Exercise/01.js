const solve = (arr, dilimiter) => {
    return arr.join(dilimiter);
}

console.log(solve(['One', 
'Two', 
'Three', 
'Four', 
'Five'], 
'-'
));

console.log(solve(['How about no?', 
'I',
'will', 
'not', 
'do', 
'it!'], 
'_'
));