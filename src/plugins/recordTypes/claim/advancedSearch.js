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

  // TODO: Some nagpra claim extension fields are interleaved with common fields in the record
  // editor form, so they must be individually added here, instead of being able to just insert
  // the advanced search snippet provided by the extension. This can be fixed by moving those
  // fields in the nagpra extension into the common part, which is where they really should have
  // been.

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:claims_common/claimNumber',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:claims_nagpra/nagpraClaimName',
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
        op: OP_EQ,
        path: 'ns2:claims_nagpra/nagpraClaimTypes/nagpraClaimType',
      },
      {
        op: OP_RANGE,
        path: 'ns2:claims_common/claimReceivedGroupList/claimReceivedGroup/claimReceivedDate',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
