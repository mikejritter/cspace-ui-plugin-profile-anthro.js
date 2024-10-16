import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
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

            <Field name="otherNumberList">
              <Field name="otherNumber">
                <Field name="numberValue" />
                <Field name="numberType" />
              </Field>
            </Field>

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

        {extensions.dimension.form}

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
      </Panel>

      <Panel name="collect" collapsible collapsed>
        <Row>
          <Col>
            <Field name="fieldCollectionSites">
              <Field name="fieldCollectionSite" />
            </Field>

            <Field name="fieldCollectionDateGroup" />

            <Field name="fieldCollectionMethods">
              <Field name="fieldCollectionMethod" />
            </Field>

            <Field name="fieldCollectionPlaces">
              <Field name="fieldCollectionPlace" />
            </Field>
            <Field name="fieldLocVerbatim" subpath="ns2:collectionobjects_anthro" />

            <Field name="fieldCollectionSources">
              <Field name="fieldCollectionSource" />
            </Field>

            <Field name="fieldCollectors">
              <Field name="fieldCollector" />
            </Field>
          </Col>

          <Col>
            <Field name="fieldCollectionNumber" />

            <Field name="fieldColEventNames">
              <Field name="fieldColEventName" />
            </Field>

            <Field name="fieldCollectionEvents" subpath="ns2:collectionobjects_anthro">
              <Field name="fieldCollectionEvent" />
            </Field>

            <Field name="fieldCollectionFeature" />
            <Field name="fieldCollectionNote" />
          </Col>
        </Row>
      </Panel>

      <Panel name="prod" collapsible collapsed>
        <Row>
          <Col>
            <Field name="objectProductionDateGroupList">
              <Field name="objectProductionDateGroup" />
            </Field>

            <Field name="objectProductionEras">
              <Field name="objectProductionEra" />
            </Field>

            <Field name="techniqueGroupList">
              <Field name="techniqueGroup">
                <Field name="technique" />
                <Field name="techniqueType" />
              </Field>
            </Field>

            <Field name="objectProductionPlaceGroupList">
              <Field name="objectProductionPlaceGroup">
                <Field name="objectProductionPlace" />
                <Field name="objectProductionPlaceRole" />
              </Field>
            </Field>

            <Field name="objectProductionReasons">
              <Field name="objectProductionReason" />
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

            <Field name="objectProductionNote" />
          </Col>
        </Row>
      </Panel>

      {extensions.nagpra.collectionobject.form}
      {extensions.culturalcare.collectionobject.form}

      <Panel name="desc" collapsible collapsed>
        <Row>
          <Col>
            <Field name="forms">
              <Field name="form" />
            </Field>

            <Row>
              <Field name="copyNumber" />
              <Field name="editionNumber" />
            </Row>
          </Col>

          <Col>
            <Field name="styles">
              <Field name="style" />
            </Field>

            <Field name="colors">
              <Field name="color" />
            </Field>

            <Field name="apparelSizes">
              <Field name="apparelSize" />
            </Field>
          </Col>
        </Row>

        <Field name="physicalDescription" />
        <Field name="distinguishingFeatures" />

        <Field name="objectComponentGroupList">
          <Field name="objectComponentGroup">
            <Field name="objectComponentName" />
            <Field name="objectComponentInformation" />
          </Field>
        </Field>

        <Panel name="bio" collapsible collapsed>
          <Cols>
            <Col>
              <Row>
                <Field name="sex" />
                <Field name="phase" />
              </Row>
            </Col>

            <Col>
              <InputTable name="age">
                <Field name="ageQualifier" />
                <Field name="age" />
                <Field name="ageUnit" />
              </InputTable>
            </Col>
          </Cols>

          {extensions.naturalhistory.collectionobject.form.taxonomicIdentGroupList}
        </Panel>

        <Panel name="commingledRemains" collapsible collapsed>
          <Field name="commingledRemainsGroupList" subpath="ns2:collectionobjects_anthro">
            <Field name="commingledRemainsGroup">
              <Panel>
                <Cols>
                  <Col>
                    <Field name="minIndividuals" />
                    <Field name="bone" />
                    <Field name="side" />
                  </Col>

                  <Col>
                    <Row>
                      <Field name="count" />
                      <Field name="dentition" />
                    </Row>

                    <Field name="sex" />
                    <Field name="ageRange" />
                  </Col>
                </Cols>

                <Field name="mortuaryTreatmentGroupList">
                  <Field name="mortuaryTreatmentGroup">
                    <Field name="mortuaryTreatment" />
                    <Field name="mortuaryTreatmentNote" />
                  </Field>
                </Field>

                <InputTable name="behrensmeyer">
                  <Field name="behrensmeyerSingleLower" />
                  <Field name="behrensmeyerUpper" />
                </InputTable>

                <Field name="commingledRemainsNote" />
              </Panel>
            </Field>
          </Field>
        </Panel>

        <Panel name="content" collapsible collapsed>
          <Field name="contentDescription" />

          <Row>
            <Col>
              <Field name="contentLanguages">
                <Field name="contentLanguage" />
              </Field>

              <Field name="contentActivities">
                <Field name="contentActivity" />
              </Field>

              <Field name="contentConcepts">
                <Field name="contentConcept" />
              </Field>

              <Field name="contentDateGroup" />

              <Field name="contentPositions">
                <Field name="contentPosition" />
              </Field>

              <Field name="contentObjectGroupList">
                <Field name="contentObjectGroup">
                  <Field name="contentObject" />
                  <Field name="contentObjectType" />
                </Field>
              </Field>
            </Col>

            <Col>
              <Field name="contentPeoples">
                <Field name="contentPeople" />
              </Field>

              <Field name="contentPersons">
                <Field name="contentPerson" />
              </Field>

              <Field name="contentPlaces">
                <Field name="contentPlace" />
              </Field>

              <Field name="contentScripts">
                <Field name="contentScript" />
              </Field>

              <Field name="contentOrganizations">
                <Field name="contentOrganization" />
              </Field>

              <Field name="contentEventNameGroupList">
                <Field name="contentEventNameGroup">
                  <Field name="contentEventName" />
                  <Field name="contentEventNameType" />
                </Field>
              </Field>

              <Field name="contentEvents">
                <Field name="contentEvent" />
              </Field>

              <Field name="contentOtherGroupList">
                <Field name="contentOtherGroup">
                  <Field name="contentOther" />
                  <Field name="contentOtherType" />
                </Field>
              </Field>
            </Col>
          </Row>

          <Field name="contentNote" />
        </Panel>

        <Panel name="textInscript" collapsible collapsed>
          <Field name="textualInscriptionGroupList">
            <Field name="textualInscriptionGroup">
              <Panel>
                <Field name="inscriptionContent" />

                <Row>
                  <Col>
                    <Field name="inscriptionContentInscriber" />
                    <Field name="inscriptionContentLanguage" />
                    <Field name="inscriptionContentDateGroup" />
                  </Col>

                  <Col>
                    <Field name="inscriptionContentPosition" />
                    <Field name="inscriptionContentScript" />
                    <Field name="inscriptionContentType" />
                    <Field name="inscriptionContentMethod" />
                  </Col>
                </Row>

                <Field name="inscriptionContentInterpretation" />
                <Field name="inscriptionContentTranslation" />
                <Field name="inscriptionContentTransliteration" />
              </Panel>
            </Field>
          </Field>
        </Panel>

        <Panel name="nonTextInscript" collapsible collapsed>
          <Field name="nonTextualInscriptionGroupList">
            <Field name="nonTextualInscriptionGroup">
              <Panel>
                <Field name="inscriptionDescription" />

                <Row>
                  <Col>
                    <Field name="inscriptionDescriptionInscriber" />
                    <Field name="inscriptionDescriptionDateGroup" />
                  </Col>

                  <Col>
                    <Field name="inscriptionDescriptionPosition" />
                    <Field name="inscriptionDescriptionType" />
                    <Field name="inscriptionDescriptionMethod" />
                  </Col>
                </Row>

                <Field name="inscriptionDescriptionInterpretation" />
              </Panel>
            </Field>
          </Field>
        </Panel>
      </Panel>

    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.collectionobject.secondarynagpra.name',
      defaultMessage: 'Secondary NAGPRA',
    },
  }),
  template: template(configContext),
});
