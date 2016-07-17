import config from './config';
import init from './init';
// import {routerConfig, interceptor, beforeEach, afterEach} from './config/router';
import {routes, redirect} from './routes';

const { routerSettings } = config;
const { routerConfig, interceptors, beforeEach, afterEach } = routerSettings;

init(config);

import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import './transitions';

Vue.use(Router);
Vue.use(Resource);

import App from './App';

const router = new Router(routerConfig);
Vue.http.interceptors.push(interceptors);
router.beforeEach(beforeEach);
router.afterEach(afterEach);
router.map(routes);
router.redirect(redirect);

router.start(App, 'app');
