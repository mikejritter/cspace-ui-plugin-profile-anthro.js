import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:collectionobjects_nagpra': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/collectionobject/domain/nagpra',
        },
      },
      nagpraInventoryNames: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraInventoryName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_nagpra.nagpraInventoryName.name',
                defaultMessage: 'NAGPRA inventory',
              },
            }),
            repeating: true,
            view: {
              type: TermPickerInput,
              props: {
                source: 'nagprainventory',
              },
            },
          },
        },
      },
      nagpraCategories: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraCategory: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_nagpra.nagpraCategory.name',
                defaultMessage: 'Museum NAGPRA category determination',
              },
            }),
            repeating: true,
            view: {
              type: TermPickerInput,
              props: {
                source: 'nagpracategory',
              },
            },
          },
        },
      },
      graveAssocCodes: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        graveAssocCode: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_nagpra.graveAssocCodes.name',
                defaultMessage: 'Grave association code',
              },
            }),
            repeating: true,
            view: {
              type: TermPickerInput,
              props: {
                source: 'graveassoccode',
              },
            },
          },
        },
      },
      nagpraCulturalDeterminations: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraCulturalDetermination: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_nagpra.nagpraCulturalDetermination.name',
                defaultMessage: 'NAGPRA cultural determination',
              },
            }),
            repeating: true,
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
      },
      repatriationNotes: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        repatriationNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_nagpra.repatriationNote.name',
                defaultMessage: 'Repatriation note',
              },
            }),
            repeating: true,
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
      },
    },
  };
};
