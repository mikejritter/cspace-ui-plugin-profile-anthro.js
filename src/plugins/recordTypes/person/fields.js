export default (configContext) => {
  const {
    OptionPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:persons_common': {
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
