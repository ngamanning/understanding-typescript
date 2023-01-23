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

