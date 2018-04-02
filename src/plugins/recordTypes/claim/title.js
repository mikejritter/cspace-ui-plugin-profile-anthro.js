export default configContext => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const common = getPart(data, 'claims_common');

  if (!common) {
    return '';
  }

  return common.get('claimNumber');
};
