`This repo aims to help people write JavaScript and consequently TypeScript code by providing a single source examples/snippets of the two respective languages.
Key idea here is for this to be the first port of call to answer questions, rather than just googling.` 

- TypeScript is just JavaScript with static type checking. 
- Developers can add types to JavaScript code to make "typesafe" at compile time. This does not guarantee type safetey at runtime however. 
Say for example we write a function and in TypeScript we say that this function takes in single string parameter, if we then wrote another function in typescript which called that function and passed in an integer then we would get a compilation error pop up in our editor - but if we actually ran this code it there is nothing stopping an integer being passed into this function. 
There is the illusion of true type safety but it is not there, it just makes development such safer - particulalry at scale.
- A crucical first learning is that JavaScript code is TypeScript code just without any types; in fact TypeScript code when ran is actually compiled into JavaScript code; it is then the JavaScript code which actually runs.

## TypeScript and JavaScript learn/cheat sheets 
A large proportion of examples/snippets were taken directly from cheath.sh which is itself an open source cheat sheet, providing examples/snippets across numerous languages/frameworks.
Directories for both [JS](js) and [TS](ts) exist to provide numerous cheat sheats and learnings for the respective languages. Each directory has its own README giving an overview of what is provided in every file.

[TypeScript handbook](https://www.typescriptlang.org/docs/handbook/intro.html) for extra detail or examples.
