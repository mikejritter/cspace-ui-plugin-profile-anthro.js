import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    inputTable: {
      ...defineMessages({
        mortuaryTreatment: {
          id: 'inputTable.collectionobject.mortuaryTreatment',
          defaultMessage: 'Mortuary treatment',
        },
        behrensmeyer: {
          id: 'inputTable.collectionobject.behrensmeyer',
          defaultMessage: 'Behrensmeyer stage',
        },
      }),
      ...extensions.locality.messages.inputTable,
      ...extensions.nagpra.collectionobject.messages.inputTable,
      ...extensions.naturalhistory.collectionobject.messages.inputTable,
    },
    panel: {
      ...defineMessages({
        bio: {
          id: 'panel.collectionobject.bio',
          defaultMessage: 'Biological Information',
        },
        commingledRemains: {
          id: 'panel.collectionobject.commingledRemains',
          defaultMessage: 'Commingled Remains',
        },
        locality: {
          id: 'panel.collectionobject.locality',
          defaultMessage: 'Locality Information',
        },
      }),
      ...extensions.culturalcare.collectionobject.messages.panel,
      ...extensions.locality.messages.panel,
      ...extensions.nagpra.collectionobject.messages.panel,
    },
  };
};
