export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    assocChronologyAuthGroupList: {
      assocChronologyAuthGroup: {
        assocChronology: {
          [config]: {
            view: {
              props: {
                source: 'chronology/era,chronology/event,chronology/fieldcollection',
              },
            },
          },
        },
      },
    },
  };
};
