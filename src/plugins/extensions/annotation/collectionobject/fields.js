import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    'ns2:collectionobjects_annotation': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/collectionobject/domain/annotation',
        },
      },
      annotationGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        annotationGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_annotation.annotationGroup.name',
                defaultMessage: 'Annotation',
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
          annotationType: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_annotation.annotationType.fullName',
                  defaultMessage: 'Annotation type',
                },
                name: {
                  id: 'field.collectionobjects_annotation.annotationType.name',
                  defaultMessage: 'Type',
                },
              }),
              view: {
                type: TermPickerInput,
                props: {
                  source: 'annotationtype',
                },
              },
            },
          },
          annotationNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_annotation.annotationNote.fullName',
                  defaultMessage: 'Annotation note',
                },
                name: {
                  id: 'field.collectionobjects_annotation.annotationNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          annotationDate: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_annotation.annotationDate.fullName',
                  defaultMessage: 'Annotation date',
                },
                name: {
                  id: 'field.collectionobjects_annotation.annotationDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          annotationAuthor: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_annotation.annotationAuthor.fullName',
                  defaultMessage: 'Annotation author',
                },
                name: {
                  id: 'field.collectionobjects_annotation.annotationAuthor.name',
                  defaultMessage: 'Author',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared',
                },
              },
            },
          },
        },
      },
    },
  };
};
