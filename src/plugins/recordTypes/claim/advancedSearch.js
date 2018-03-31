export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:claims_common/claimNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:claims_common/claimantGroupList/claimantGroup/claimFiledBy',
      },
      {
        op: OP_EQ,
        path: 'ns2:claims_common/claimantGroupList/claimantGroup/claimFiledOnBehalfOf',
      },
      {
        op: OP_RANGE,
        path: 'ns2:claims_common/claimReceivedGroupList/claimReceivedGroup/claimReceivedDate',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
