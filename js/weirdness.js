// Nothing is weird here, if you think a little bit more about it
// but it seems to be

// Null is an Object
typeof null // => 'object'

// Weird decimal calculation
0.1 + 0.2 // -> 0.30000000000000004

// Despite this, null is not an instance of an Object
null instanceof Object // => false

// "string" is not an instance of String
"string" instanceof String

// NaN is a number
typeof NaN          // -> 'Number'

// NaN is not considered equal to itself
NaN === NaN         // -> false

// Array With No Keys == False
new Array() == false // -> true

// big integer numbers
9999999999999999    // -> 10000000000000000

//
[]+[]               // -> ""
[]+{}               // -> "[object Object]"
{}+[]               // -> "{}+[]"
{}+{}               // -> NaN

// Comparisons
3>2>1               // -> false

// Boolean arithmetic
true+true===2       // -> true
true-true===0       // -> true
true===1            // -> false

// Something really strange
(!+[]+[]+![]).length  // -> 9
// because:
// +[]      -> 0
// !+[]     -> true
// !+[]+[]  -> 'true'
// etc.
