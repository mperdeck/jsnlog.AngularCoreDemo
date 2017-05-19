
(function (global) {
  System.config({
    
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'https://unpkg.com/@angular/core@2.0.2/bundles/core.umd.js',
      '@angular/common': 'https://unpkg.com/@angular/common@2.0.2/bundles/common.umd.js',
      '@angular/compiler': 'https://unpkg.com/@angular/compiler@2.0.2/bundles/compiler.umd.js',
      '@angular/platform-browser': 'https://unpkg.com/@angular/platform-browser@2.0.2/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'https://unpkg.com/@angular/platform-browser-dynamic@2.0.2/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'https://unpkg.com/@angular/http@2.0.2/bundles/http.umd.js',
      '@angular/router': 'https://unpkg.com/@angular/router@3.0.2/bundles/router.umd.js',
      '@angular/forms': 'https://unpkg.com/@angular/forms@2.0.2/bundles/forms.umd.js',
      '@angular/upgrade': 'https://unpkg.com/@angular/upgrade@2.0.2/bundles/upgrade.umd.js',

      // other libraries
      'rxjs':                      'https://unpkg.com/rxjs@5.0.0-rc.1',
      'angular-in-memory-web-api': 'https://unpkg.com/angular-in-memory-web-api',
      'ts':                        'https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
      'typescript':                'https://unpkg.com/typescript@2.0.2/lib/typescript.js',

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
