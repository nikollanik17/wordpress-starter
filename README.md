## Compiling
### Available commands
* Install packages
    ```
    npm install
    ```

* Development build
    ```
    npm run build:dev
    ```

* Production build ( Minification, asset compression )
    ```
    npm run build:prod
    ```
    
* Running watcher for real-time error reporting
    ```
    npm run watch
    ```
    
* Installing/Updating node_modules
    ```
    npm run update:packages
    ```

## Main coding style
* 4 spaces for HTML/PHP, CSS, JavaScript etc.
* BEM (Block__Element--Modifier) naming convention ( More at https://en.bem.info/methodology/css/ )
    ```css
    .block {
      &__element {
        &--modifier {
          ...
        }
      }
    }
    ```
* K&R code style
    ```js
    while (x === y) {
       something();
       somethingElse();
    }
    ```
* ESLint enforces several stylistic rules to help with error checking and keeping a consistent style. For example:
    >no-multiple-empty-lines: One empty line is allowed.
    
    >no-unused-vars: Exportable assets must be prefixed with export (e.g. exportImages).
    
    >camelcase: Only camelCase is allowed.
    
    >no-plusplus: Increment/Decrement operators are allowed anywhere.
    
    >comma-dangle: Dangling commas are allowed in object/array lists.   
* Other ESLint rules can be found here: https://github.com/eslint/eslint/tree/master/docs/rules
    
## Required plugins
* Advanced Custom Fields

## Suggested plugins
* Gravity forms
* Regenerate Thumbnails
* WPML (multilingual sites)
* Yoast SEO

## Other
* When using `target="_blank"` to open a link in a new tab, remember to always follow it up with `rel="noopener noreferrer"` for security (anti-phishing) reasons.
* For any hardcoded text, it is highly recommended to use PHP/Wordpress translation functions, such as `__()` or `_e()`. Original text must be english to ensure easy WPML translation.