/* global cspaceUIPluginProfileAnthropology */
/* The cspaceUIPluginProfileAnthropology global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import annotationExtensionPlugin from 'cspace-ui-plugin-ext-annotation';
import culturalCareExtensionPlugin from 'cspace-ui-plugin-ext-culturalcare';
import naturalHistoryExtensionPlugin from 'cspace-ui-plugin-ext-naturalhistory';
import taxonRecordPlugin from 'cspace-ui-plugin-record-taxon';
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
  plugins: [
    annotationExtensionPlugin(),
    culturalCareExtensionPlugin(),
    naturalHistoryExtensionPlugin(),
    taxonRecordPlugin(),
    ...plugins.map(plugin => plugin()),
  ],
});
