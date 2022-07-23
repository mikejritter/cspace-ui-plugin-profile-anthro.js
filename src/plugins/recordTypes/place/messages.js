export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    panel: {
      ...extensions.nagpra.place.messages.panel,
    },
  };
};
