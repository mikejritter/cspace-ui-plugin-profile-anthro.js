export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:chronologies_common': {
        ...extensions.associatedAuthority.fields,
      },
    },
  };
};
