/* global cspaceUIPluginProfileAnthro */
/* The cspaceUIPluginProfileAnthro global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import culturalCareExtensionPlugin from 'cspace-ui-plugin-ext-culturalcare';
import localityExtensionPlugin from 'cspace-ui-plugin-ext-locality';
import naturalHistoryExtensionPlugin from 'cspace-ui-plugin-ext-naturalhistory';
import nagpraExtensionPlugin from 'cspace-ui-plugin-ext-nagpra';
import osteologyRecordPlugin from 'cspace-ui-plugin-record-osteology';
import taxonRecordPlugin from 'cspace-ui-plugin-record-taxon';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/anthro.css';

export default () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '1500',
  pluginInfo: {
    cspaceUIPluginProfileAnthro: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileAnthro.name',
          defaultMessage: 'Anthropology profile',
        },
      }),
      version: cspaceUIPluginProfileAnthro.packageVersion,
    },
  },
  plugins: [
    culturalCareExtensionPlugin(),
    localityExtensionPlugin(),
    naturalHistoryExtensionPlugin(),
    nagpraExtensionPlugin(),
    osteologyRecordPlugin(),
    taxonRecordPlugin(),
    ...plugins.map((plugin) => plugin()),
  ],
});
