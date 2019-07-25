import { defineMessages } from 'react-intl';

export default {
  panel: defineMessages({
    modification: {
      id: 'panel.osteology.modification',
      defaultMessage: 'Cultural Modification Information',
    },
    cranialDeform: {
      id: 'panel.osteology.cranialDeform',
      defaultMessage: 'Cranial Deformation Information',
    },
    trepanation: {
      id: 'panel.osteology.trepanation',
      defaultMessage: 'Trepanation Information',
    },
  }),
  inputTable: defineMessages({
    trepanationDimension: {
      id: 'inputTable.osteology.trepanationDimension',
      defaultMessage: 'Dimension (mm)',
    },
  }),
};
