import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
    formatTimestamp,
  } = configContext.formatHelpers;

  return {
    default: {
      claimNumber: {
        messages: defineMessages({
          label: {
            id: 'column.claim.default.claimNumber',
            defaultMessage: 'Claim number',
          },
        }),
        order: 10,
        sortBy: 'claims_common:claimNumber',
        width: 250,
      },
      claimFiledOnBehalfOf: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.claim.default.claimFiledOnBehalfOf',
            defaultMessage: 'Filed on behalf of',
          },
        }),
        order: 20,
        sortBy: 'claims_common:claimantGroupList/0/claimFiledOnBehalfOf',
        width: 400,
      },
      updatedAt: {
        formatValue: formatTimestamp,
        messages: defineMessages({
          label: {
            id: 'column.claim.default.updatedAt',
            defaultMessage: 'Updated',
          },
        }),
        order: 30,
        sortBy: 'collectionspace_core:updatedAt',
        width: 150,
      },
    },
  };
};
