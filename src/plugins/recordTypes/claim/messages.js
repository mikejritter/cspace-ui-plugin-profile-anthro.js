import { defineMessages } from 'react-intl';

export default {
  record: defineMessages({
    name: {
      id: 'record.claim.name',
      description: 'The name of the claim record type.',
      defaultMessage: 'Claim',
    },
    collectionName: {
      id: 'record.claim.collectionName',
      description: 'The name of a collection of records of the claim type.',
      defaultMessage: 'Claims',
    },
  }),
  panel: defineMessages({
    info: {
      id: 'panel.claim.info',
      defaultMessage: 'Claim Information',
    },
  }),
};
