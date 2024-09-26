import corenagpraForm from './corenagpra';
import defaultForm from './default';
import publicForm from './public';
import secondarynagpraForm from './secondarynagpra';

export default (configContext) => ({
  corenagpra: corenagpraForm(configContext),
  default: defaultForm(configContext),
  public: publicForm(configContext),
  secondarynagpra: secondarynagpraForm(configContext),
  timebased: {
    disabled: true,
  },
});
