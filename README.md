# contentful-extension-reactjs-starter

This project is a starter to create a Contentful UI Extension. 
This starter is developped with ReactJS + Redux + styled-components and use SDK UI Extensions. 

Are also integrated:
Babel, ESLint, Jest.

## Requirements

__To run on local :__ 

Npm package + Node.js v10.19.0 or newer

You must also be authenticated on Contentful to run on local.

If you haven't already, you can follow Contentful documentation to login with Contentful CLI :  https://www.contentful.com/developers/docs/tutorials/cli/authentication/


__To preview result of build on Contentful Platform__


You must have :
* created a Contentful account
* created an organization and a space 
* created a content model
* created a field on Contentful Model where you will choose as Appearance the extension you will run on local.
This type of field must be "Object" to be compatible with the "field types" of this UI Extension starter. 


If you haven't already, you can go to https://www.contentful.com/help/contentful-101/ to follow steps 1, 2, 3 and 4 of the Contentful guide.



## Quick start

__To run on local :__ 

1 - Clone project on your local machine

2 - Install dependencies
```shell
$ npm install
```
3 - Run on local
```shell
$ npm run start
```
This command will build the app from the source files (`/src`) into the output
`/build` folder. As soon as the initial build completes, it will start the
Node.js server :
> [http://localhost:1234/](http://localhost:1234/) — Node.js server

__To preview result of build on Contentful Platform__

1 - Create new extension : 
* go to Settings > Extensions 
* click on button Add Extension
* complete configuration of the new extension with : 

    Field types : Object
    
    Hosting : Self-hosted (src)
    
    Self-hosted URL : http://localhost:1234
    
2 - Choose extension as appearance for field : 
* go to the configuration of your Content Model
* select the field where your want to use the extension and go on his settings
* on apperance, choose your new extension

3 - Create Content : 
* go to Content and create content corresponding to your content model
* go on
* you can see all fields, among with the field with the extension running


## More

To fix the source code for syntax errors and potential issues run:

```shell
$ yarn run linter-fix
```

To launch tests:

```shell
$ npm run test          # Run tests with Jest
$ npm run test:watch    # Launch unit test runner and start watching for changes
```
