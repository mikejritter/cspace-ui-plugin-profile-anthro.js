import advancedSearch from './advancedSearch';
import columns from './columns';
import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';
import messages from './messages';
import optionLists from './optionLists';
import serviceConfig from './serviceConfig';
import title from './title';

export default () => (configContext) => ({
  idGenerators,
  optionLists: optionLists(configContext),
  recordTypes: {
    claim: {
      serviceConfig,
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
      messages: messages(configContext),
      title: title(configContext),
    },
  },
});
