require('../scss/app.scss');
require('./data-behaviours/mobile_menu');

import { resolveComponent } from './react/map';
import { initAll } from "./react/init";

initAll(resolveComponent);

