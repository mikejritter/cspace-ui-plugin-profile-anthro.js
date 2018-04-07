export default (configContext) => {
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
  } = configContext.recordComponents;

  // TODO: This form does not contain some extension fields, because they are interleaved with
  // common fields in the "Claim Information" panel. These fields shoud be moved into the common
  // schema, so that this extension only contains fields that can be rendered together. The
  // following extension fields are not included in this form, and must be added individually
  // using <Field> tags in the form that uses this extension:
  // nagpraClaimName, nagpraClaimTypes, nagpraClaimAltNameGroupList, nagpraClaimNotes

  return (
    <div>
      <Panel name="nagpraClaimContext" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="nagpraClaimSiteGroupList" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimSiteGroup">
                <Field name="nagpraClaimSiteName" />
                <Field name="nagpraClaimSiteNote" />
              </Field>
            </Field>

            <Field name="nagpraClaimGroupGroupList" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimGroupGroup">
                <Field name="nagpraClaimGroupName" />
                <Field name="nagpraClaimGroupNote" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="nagpraClaimPeriodGroupList" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimPeriodGroup">
                <Field name="nagpraClaimPeriodDateGroup" />
                <Field name="nagpraClaimPeriodNote" />
              </Field>
            </Field>
          </Col>
        </Cols>
      </Panel>

      <Panel name="nagpraClaimProcessing" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="nagpraClaimInitialResponseGroupList" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimInitialResponseGroup">
                <Field name="nagpraClaimInitialResponseDate" />
                <Field name="nagpraClaimInitialResponseNote" />
              </Field>
            </Field>

            <Field name="nagpraClaimSentToLocalGroupList" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimSentToLocalGroup">
                <Field name="nagpraClaimSentToLocalDate" />
                <Field name="nagpraClaimSentToLocalNote" />
              </Field>
            </Field>

            <Field name="nagpraClaimLocalRecGroupList" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimLocalRecGroup">
                <Field name="nagpraClaimLocalRecDate" />
                <Field name="nagpraClaimLocalRecNote" />
              </Field>
            </Field>

            <Field name="nagpraClaimSentToNatlGroupList" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimSentToNatlGroup">
                <Field name="nagpraClaimSentToNatlDate" />
                <Field name="nagpraClaimSentToNatlNote" />
              </Field>
            </Field>

            <Field name="nagpraClaimNatlRespGroupList" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimNatlRespGroup">
                <Field name="nagpraClaimNatlRespDate" />
                <Field name="nagpraClaimNatlRespNote" />
              </Field>
            </Field>

            <Field name="nagpraClaimNatlApprovalGroupList" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimNatlApprovalGroup">
                <Field name="nagpraClaimNatlApprovalDate" />
                <Field name="nagpraClaimNatlApprovalNote" />
              </Field>
            </Field>

            <Field name="nagpraClaimNoticeGroupList" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimNoticeGroup">
                <Field name="nagpraClaimNoticeDate" />
                <Field name="nagpraClaimNoticeDateType" />
                <Field name="nagpraClaimNoticeNote" />
              </Field>
            </Field>

            <Field name="nagpraClaimTransferGroupList" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimTransferGroup">
                <Field name="nagpraClaimTransferDate" />
                <Field name="nagpraClaimTransferNote" />
              </Field>
            </Field>
          </Col>

          <Panel name="nagpraClaimTasks">
            <Row>
              <Field name="dispositionPossibilitiesDiscussed" subpath="ns2:claims_nagpra" />
              <Field name="dispositionPossibilitiesDiscussedNote" subpath="ns2:claims_nagpra" />
            </Row>

            <Row>
              <Field name="surroundingTribesContacted" subpath="ns2:claims_nagpra" />
              <Field name="surroundingTribesContactedNote" subpath="ns2:claims_nagpra" />
            </Row>

            <Row>
              <Field name="workingTeamNotified" subpath="ns2:claims_nagpra" />
              <Field name="workingTeamNotifiedNote" subpath="ns2:claims_nagpra" />
            </Row>

            <Row>
              <Field name="siteFileResearchCompleted" subpath="ns2:claims_nagpra" />
              <Field name="siteFileResearchCompletedNote" subpath="ns2:claims_nagpra" />
            </Row>

            <Row>
              <Field name="accessionFileResearchCompleted" subpath="ns2:claims_nagpra" />
              <Field name="accessionFileResearchCompletedNote" subpath="ns2:claims_nagpra" />
            </Row>

            <Row>
              <Field name="objectsLocatedAndCounted" subpath="ns2:claims_nagpra" />
              <Field name="objectsLocatedAndCountedNote" subpath="ns2:claims_nagpra" />
            </Row>

            <Row>
              <Field name="objectsConsolidated" subpath="ns2:claims_nagpra" />
              <Field name="objectsConsolidatedNote" subpath="ns2:claims_nagpra" />
            </Row>

            <Row>
              <Field name="objectsPhotographed" subpath="ns2:claims_nagpra" />
              <Field name="objectsPhotographedNote" subpath="ns2:claims_nagpra" />
            </Row>

            <Row>
              <Field name="registrationDocumentsDrafted" subpath="ns2:claims_nagpra" />
              <Field name="registrationDocumentsDraftedNote" subpath="ns2:claims_nagpra" />
            </Row>

            <Row>
              <Field name="tribeContactedForPackingPreferences" subpath="ns2:claims_nagpra" />
              <Field name="tribeContactedForPackingPreferencesNote" subpath="ns2:claims_nagpra" />
            </Row>

            <Row>
              <Field name="dateArrangedForTransfer" subpath="ns2:claims_nagpra" />
              <Field name="dateArrangedForTransferNote" subpath="ns2:claims_nagpra" />
            </Row>

            <Row>
              <Field name="objectsMarkedAsDeaccessioned" subpath="ns2:claims_nagpra" />
              <Field name="objectsMarkedAsDeaccessionedNote" subpath="ns2:claims_nagpra" />
            </Row>

            <Row>
              <Field name="documentsArchived" subpath="ns2:claims_nagpra" />
              <Field name="documentsArchivedNote" subpath="ns2:claims_nagpra" />
            </Row>
          </Panel>
        </Cols>
      </Panel>
    </div>
  );
};
