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

            <Field name="responsibleDepartments">
              <Field name="responsibleDepartment" />
            </Field>
          </Col>

          <Col>
            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>
          </Col>
        </Row>

        <Field name="titleGroupList">
          <Field name="titleGroup">
            <Panel>
              <Row>
                <Col>
                  <Field name="title" />
                  <Field name="titleLanguage" />
                </Col>

                <Col>
                  <Field name="titleType" />

                  <Field name="titleTranslationSubGroupList">
                    <Field name="titleTranslationSubGroup">
                      <Field name="titleTranslation" />
                      <Field name="titleTranslationLanguage" />
                    </Field>
                  </Field>
                </Col>
              </Row>
            </Panel>
          </Field>
        </Field>

        <Field name="objectCategoryGroupList">
          <Field name="objectCategoryGroup">
            <Field name="category" />
            <Field name="categoryCount" />
            <Field name="categoryCountUnit" />
            <Field name="categoryNote" />
          </Field>
        </Field>

        <Field name="objectNameList">
          <Field name="objectNameGroup">
            <Field name="objectNameControlled" />
            <Field name="objectName" />
            <Field name="objectNameCurrency" />
            <Field name="objectNameLevel" />
            <Field name="objectNameSystem" />
            <Field name="objectNameType" />
            <Field name="objectNameLanguage" />
            <Field name="objectNameNote" />
          </Field>
        </Field>

      </Panel>

      <Panel name="desc" collapsible>
        <Field name="colors">
          <Field name="color" />
        </Field>

        <Field name="materialGroupList">
          <Field name="materialGroup">
            <Field name="materialControlled" />
            <Field name="material" />
            <Field name="materialComponent" />
            <Field name="materialComponentNote" />
            <Field name="materialName" />
            <Field name="materialSource" />
          </Field>
        </Field>

        {extensions.dimension.form}

        <Panel name="content" collapsible>
          <Field name="contentConcepts">
            <Field name="contentConcept" />
          </Field>
        </Panel>

        <Panel name="bio" collapsible collapsed>
          {extensions.naturalhistory.collectionobject.form.taxonomicIdentGroupList}
        </Panel>
      </Panel>

      <Panel name="collect" collapsible collapsed>
        <Row>
          <Col>
            <Field name="fieldCollectionDateGroup" />

            <Field name="fieldCollectors">
              <Field name="fieldCollector" />
            </Field>
          </Col>
        </Row>
      </Panel>

      <Panel name="prod" collapsible>
        <Row>
          <Col>
            <Field name="objectProductionDateGroupList">
              <Field name="objectProductionDateGroup" />
            </Field>

            <Field name="objectProductionPlaceGroupList">
              <Field name="objectProductionPlaceGroup">
                <Field name="objectProductionPlace" />
                <Field name="objectProductionPlaceRole" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="objectProductionPeopleGroupList">
              <Field name="objectProductionPeopleGroup">
                <Field name="objectProductionPeople" />
                <Field name="objectProductionPeopleRole" />
              </Field>
            </Field>

            <Field name="objectProductionPersonGroupList">
              <Field name="objectProductionPersonGroup">
                <Field name="objectProductionPerson" />
                <Field name="objectProductionPersonRole" />
              </Field>
            </Field>

            <Field name="objectProductionOrganizationGroupList">
              <Field name="objectProductionOrganizationGroup">
                <Field name="objectProductionOrganization" />
                <Field name="objectProductionOrganizationRole" />
              </Field>
            </Field>
          </Col>
        </Row>
      </Panel>

      <Panel name="hist" collapsible>
        <Field name="objectHistoryNote" />
      </Panel>

      <Panel name="owner" collapsible>
        <Field name="ownersContributionNote" />
      </Panel>

      <Panel name="viewer" collapsible>
        <Field name="viewersContributionNote" />
      </Panel>

      <Panel name="reference" collapsible collapsed>
        <Field name="publishedRelatedLinkGroupList">
          <Field name="publishedRelatedLinkGroup">
            <Field name="relatedLink" />
            <Field name="descriptiveTitle" />
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
