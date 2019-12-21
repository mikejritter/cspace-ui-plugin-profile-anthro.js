import claim from './claim';
import collectionobject from './collectionobject';

export default () => (configContext) => ({
  extensions: {
    nagpra: {
      claim: claim(configContext),
      collectionobject: collectionobject(configContext),
    },
  },
});
