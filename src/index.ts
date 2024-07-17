import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the tufte_theme_js extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'tufte_theme_js:plugin',
  description: 'A JupyterLab theme derived from tufte-css.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension tufte_theme_js is activated!');
    const style = 'tufte_theme_js/index.css';

    manager.register({
      name: 'tufte_theme_js',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
