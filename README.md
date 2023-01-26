# understanding-typescript

## TypeScript command 

compile in watch mode: 
    tsc filename.ts -w 

compile the entire project
    run tsc --init (generate tsconfig.json file at root) once, then instead of run tsc filename.ts, just run tsc at root 

Including and excluding files
    NOTE: files listed in exclude will serve as filter for include, hence, compilation will be files in include - exclude 

Strict compilation: to enable all strict compilation, set "strict": true 

Code quality check: 

Resources: 
tsconfig Docs: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
Compiler Config Docs: https://www.typescriptlang.org/docs/handbook/compiler-options.html
VS Code TS Debugging: https://code.visualstudio.com/docs/typescript/typescript-debugging
More on Advanced Types: https://www.typescriptlang.org/docs/handbook/advanced-types.html
More on Generics: https://www.typescriptlang.org/docs/handbook/generics.html
JavaScript Modules (Overview): https://medium.com/computed-comparisons/commonjs-vs-amd-vs-requirejs-vs-es6-modules-2e814b114a0b
Class transformer: https://github.com/typestack/class-transformer
Class validator: https://github.com/typestack/class-validator