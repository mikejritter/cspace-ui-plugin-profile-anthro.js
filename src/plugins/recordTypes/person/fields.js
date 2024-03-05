export default (configContext) => {
  const {
    OptionPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:persons_common': {
        ...extensions.associatedAuthority.fields,
        personTermGroupList: {
          personTermGroup: {
            termType: {
              [config]: {
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'personTermTypes',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
