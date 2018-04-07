import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    IDGeneratorInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:claims_common',
          },
        },
      },
      ...extensions.core.fields,
      'ns2:claims_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/claim',
          },
        },
        claimNumber: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.claims_common.claimNumber.name',
                defaultMessage: 'Claim number',
              },
            }),
            required: true,
            searchView: {
              type: TextInput,
            },
            view: {
              type: IDGeneratorInput,
              props: {
                source: 'claim',
              },
            },
          },
        },
        claimantGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimantGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.claimantGroup.name',
                  defaultMessage: 'Claimant',
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
            claimFiledBy: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.claims_common.claimFiledBy.name',
                    defaultMessage: 'Filed by',
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
            claimFiledOnBehalfOf: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.claims_common.claimFiledOnBehalfOf.name',
                    defaultMessage: 'On behalf of',
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
            claimantNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.claims_common.claimantNote.name',
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
        claimReceivedGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          claimReceivedGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.claims_common.claimReceivedGroup.name',
                  defaultMessage: 'Claim filed',
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
            claimReceivedDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.claimReceivedDate.fullName',
                    defaultMessage: 'Claim filed date',
                  },
                  name: {
                    id: 'field.claims_common.claimReceivedDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
            claimReceivedNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.claims_common.claimReceivedNote.fullName',
                    defaultMessage: 'Claim filed note',
                  },
                  name: {
                    id: 'field.claims_common.claimReceivedNote.name',
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
      },
      ...extensions.nagpra.claim.fields,
    },
  };
};
