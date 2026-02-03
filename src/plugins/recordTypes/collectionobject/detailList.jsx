import { defineMessages } from 'react-intl';

const messages = defineMessages({
  concepts: {
    id: 'detailList.tags.collectionobject.concepts',
    description: 'The prefix for content concept tags in the search detail view',
    defaultMessage: `{count, plural,
              one {CONCEPT TAG: }
              other {CONCEPT TAGS: }}`,
  },
  determination: {
    id: 'detailList.tags.collectionobject.determinations',
    description: 'The prefix for NAGPRA determination tags in the search detail view',
    defaultMessage: 'NAGPRA DETERMINATION: {categories}',
  },
});

export default (configContext) => {
  const {
    React,
    Immutable,
  } = configContext.lib;

  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    tags: {
      formatter: (data, { intl, separator = ', ' } = {}) => {
        let concepts;
        const contentConcepts = data.get('contentConcepts');
        if (contentConcepts) {
          let count = 0;
          let conceptTags;
          const contentConcept = contentConcepts.get('contentConcept');
          if (Immutable.List.isList(contentConcept)) {
            conceptTags = contentConcept.filter((concept) => !!concept)
              .map((concept) => formatRefName(concept))
              .join(separator);
            count = contentConcept.size;
          } else {
            conceptTags = formatRefName(contentConcept);
            count = 1;
          }

          concepts = (
            <p>
              <span>{intl.formatMessage(messages.concepts, { count })}</span>
              {conceptTags}
            </p>
          );
        }

        let determinations;
        const nagpraCategories = data.get('nagpraCategories');
        if (nagpraCategories) {
          let nagpraDeterminations;
          const nagpraCategory = nagpraCategories.get('nagpraCategory');
          if (Immutable.List.isList(nagpraCategory)) {
            nagpraDeterminations = nagpraCategory.filter((category) => !!category)
              .map((category) => formatRefName(category))
              .join(separator);
          } else {
            nagpraDeterminations = formatRefName(nagpraCategory);
          }

          determinations = (
            <p>
              <span>
                {intl.formatMessage(messages.determination, {
                  categories: nagpraDeterminations,
                })}
              </span>
            </p>
          );
        }

        return (
          <>
            {concepts}
            {determinations}
          </>
        );
      },
    },
  };
};
