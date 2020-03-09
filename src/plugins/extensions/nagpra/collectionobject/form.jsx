export default (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Panel name="nagpraCompliance" collapsible collapsed>
      <Cols>
        <Col>
          <Field name="nagpraInventoryNames" subpath="ns2:collectionobjects_nagpra">
            <Field name="nagpraInventoryName" />
          </Field>

          <Field name="nagpraCategories" subpath="ns2:collectionobjects_nagpra">
            <Field name="nagpraCategory" />
          </Field>

          <Field name="graveAssocCodes" subpath="ns2:collectionobjects_nagpra">
            <Field name="graveAssocCode" />
          </Field>
        </Col>

        <Col>
          <Field name="repatriationNotes" subpath="ns2:collectionobjects_nagpra">
            <Field name="repatriationNote" />
          </Field>
        </Col>
      </Cols>

      <Field name="nagpraDetermGroupList" subpath="ns2:collectionobjects_nagpra">
        <Field name="nagpraDetermGroup">
          <Field name="nagpraDetermCulture" />
          <Field name="nagpraDetermType" />
          <Field name="nagpraDetermBy" />
          <Field name="nagpraDetermNote" />
        </Field>
      </Field>

      <InputTable name="nagpraReportFiled">
        <Field name="nagpraReportFiled" subpath="ns2:collectionobjects_nagpra" />
        <Field name="nagpraReportFiledBy" subpath="ns2:collectionobjects_nagpra" />
        <Field name="nagpraReportFiledDate" subpath="ns2:collectionobjects_nagpra" />
      </InputTable>
    </Panel>
  );
};
