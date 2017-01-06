import angular from 'angular';
import 'angular-ui-router';
import 'angular-local-storage';
import 'ng-dialog';
import 'spin.js';
import 'angular-spinner';
import 'angular-ui-notification';

import routesConfig from './routes';
import run from './run';
import ServicesModule from './app/modules/services.module';
import ComponentsModule from './app/modules/components.module';
import PagesModule from './app/modules/pages.module';

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
                ComponentsModule,
                PagesModule])
  .config(routesConfig)
  .config(usSpinnerConfigProvider => {
    'ngInject';
    usSpinnerConfigProvider.setDefaults({radius: 60});
  })
  .run(run);
