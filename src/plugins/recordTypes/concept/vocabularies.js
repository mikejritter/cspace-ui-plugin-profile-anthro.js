import { defineMessages } from 'react-intl';

export default {
  archculture: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.archculture.name',
        description: 'The name of the archculture concept vocabulary.',
        defaultMessage: 'Archaeological Culture',
      },
      collectionName: {
        id: 'vocab.concept.archculture.collectionName',
        description: 'The name of a collection of records from the archculture concept vocabulary.',
        defaultMessage: 'Archaeological Cultures',
      },
      itemName: {
        id: 'vocab.concept.archculture.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Archaeological Culture',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(archculture)',
    },
  },
  ethculture: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.ethculture.name',
        description: 'The name of the ethculture concept vocabulary.',
        defaultMessage: 'Ethnographic Culture',
      },
      collectionName: {
        id: 'vocab.concept.ethculture.collectionName',
        description: 'The name of a collection of records from the ethculture concept vocabulary.',
        defaultMessage: 'Ethnographic Cultures',
      },
      itemName: {
        id: 'vocab.concept.ethculture.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Ethnographic Culture',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(ethculture)',
    },
  },
  ethfilecode: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.ethfilecode.name',
        description: 'The name of the ethfilecode concept vocabulary.',
        defaultMessage: 'Ethnographic File Code',
      },
      collectionName: {
        id: 'vocab.concept.ethfilecode.collectionName',
        description: 'The name of a collection of records from the ethfilecode concept vocabulary.',
        defaultMessage: 'Ethnographic File Codes',
      },
      itemName: {
        id: 'vocab.concept.ethfilecode.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Ethnographic File Code',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(ethfilecode)',
    },
  },
  nomenclature: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.nomenclature.name',
        description: 'The name of the nomenclature concept vocabulary.',
        defaultMessage: 'Nomenclature',
      },
      collectionName: {
        id: 'vocab.concept.nomenclature.collectionName',
        description: 'The name of a collection of records from the nomenclature concept vocabulary.',
        defaultMessage: 'Nomenclature',
      },
      itemName: {
        id: 'vocab.concept.nomenclature.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Nomenclature',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(nomenclature)',
    },
  },
};
