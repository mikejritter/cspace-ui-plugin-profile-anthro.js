const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    CompoundInput,
  } = configContext.inputComponents;

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

            <Field name="responsibleDepartments">
              <Field name="responsibleDepartment" />
            </Field>

            <Row>
              <Field name="collection" />

              <Col>
                <Field name="namedCollections">
                  <Field name="namedCollection" />
                </Field>
              </Col>
            </Row>

            <Field name="descriptionLevel" />
            <Field name="recordStatus" />
          </Col>

          <Col>
            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>

            <Field name="computedCurrentLocation" />

            <Field name="ethnoFileCodes" subpath="ns2:collectionobjects_anthro">
              <Field name="ethnoFileCode" />
            </Field>

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>

            <Field name="inventoryStatusList">
              <Field name="inventoryStatus" />
            </Field>
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

        <Cols>
          <Col>
            <Field name="assocPeopleGroupList">
              <Field name="assocPeopleGroup">
                <Field name="assocPeople" />
                <Field name="assocPeopleType" />
                <Field name="assocPeopleNote" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="comments">
              <Field name="comment" />
            </Field>
          </Col>
        </Cols>

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

        <Field name="usageGroupList">
          <Field name="usageGroup">
            <Field name="usage" />
            <Field name="usageNote" />
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

      <Panel name="hist" collapsible collapsed>
        <Panel name="assoc" collapsible collapsed>
          <Row>
            <Col>
              <Field name="assocActivityGroupList">
                <Field name="assocActivityGroup">
                  <Field name="assocActivity" />
                  <Field name="assocActivityType" />
                  <Field name="assocActivityNote" />
                </Field>
              </Field>

              <Field name="assocObjectGroupList">
                <Field name="assocObjectGroup">
                  <Field name="assocObject" />
                  <Field name="assocObjectType" />
                  <Field name="assocObjectNote" />
                </Field>
              </Field>

              <Field name="assocConceptGroupList">
                <Field name="assocConceptGroup">
                  <Field name="assocConcept" />
                  <Field name="assocConceptType" />
                  <Field name="assocConceptNote" />
                </Field>
              </Field>

              <Field name="assocCulturalContextGroupList">
                <Field name="assocCulturalContextGroup">
                  <Field name="assocCulturalContext" />
                  <Field name="assocCulturalContextType" />
                  <Field name="assocCulturalContextNote" />
                </Field>
              </Field>

              <Field name="assocOrganizationGroupList">
                <Field name="assocOrganizationGroup">
                  <Field name="assocOrganization" />
                  <Field name="assocOrganizationType" />
                  <Field name="assocOrganizationNote" />
                </Field>
              </Field>

              <Field name="assocPersonGroupList">
                <Field name="assocPersonGroup">
                  <Field name="assocPerson" />
                  <Field name="assocPersonType" />
                  <Field name="assocPersonNote" />
                </Field>
              </Field>

              <Field name="assocPlaceGroupList">
                <Field name="assocPlaceGroup">
                  <Field name="assocPlace" />
                  <Field name="assocPlaceType" />
                  <Field name="assocPlaceNote" />
                </Field>
              </Field>
            </Col>

            <Col>
              <InputTable name="assocEvent">
                <Field name="assocEventName" />
                <Field name="assocEventNameType" />
              </InputTable>

              <Field name="assocEvents">
                <Field name="assocEvent" />
              </Field>

              <Field name="assocEventOrganizations">
                <Field name="assocEventOrganization" />
              </Field>

              <Field name="assocEventPeoples">
                <Field name="assocEventPeople" />
              </Field>

              <Field name="assocEventPersons">
                <Field name="assocEventPerson" />
              </Field>

              <Field name="assocEventPlaces">
                <Field name="assocEventPlace" />
              </Field>

              <Field name="assocEventNote" />

              <Field name="assocDateGroupList">
                <Field name="assocDateGroup">
                  <Field name="assocStructuredDateGroup" />
                  <Field name="assocDateType" />
                  <Field name="assocDateNote" />
                </Field>
              </Field>
            </Col>
          </Row>
        </Panel>

        <Field name="objectHistoryNote" />

        <Field name="anthroOwnershipGroupList" subpath="ns2:collectionobjects_anthro">
          <Field name="anthroOwnershipGroup">
            <Field name="anthroOwner" />
            <Field name="anthroOwnershipDateGroup" />
            <Field name="anthroOwnershipCategory" />
            <Field name="anthroOwnershipPlace" />
            <Field name="anthroOwnershipMethod" />
            <Field name="anthroOwnershipPriceCurrency" />
            <Field name="anthroOwnershipPriceAmount" />
            <Field name="anthroOwnershipNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="owner" collapsible collapsed>
        <Field name="ownersPersonalExperience" />
        <Field name="ownersPersonalResponse" />

        <Field name="ownersReferences">
          <Field name="ownersReference" />
        </Field>

        <Field name="ownersContributionNote" />
      </Panel>

      <Panel name="viewer" collapsible collapsed>
        <Field name="viewersRole" />
        <Field name="viewersPersonalExperience" />
        <Field name="viewersPersonalResponse" />

        <Field name="viewersReferences">
          <Field name="viewersReference" />
        </Field>

        <Field name="viewersContributionNote" />
      </Panel>

      <Panel name="reference" collapsible collapsed>
        <Field name="referenceGroupList">
          <Field name="referenceGroup">
            <Field name="reference" />
            <Field name="referenceNote" />
          </Field>
        </Field>

        <Field name="publishedRelatedLinkGroupList">
          <Field name="publishedRelatedLinkGroup">
            <Field name="relatedLink" />
            <Field name="descriptiveTitle" />
          </Field>
        </Field>
      </Panel>

      <Panel name="locality" collapsible collapsed>
        <CompoundInput subpath="ns2:collectionobjects_anthro">
          {extensions.locality.form}
        </CompoundInput>
      </Panel>

      <Panel name="rights" collapsible collapsed>
        <Field name="rightsGroupList">
          <Field name="rightsGroup">
            <Panel>
              <Row>
                <Field name="rightType" />

                <Row>
                  <Field name="rightBeginDate" />
                  <Field name="rightEndDate" />
                </Row>
              </Row>

              <Field name="rightHolderGroupList">
                <Field name="rightHolderGroup">
                  <Field name="rightHolder" />
                  <Field name="rightHolderContact" />
                </Field>
              </Field>

              <Row>
                <Field name="rightJurisdiction" />
                <Field name="standardizedRightStatement" />
              </Row>

              <Field name="rightStatement" />
              <Field name="rightNote" />
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="rightsin" collapsible collapsed>
        <Field name="rightsInGroupList">
          <Field name="rightsInGroup">
            <Panel>
              <Row>
                <Field name="rightInTypes">
                  <Field name="rightInType" />
                </Field>

                <Row>
                  <Field name="rightInBeginDate" />
                  <Field name="rightInEndDate" />
                </Row>
              </Row>

              <Row>
                <Field name="agreementSent" />
                <Field name="agreementReceived" />
                <Field name="agreementSigned" />
              </Row>

              <Cols>
                <Col>
                  <Field name="rightInRestrictions">
                    <Field name="rightInRestriction" />
                  </Field>
                </Col>

                <Col>
                  <Field name="rightReproductionStatement" />
                </Col>
              </Cols>

              <Field name="rightInNote" />
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
