# Candidate Search
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) 

## User Story

AS AN employer
I WANT a candidate search application
SO THAT I can hire the best candidates

## Description: React + JavaScript + Vite 
My task is to complete a candidate search application that calls the GitHub API and renders data in the browser. The application's API, which retrieves data from the GitHub API, has already been created. It's my task to complete the front end using TypeScript, call the application's API, and then deploy the entire application to Render.
                        
                              `The Snippet Is Shown Below`



The README includes sections for Description, Installation, Usage, License, Contributions, Tests, and Questions.   


## Table of Contents

-Description     
-Installation      
-Usage        
-License      
-Contributing       
-Tests         
-Questions

## Installation
To install and run this application locally, please follow these steps:

Clone the repository via SSH:

`git clone git@github.com:elele20005/React-Portfolio.git`
       
   Navigate to the Project Directory


 command: cd React-Portfolio
 
Install Dependencies    
run `npm create vite`.     
second list of options sellect `JavaScript`       
sellect `React`, `TypeScript`.       
command: cd `React-Portfolio` and run ` npm install`           
run `npm dev/npm run dev` and navigate to the prompted URL to see your app.

**Further customization**   

*Navigate to your `package.json` and modify the scripts object so that it looks like this example*     
`"scripts": {`      
` "dev": "vite",`      
` "start": "vite",`      
`"build": "vite build",`      
` "lint": "eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0",`       
`  "preview": "vite preview"`      
` },`

 *Navigate to the `vite.config.js` file and edit the export object so that it looks like this example*:     
 `export default defineConfig({`        
 `plugins: [react()],`      
 `server: {`       
 `port: 3000,`       
 `open: true`       
 ` }`       
 `})`


## Usage
`Vite` is use to build your portfolio, which will include the following:


A single `Header` component that appears on multiple pages


A single `Navigation` component within the header that will use Link components from `react-router-dom` to conditionally render the different sections of your portfolio


A single `Project` component that will be used multiple times in the Portfolio section


A single `Footer` component that appears on multiple pages

To start the application, run:

command: `npm run dev`

## License
This project is licensed under the MIT license and Apache 2.0. See the LICENSE file for details.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Contribution
Contributions are welcome! Please feel free to submit pull requests.

## Tests
To test the application, run the React + Vite and verify that outputs match expected results based on various inputs and use command: `npm run build` .


## Additional Requirements
This Challenge combines many of the skills covered so far. In addition to the user story and acceptance criteria, we've provided some guidelines to help get started. Your application should use Vite for building your Portfolio. The application will be invoked by using the following command:

command: `npm run build` 

**This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules**
Video Demo Link: https://candidate-search-zcr3.onrender.com/potential-candidates 
## For more questions, please reach out to:
 
- GitHub: https://github.com/elele20005
- Email: ralphconsultant1@gmail.com
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
