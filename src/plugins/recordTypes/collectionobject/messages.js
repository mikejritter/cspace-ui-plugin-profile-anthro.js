import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    inputTable: extensions.naturalhistory.collectionobject.messages.inputTable,
    panel: {
      ...defineMessages({
        bio: {
          id: 'panel.collectionobject.bio',
          defaultMessage: 'Biological Information',
        },
      }),
      ...extensions.nagpra.collectionobject.messages.panel,
      ...extensions.culturalcare.collectionobject.messages.panel,
    },
  };
};
