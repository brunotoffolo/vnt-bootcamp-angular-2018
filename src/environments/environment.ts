// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB502hWAv5-7GbKsYjgUJ_KideZpabq9BY',
    authDomain: 'vnt-shopping-app.firebaseapp.com',
    databaseURL: 'https://vnt-shopping-app.firebaseio.com',
    projectId: 'vnt-shopping-app',
    storageBucket: 'vnt-shopping-app.appspot.com',
    messagingSenderId: '38210104148'
  }
};
