import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    inputTable: {
      ...extensions.locality.messages.inputTable,
      ...extensions.naturalhistory.collectionobject.messages.inputTable,
    },
    panel: {
      ...defineMessages({
        bio: {
          id: 'panel.collectionobject.bio',
          defaultMessage: 'Biological Information',
        },
        locality: {
          id: 'panel.collectionobject.locality',
          defaultMessage: 'Locality Information',
        },
      }),
      ...extensions.culturalcare.collectionobject.messages.panel,
      ...extensions.nagpra.collectionobject.messages.panel,
    },
  };
};
