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
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(ethfilecode)',
    },
  },
};
