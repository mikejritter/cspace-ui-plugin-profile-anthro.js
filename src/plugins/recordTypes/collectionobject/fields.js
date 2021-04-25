import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_FLOAT,
    DATA_TYPE_INT,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        usageGroupList: {
          usageGroup: {
            usage: {
              [config]: {
                view: {
                  props: {
                    multiline: true,
                  },
                },
              },
            },
            usageNote: {
              [config]: {
                view: {
                  props: {
                    multiline: true,
                  },
                },
              },
            },
          },
        },
        techniqueGroupList: {
          techniqueGroup: {
            techniqueType: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodtechniquetype',
                  },
                },
              },
            },
          },
        },
        objectProductionPlaceGroupList: {
          objectProductionPlaceGroup: {
            objectProductionPlace: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local,place/shared,place/tgn',
                  },
                },
              },
            },
            objectProductionPlaceRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodplacerole',
                  },
                },
              },
            },
          },
        },
        objectProductionPeopleGroupList: {
          objectProductionPeopleGroup: {
            objectProductionPeople: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/archculture,concept/ethculture',
                  },
                },
              },
            },
            objectProductionPeopleRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodpeoplerole',
                  },
                },
              },
            },
          },
        },
        objectProductionPersonGroupList: {
          objectProductionPersonGroup: {
            objectProductionPersonRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodpersonrole',
                  },
                },
              },
            },
          },
        },
        objectProductionOrganizationGroupList: {
          objectProductionOrganizationGroup: {
            objectProductionOrganizationRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'prodorgrole',
                  },
                },
              },
            },
          },
        },

        // Common owner fields are replaced by anthroOwnershipGroup. Hide them from search.

        owners: {
          [config]: {
            searchDisabled: true,
          },
        },
        ownershipDateGroupList: {
          [config]: {
            searchDisabled: true,
          },
        },
        ownershipAccess: {
          [config]: {
            searchDisabled: true,
          },
        },
        ownershipCategory: {
          [config]: {
            searchDisabled: true,
          },
        },
        ownershipPlace: {
          [config]: {
            searchDisabled: true,
          },
        },
        ownershipExchangeMethod: {
          [config]: {
            searchDisabled: true,
          },
        },
        ownershipExchangeNote: {
          [config]: {
            searchDisabled: true,
          },
        },
        ownershipExchangePriceCurrency: {
          [config]: {
            searchDisabled: true,
          },
        },
        ownershipExchangePriceValue: {
          [config]: {
            searchDisabled: true,
          },
        },
      },
      'ns2:collectionobjects_anthro': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/domain/anthro',
          },
        },
        ethnoFileCodes: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          ethnoFileCode: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthro.ethnoFileCode.name',
                  defaultMessage: 'Ethnographic file code',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/ethfilecode',
                },
              },
            },
          },
        },
        anthroOwnershipGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          anthroOwnershipGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_anthro.anthroOwnershipGroup.name',
                  defaultMessage: 'Previous ownership',
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
            anthroOwner: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwner.fullName',
                    defaultMessage: 'Previous owner name',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwner.name',
                    defaultMessage: 'Name',
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
            anthroOwnershipAccess: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipAccess.fullName',
                    defaultMessage: 'Previous ownership access',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipAccess.name',
                    defaultMessage: 'Access',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'ownershipAccessLevels',
                  },
                },
              },
            },
            anthroOwnershipDateGroup: {
              [config]: {
                dataType: DATA_TYPE_STRUCTURED_DATE,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipDateGroup.fullName',
                    defaultMessage: 'Previous ownership date',
                  },
                  groupName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipDateGroup.groupName',
                    defaultMessage: 'Date',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
              ...extensions.structuredDate.fields,
            },
            anthroOwnershipCategory: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipCategory.fullName',
                    defaultMessage: 'Previous ownership category',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipCategory.name',
                    defaultMessage: 'Category',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'ownershipCategories',
                  },
                },
              },
            },
            anthroOwnershipPlace: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPlace.fullName',
                    defaultMessage: 'Previous ownership place',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPlace.name',
                    defaultMessage: 'Place',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local,place/shared',
                  },
                },
              },
            },
            anthroOwnershipMethod: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipMethod.fullName',
                    defaultMessage: 'Previous ownership exchange method',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipMethod.name',
                    defaultMessage: 'Exch. meth.',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'ownershipExchangeMethods',
                  },
                },
              },
            },
            anthroOwnershipPriceCurrency: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPriceCurrency.fullName',
                    defaultMessage: 'Previous ownership exchange price currency',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPriceCurrency.name',
                    defaultMessage: 'Price currency',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'currency',
                  },
                },
              },
            },
            anthroOwnershipPriceAmount: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPriceAmount.fullName',
                    defaultMessage: 'Previous ownership exchange price amount',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipPriceAmount.name',
                    defaultMessage: 'Price amount',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            anthroOwnershipNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipNote.fullName',
                    defaultMessage: 'Previous ownership note',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.anthroOwnershipNote.name',
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
        fieldLocVerbatim: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_anthro.fieldLocVerbatim.name',
                defaultMessage: 'Field collection place (verbatim)',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        commingledRemainsGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          commingledRemainsGroup: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_anthro.commingledRemainsGroup.fullName',
                  defaultMessage: 'Commingled remains',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            minIndividuals: {
              [config]: {
                dataType: DATA_TYPE_INT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.minIndividuals.fullName',
                    defaultMessage: 'Commingled remains min. number of individuals',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.minIndividuals.name',
                    defaultMessage: 'Min. number of individuals',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            bone: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.bone.fullName',
                    defaultMessage: 'Commingled remains bone',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.bone.name',
                    defaultMessage: 'Bone',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            side: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.side.fullName',
                    defaultMessage: 'Commingled remains side',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.side.name',
                    defaultMessage: 'Side',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'bodyside',
                  },
                },
              },
            },
            count: {
              [config]: {
                dataType: DATA_TYPE_INT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.count.fullName',
                    defaultMessage: 'Commingled remains count',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.count.name',
                    defaultMessage: 'Count',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            sex: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.sex.fullName',
                    defaultMessage: 'Commingled remains sex',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.sex.name',
                    defaultMessage: 'Sex',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'sexDeterminations',
                  },
                },
              },
            },
            ageRange: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.ageRange.fullName',
                    defaultMessage: 'Commingled remains age range represented',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.ageRange.name',
                    defaultMessage: 'Age range represented',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'agerange',
                  },
                },
              },
            },
            dentition: {
              [config]: {
                dataType: DATA_TYPE_BOOL,
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.dentition.fullName',
                    defaultMessage: 'Commingled remains dentition present?',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.dentition.name',
                    defaultMessage: 'Dentition present?',
                  },
                }),
                view: {
                  type: CheckboxInput,
                },
              },
            },
            mortuaryTreatmentGroupList: {
              [config]: {
                view: {
                  type: CompoundInput,
                },
              },
              mortuaryTreatmentGroup: {
                [config]: {
                  messages: defineMessages({
                    name: {
                      id: 'field.collectionobjects_anthro.mortuaryTreatmentGroup.name',
                      defaultMessage: 'Mortuary treatment',
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
                mortuaryTreatment: {
                  [config]: {
                    messages: defineMessages({
                      fullName: {
                        id: 'field.collectionobjects_anthro.mortuaryTreatment.fullName',
                        defaultMessage: 'Mortuary treatment',
                      },
                      name: {
                        id: 'field.collectionobjects_anthro.mortuaryTreatment.name',
                        defaultMessage: 'Treatment',
                      },
                    }),
                    view: {
                      type: TermPickerInput,
                      props: {
                        source: 'mortuarytreatment',
                      },
                    },
                  },
                },
                mortuaryTreatmentNote: {
                  [config]: {
                    messages: defineMessages({
                      fullName: {
                        id: 'field.collectionobjects_anthro.mortuaryTreatmentNote.fullName',
                        defaultMessage: 'Mortuary treatment note',
                      },
                      name: {
                        id: 'field.collectionobjects_anthro.mortuaryTreatmentNote.name',
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
            behrensmeyerSingleLower: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.behrensmeyerSingleLower.fullName',
                    defaultMessage: 'Behrensmeyer stage - Single/lower',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.behrensmeyerSingleLower.name',
                    defaultMessage: 'Single/lower',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'behrensmeyer',
                  },
                },
              },
            },
            behrensmeyerUpper: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.behrensmeyerUpper.fullName',
                    defaultMessage: 'Behrensmeyer stage - Upper',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.behrensmeyerUpper.name',
                    defaultMessage: 'Upper',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'behrensmeyer',
                  },
                },
              },
            },
            commingledRemainsNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_anthro.commingledRemainsNote.fullName',
                    defaultMessage: 'Commingled remains note',
                  },
                  name: {
                    id: 'field.collectionobjects_anthro.commingledRemainsNote.name',
                    defaultMessage: 'Note',
                  },
                }),
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
        // FIXME: Locality was added for DRYD-400, but I didn't realize locality was already
        // included by the naturalhistory extension, so the locality fields are duplicated in both
        // collectionobjects_naturalhistory_extension and collectionobjects_anthro.
        ...extensions.locality.fields,
      },
      ...extensions.culturalcare.collectionobject.fields,
      ...extensions.nagpra.collectionobject.fields,
      ...extensions.naturalhistory.collectionobject.fields,
    },
  };
};
