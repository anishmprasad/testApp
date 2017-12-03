import React from 'react';
import { render } from 'react-dom';
import secretStore from './store/secretStore';
import Root from './containers/common/Root';
import configureStore from './store/configureStore';
import {loadCss} from './performance-utils/css-loader.js'
import 'babel-polyfill';
const store = configureStore();
const rootElement = document.getElementById('root');
// let analytics = require('react-segment');

// if(process.env.NODE_ENV == 'development'){
//     analytics && analytics.default.load("fqemPgbQE7Q4PgTbTxKE2XPh7bx4ZzMr");
// }else if(process.env.NODE_ENV == 'staging1' || process.env.NODE_ENV == 'staging2' || process.env.NODE_ENV == 'staging3' ){
//     analytics && analytics.default.load("srjKXmAegdYHsiFTcOOr2mUdC2mM2gwV");
// }else if(process.env.NODE_ENV == 'preprod'){
//     analytics && analytics.default.load("u1RarONUE8OC63M7odGEENtIEBEyNaQu");
// }else if(process.env.NODE_ENV == 'production'){
//     analytics && analytics.default.load("zcSPewKVEfHk8MH7Y9oHEj8RIZ1N9Ipm");
// }
//loadCss()
render( <Root store={store} />, rootElement );
