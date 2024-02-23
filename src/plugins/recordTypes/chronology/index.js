import fields from './fields';
import vocabularies from './vocabularies';

export default () => (configContext) => ({
  recordTypes: {
    chronology: {
      fields: fields(configContext),
      vocabularies,
    },
  },
});
