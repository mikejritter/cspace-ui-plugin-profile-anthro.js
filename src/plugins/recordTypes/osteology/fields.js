import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CheckboxInput,
    CompoundInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_FLOAT,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:osteology_anthropology': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/osteology/domain/anthropology',
          },
        },
        Notes_DentalPathology: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.Notes_DentalPathology.name',
                defaultMessage: 'Dental pathology (incl. alveolar)',
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
        Notes_CranialPathology: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.Notes_CranialPathology.name',
                defaultMessage: 'Cranial bony pathology',
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
        Notes_PostcranialPathology: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.Notes_PostcranialPathology.name',
                defaultMessage: 'Postcranial bony pathology',
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
        Notes_CulturalModifications: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.Notes_CulturalModifications.name',
                defaultMessage: 'Cultural modification',
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
        Notes_NHTaphonomicAlterations: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.Notes_NHTaphonomicAlterations.name',
                defaultMessage: 'Nonhuman taphonomic alteration',
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
        Notes_CuratorialSuffixing: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.Notes_CuratorialSuffixing.name',
                defaultMessage: 'Curatorial suffixing note',
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
        cranialDeformationPresent: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.cranialDeformationPresent.name',
                defaultMessage: 'Is any evidence of cranial deformation present?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        cranialDeformationCategories: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          cranialDeformationCategory: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.osteology_anthropology.cranialDeformationCategory.fullName',
                  defaultMessage: 'Cranial deformation general category',
                },
                name: {
                  id: 'field.osteology_anthropology.cranialDeformationCategory.name',
                  defaultMessage: 'General category',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'cranialdeformationcategory',
                },
              },
            },
          },
        },
        cranialDeformationNote: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.osteology_anthropology.cranialDeformationNote.fullName',
                defaultMessage: 'Cranial deformation comment',
              },
              name: {
                id: 'field.osteology_anthropology.cranialDeformationNote.name',
                defaultMessage: 'Comment',
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
        trepanationPresent: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.osteology_anthropology.trepanationPresent.name',
                defaultMessage: 'Is any evidence of trepanation present?',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        trepanationGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          trepanationGroup: {
            [config]: {
              repeating: true,
              messages: defineMessages({
                name: {
                  id: 'field.osteology_anthropology.trepanationGroup.name',
                  defaultMessage: 'Trepanation',
                },
              }),
              view: {
                type: CompoundInput,
              },
            },
            trepanationLocation: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_anthropology.trepanationLocation.fullName',
                    defaultMessage: 'Trepanation location (bone and side)',
                  },
                  name: {
                    id: 'field.osteology_anthropology.trepanationLocation.name',
                    defaultMessage: 'Location (bone and side)',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            trepanationDimensionMax: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_anthropology.trepanationDimensionMax.fullName',
                    defaultMessage: 'Trepanation dimension max.',
                  },
                  groupName: {
                    id: 'field.osteology_anthropology.trepanationDimensionMax.groupName',
                    defaultMessage: 'Dimension max.',
                  },
                  name: {
                    id: 'field.osteology_anthropology.trepanationDimensionMax.name',
                    defaultMessage: 'Max.',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            trepanationDimensionMin: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_anthropology.trepanationDimensionMin.fullName',
                    defaultMessage: 'Trepanation dimension min.',
                  },
                  groupName: {
                    id: 'field.osteology_anthropology.trepanationDimensionMin.groupName',
                    defaultMessage: 'Dimension min.',
                  },
                  name: {
                    id: 'field.osteology_anthropology.trepanationDimensionMin.name',
                    defaultMessage: 'Min.',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            trepanationTechnique: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_anthropology.trepanationTechnique.fullName',
                    defaultMessage: 'Trepanation technique',
                  },
                  name: {
                    id: 'field.osteology_anthropology.trepanationTechnique.name',
                    defaultMessage: 'Technique',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'trepanationtechnique',
                  },
                },
              },
            },
            trepanationHealing: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_anthropology.trepanationHealing.fullName',
                    defaultMessage: 'Trepanation healing',
                  },
                  name: {
                    id: 'field.osteology_anthropology.trepanationHealing.name',
                    defaultMessage: 'Healing',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'trepanationhealing',
                  },
                },
              },
            },
            trepanationCertainty: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_anthropology.trepanationCertainty.fullName',
                    defaultMessage: 'Trepanation certainty',
                  },
                  name: {
                    id: 'field.osteology_anthropology.trepanationCertainty.name',
                    defaultMessage: 'Certainty',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'trepanationcertainty',
                  },
                },
              },
            },
            trepanationNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.osteology_anthropology.trepanationNote.fullName',
                    defaultMessage: 'Trepanation comment',
                  },
                  name: {
                    id: 'field.osteology_anthropology.trepanationNote.name',
                    defaultMessage: 'Comment',
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
        trepanationGeneralNote: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.osteology_anthropology.trepanationGeneralNote.fullName',
                defaultMessage: 'Trepanation general comment',
              },
              name: {
                id: 'field.osteology_anthropology.trepanationGeneralNote.name',
                defaultMessage: 'General comment',
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
  };
};
