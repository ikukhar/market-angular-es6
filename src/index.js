import angular from 'angular';
import 'angular-ui-router';
import 'angular-local-storage';
import 'ng-dialog';
import 'spin.js';
import 'angular-spinner';
import 'angular-ui-notification';

import routesConfig from './routes';
import run from './run';
import ServicesModule from 'modules/services.module.js';
import ComponentsModule from 'modules/components.module.js';

import './index.scss';
import 'bootstrap-loader';

export const app = 'app';

angular
  .module(app, ['ui.router',
                'LocalStorageModule',
                'ngDialog',
                'angularSpinner',
                'ui-notification',
                ServicesModule,
                ComponentsModule])
  .config(routesConfig)
  .config(usSpinnerConfigProvider => {
    usSpinnerConfigProvider.setDefaults({radius: 60});
  })
  .run(run);
