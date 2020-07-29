import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

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
                id: 'field.collectionobjects_nagpra.graveAssocCode.name',
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
      nagpraDetermGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraDetermGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_nagpra.nagpraDetermGroup.name',
                defaultMessage: 'Cultural determination',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          nagpraDetermCulture: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_nagpra.nagpraDetermCulture.fullName',
                  defaultMessage: 'Cultural determination culture',
                },
                name: {
                  id: 'field.collectionobjects_nagpra.nagpraDetermCulture.name',
                  defaultMessage: 'Culture',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/archculture',
                },
              },
            },
          },
          nagpraDetermType: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_nagpra.nagpraDetermType.fullName',
                  defaultMessage: 'Cultural determination type',
                },
                name: {
                  id: 'field.collectionobjects_nagpra.nagpraDetermType.name',
                  defaultMessage: 'Type',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'nagpradetermtype',
                },
              },
            },
          },
          nagpraDetermBy: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_nagpra.nagpraDetermBy.fullName',
                  defaultMessage: 'Cultural determination by',
                },
                name: {
                  id: 'field.collectionobjects_nagpra.nagpraDetermBy.name',
                  defaultMessage: 'By',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared,organization/local,organization/shared',
                },
              },
            },
          },
          nagpraDetermNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_nagpra.nagpraDetermNote.fullName',
                  defaultMessage: 'Cultural determination note',
                },
                name: {
                  id: 'field.collectionobjects_nagpra.nagpraDetermNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
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
      nagpraReportFiled: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            fullName: {
              id: 'field.collectionobjects_nagpra.nagpraReportFiled.fullName',
              defaultMessage: 'NAGPRA report filed',
            },
            name: {
              id: 'field.collectionobjects_nagpra.nagpraReportFiled.name',
              defaultMessage: 'Report filed',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      nagpraReportFiledBy: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.collectionobjects_nagpra.nagpraReportFiledBy.fullName',
              defaultMessage: 'NAGPRA report filed by',
            },
            name: {
              id: 'field.collectionobjects_nagpra.nagpraReportFiledBy.name',
              defaultMessage: 'By',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local,organization/local',
            },
          },
        },
      },
      nagpraReportFiledDate: {
        [config]: {
          dataType: DATA_TYPE_STRUCTURED_DATE,
          messages: defineMessages({
            fullName: {
              id: 'field.collectionobjects_nagpra.nagpraReportFiledDate.fullName',
              defaultMessage: 'NAGPRA report filed date',
            },
            name: {
              id: 'field.collectionobjects_nagpra.nagpraReportFiledDate.name',
              defaultMessage: 'Date',
            },
          }),
          view: {
            type: StructuredDateInput,
          },
        },
        ...extensions.structuredDate.fields,
      },
    },
  };
};
