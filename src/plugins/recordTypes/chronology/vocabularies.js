import { defineMessages } from 'react-intl';

export default {
  fieldcollection: {
    messages: defineMessages({
      name: {
        id: 'vocab.chronology.fieldcollection.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Field Collection',
      },
      collectionName: {
        id: 'vocab.chronology.fieldcollection.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Field Collection Chronologies',
      },
      itemName: {
        id: 'vocab.chronology.fieldcollection.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Field Collection Chronology',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(field_collection)',
    },
  },
};
