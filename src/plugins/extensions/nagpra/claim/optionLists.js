import { defineMessages } from 'react-intl';

export default {
  nagpraNoticeDateTypes: {
    values: [
      'begin',
      'end',
    ],
    messages: defineMessages({
      begin: {
        id: 'option.nagpraNoticeDateTypes.begin',
        defaultMessage: 'period begins',
      },
      end: {
        id: 'option.nagpraNoticeDateTypes.end',
        defaultMessage: 'period ends',
      },
    }),
  },
};
