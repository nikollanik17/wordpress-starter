'use strict';

// ---------- Image / css assets ------------

require.context('./assets/', true, /\.(svg|png|jpe?g)$/);
require('./assets/styles/main.scss');

// -------------- Lazy load -----------------

/*
 * import LazyImageLoader from './assets/scripts/components/lazyimageloader.js';
 * LazyImageLoader.init();
 */

// ----------- Custom scripts ---------------

require('./assets/scripts/components/accordion.js');
require('./assets/scripts/components/slider.js');
require('./assets/scripts/components/map.js');
