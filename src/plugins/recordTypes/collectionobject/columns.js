import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      title: {
        disabled: true,
      },
      objectName: {
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.objectName',
            defaultMessage: 'Object name',
          },
        }),
        order: 20,
        sortBy: 'collectionobjects_common:objectNameList/0/objectName',
        width: 450,
      },
      objectNameControlled: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.objectNameControlled',
            defaultMessage: 'Controlled object name',
          },
        }),
        order: 25,
        sortBy: 'collectionobjects_common:objectNameList/0/objectNameControlled',
        width: 450,
      },
    },
    narrow: {
      title: {
        disabled: true,
      },
      objectName: {
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.narrow.objectName',
            defaultMessage: 'Object name',
          },
        }),
        order: 20,
        sortBy: 'collectionobjects_common:objectNameList/0/objectName',
        width: 450,
      },
    },
  };
};
