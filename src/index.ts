import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { requestAPI } from './handler';

/**
 * Initialization data for the jupyterlab-ess extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-ess:plugin',
  description: 'A JupyterLab extension for European Spallation Source VISA instance.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-ess is activated!');

    requestAPI<any>('get-example')
      .then(data => {
        console.log(data);
      })
      .catch(reason => {
        console.error(
          `The jupyterlab_ess server extension appears to be missing.\n${reason}`
        );
      });
  }
};

export default plugin;
