import angular from 'angular';

import ServicesModule from 'modules/services.module.js';
import ComponentsModule from 'modules/components.module.js';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';
import 'bootstrap-loader';

export const app = 'app';

angular
  .module(app, ['ui.router', ServicesModule, ComponentsModule])
  .config(routesConfig);
