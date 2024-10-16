import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Col>
            <Field name="objectNumber" />

            <Field name="collection" />

            <Field name="descriptionLevel" />

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>

            <Field name="inventoryStatusList">
              <Field name="inventoryStatus" />
            </Field>
          </Col>

          <Col>
            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>

            <Field name="computedCurrentLocation" />
          </Col>
        </Row>

        <Field name="objectCategoryGroupList" subpath="ns2:collectionobjects_objectcategory_extension">
          <Field name="objectCategoryGroup">
            <Field name="category" />
            <Field name="categoryCount" />
            <Field name="categoryCountUnit" />
            <Field name="categoryNote" />
          </Field>
        </Field>

        <Field name="objectCountGroupList">
          <Field name="objectCountGroup">
            <Field name="objectCount" />
            <Field name="objectCountType" />
            <Field name="objectCountCountedBy" />
            <Field name="objectCountDate" />
            <Field name="objectCountNote" />
          </Field>
        </Field>

        <Field name="annotationGroupList" subpath="ns2:collectionobjects_annotation">
          <Field name="annotationGroup">
            <Panel>
              <Row>
                <Field name="annotationType" />
                <Field name="annotationDate" />
                <Field name="annotationAuthor" />
              </Row>
              <Field name="annotationNote" />
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="collect" collapsible collapsed>
        <Row>
          <Col>
            <Field name="fieldCollectionSites">
              <Field name="fieldCollectionSite" />
            </Field>

            <Field name="fieldCollectionDateGroup" />

            <Field name="fieldCollectors">
              <Field name="fieldCollector" />
            </Field>
          </Col>

          <Col>
            <Field name="fieldCollectionPlaces">
              <Field name="fieldCollectionPlace" />
            </Field>

            <Field name="fieldLocVerbatim" subpath="ns2:collectionobjects_anthro" />

            <Field name="fieldCollectionEvents" subpath="ns2:collectionobjects_anthro">
              <Field name="fieldCollectionEvent" />
            </Field>
          </Col>
        </Row>
      </Panel>

      {extensions.nagpra.collectionobject.form}
      {extensions.culturalcare.collectionobject.form}

    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.collectionobject.corenagpra.name',
      defaultMessage: 'Core NAGPRA',
    },
  }),
  template: template(configContext),
});
