import { defineMessages } from 'react-intl';
import osteoInventoryInput from 'cspace-ui-plugin-record-osteology/lib/components/osteoInventoryInput';

const messages = defineMessages({
  affirmComplete: {
    id: 'form.osteology.default.affirmComplete',
    defaultMessage: 'By checking this box, I am affirming that the inventory of this individual is complete and that any and all unfilled boxes on this form indicate confirmation that those elements (or portions thereof, or features) are not present for this individual.',
  },
});

const template = (configContext) => {
  const {
    FormattedMessage,
    React,
  } = configContext.lib;

  const OsteoInventoryInput = osteoInventoryInput(configContext);

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

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Row>
          <Field name="InventoryID" />

          <Col />
        </Row>

        <Field name="osteoAgeEstimateGroupList">
          <Field name="osteoAgeEstimateGroup">
            <Field name="osteoAgeEstimateVerbatim" />
            <Field name="osteoAgeEstimateLower" />
            <Field name="osteoAgeEstimateUpper" />
            <Field name="osteoAgeEstimateDateGroup" />
            <Field name="osteoAgeEstimateAnalyst" />
            <Field name="osteoAgeEstimateNote" />
          </Field>
        </Field>

        <Field name="sexDeterminationGroupList">
          <Field name="sexDeterminationGroup">
            <Field name="sexDetermination" />
            <Field name="sexDeterminationDateGroup" />
            <Field name="sexDeterminationAnalyst" />
            <Field name="sexDeterminationNote" />
          </Field>
        </Field>

        <Panel name="inventory" collapsible collapsed>
          <OsteoInventoryInput />
        </Panel>

        <Row>
          <Field name="NotesOnElementInventory" />

          <Col>
            <Field name="InventoryIsComplete" />

            <div style={{ marginBottom: '8px' }}>
              <FormattedMessage {...messages.affirmComplete} />
            </div>

            <Row>
              <Field name="inventoryAnalyst" />
              <Field name="inventoryDate" />
            </Row>
          </Col>
        </Row>

        <Row>
          <Field name="Notes_DentalPathology" subpath="ns2:osteology_anthropology" />
          <Field name="Notes_CranialPathology" subpath="ns2:osteology_anthropology" />
          <Field name="Notes_PostcranialPathology" subpath="ns2:osteology_anthropology" />
        </Row>

        <Row>
          <Field name="Notes_CulturalModifications" subpath="ns2:osteology_anthropology" />
          <Field name="Notes_NHTaphonomicAlterations" subpath="ns2:osteology_anthropology" />
          <Field name="Notes_CuratorialSuffixing" subpath="ns2:osteology_anthropology" />
        </Row>
      </Panel>

      <Panel name="modification" collapsible collapsed>
        <Panel name="cranialDeform" collapsible collapsed>
          <Row>
            <Field name="cranialDeformationPresent" subpath="ns2:osteology_anthropology" />

            <Field name="cranialDeformationCategories" subpath="ns2:osteology_anthropology">
              <Field name="cranialDeformationCategory" />
            </Field>
          </Row>

          <Field name="cranialDeformationNote" subpath="ns2:osteology_anthropology" />
        </Panel>

        <Panel name="trepanation" collapsible collapsed>
          <Field name="trepanationPresent" subpath="ns2:osteology_anthropology" />

          <Field name="trepanationGroupList" subpath="ns2:osteology_anthropology">
            <Field name="trepanationGroup">
              <Panel>
                <Cols>
                  <Col>
                    <Field name="trepanationLocation" />

                    <InputTable name="trepanationDimension">
                      <Field name="trepanationDimensionMax" />
                      <Field name="trepanationDimensionMin" />
                    </InputTable>

                    <Row>
                      <Field name="trepanationTechnique" />
                      <Field name="trepanationHealing" />
                    </Row>
                  </Col>

                  <Col>
                    <Field name="trepanationCertainty" />
                    <Field name="trepanationNote" />
                  </Col>
                </Cols>
              </Panel>
            </Field>
          </Field>

          <Field name="trepanationGeneralNote" subpath="ns2:osteology_anthropology" />
        </Panel>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
