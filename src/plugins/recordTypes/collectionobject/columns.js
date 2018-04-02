import { defineMessages } from 'react-intl';

export default () => ({
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
      width: 450,
    },
  },
});
