export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    assocConceptAuthGroupList: {
      assocConceptAuthGroup: {
        assocConcept: {
          [config]: {
            view: {
              props: {
                source: 'concept/activity,concept/associated,concept/material,concept/nomenclature,concept/occasion,concept/archculture',
              },
            },
          },
        },
      },
    },
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
