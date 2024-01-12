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
        defaultMessage: 'Function',
      },
      collectionName: {
        id: 'vocab.concept.ethfilecode.collectionName',
        description: 'The name of a collection of records from the ethfilecode concept vocabulary.',
        defaultMessage: 'Functions',
      },
      itemName: {
        id: 'vocab.concept.ethfilecode.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Function',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(ethfilecode)',
    },
  },
  // TODO: As of cspace 5.2/cspace-ui 3.0.0, nomenclature is in core, so this can eventually be
  // removed from the anthro override. Keeping it in for now, to maintain compatibility with older
  // versions.
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
        defaultMessage: 'Nomenclature Concepts',
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
