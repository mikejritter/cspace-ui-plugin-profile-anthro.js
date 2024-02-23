import fields from './fields';

export default () => (configContext) => ({
  extensions: {
    associatedAuthority: {
      fields: fields(configContext),
    },
  },
});
