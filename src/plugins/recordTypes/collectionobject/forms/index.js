import defaultForm from './default';
import publicForm from './public';

export default (configContext) => ({
  default: defaultForm(configContext),
  public: publicForm(configContext),
});
