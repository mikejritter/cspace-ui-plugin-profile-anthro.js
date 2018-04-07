import fields from './fields';
import form from './form';

export default configContext => ({
  fields: fields(configContext),
  form: form(configContext),
});
