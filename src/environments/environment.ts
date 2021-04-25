// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// import { Environment } from '../app/product.model';

export const environment = {
  production: false,
  uri_api: 'https://platzi-store.herokuapp.com/products/',
  firebaseConfig: {
    apiKey: 'AIzaSyB9T2IUw02SM0dZVikX44YQ5LGLF4hOJzk',
    authDomain: 'tienda-platzi.firebaseapp.com',
    projectId: 'tienda-platzi',
    storageBucket: 'tienda-platzi.appspot.com',
    messagingSenderId: '900212765359',
    appId: '1:900212765359:web:4f09649e9d00e6dfde5a5a',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
