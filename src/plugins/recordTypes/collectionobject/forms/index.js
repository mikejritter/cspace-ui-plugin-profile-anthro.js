import corenagpraForm from './corenagpra';
import defaultForm from './default';
import publicForm from './public';

export default (configContext) => ({
  corenagpra: corenagpraForm(configContext),
  default: defaultForm(configContext),
  public: publicForm(configContext),
  timebased: {
    disabled: true,
  },
});
