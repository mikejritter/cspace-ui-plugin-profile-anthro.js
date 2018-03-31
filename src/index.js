/* global cspaceUIPluginProfileAnthropology */
/* The cspaceUIPluginProfileAnthropology global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/anthro.css';

module.exports = () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '1500',
  pluginInfo: {
    cspaceUIPluginProfileAnthropology: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileAnthropology.name',
          defaultMessage: 'Anthropology profile',
        },
      }),
      version: cspaceUIPluginProfileAnthropology.packageVersion,
    },
  },
  plugins: plugins.map(plugin => plugin()),
});
