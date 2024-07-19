import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the Tufte extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'Tufte:plugin',
  description: 'A JupyterLab theme inspired by tufte-css',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension Tufte is activated!');
    const style = 'Tufte/index.css';

    manager.register({
      name: 'Tufte',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
