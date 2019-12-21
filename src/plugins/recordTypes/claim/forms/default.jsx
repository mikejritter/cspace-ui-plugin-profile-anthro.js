import { defineMessages } from 'react-intl';

const template = (configContext) => {
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
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  // TODO: Some nagpra claim extension fields are interleaved with common fields in the info panel,
  // so they must be individually rendered with <Field> tags, instead of being able to just insert
  // the form snippet provided by the extension. This can be fixed by moving those fields in the
  // nagpra extension into the common part, which is where they really should have been.

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="claimNumber" />
            <Field name="nagpraClaimName" subpath="ns2:claims_nagpra" />

            <Field name="nagpraClaimAltNameGroupList" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimAltNameGroup">
                <Field name="nagpraClaimAltName" />
                <Field name="nagpraClaimAltNameNote" />
              </Field>
            </Field>

            <Field name="claimantGroupList">
              <Field name="claimantGroup">
                <Field name="claimFiledBy" />
                <Field name="claimFiledOnBehalfOf" />
                <Field name="claimantNote" />
              </Field>
            </Field>
          </Col>

          <Col>
            <Field name="nagpraClaimTypes" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimType" />
            </Field>

            <Field name="claimReceivedGroupList">
              <Field name="claimReceivedGroup">
                <Field name="claimReceivedDate" />
                <Field name="claimReceivedNote" />
              </Field>
            </Field>

            <Field name="nagpraClaimNotes" subpath="ns2:claims_nagpra">
              <Field name="nagpraClaimNote" />
            </Field>
          </Col>
        </Cols>
      </Panel>

      {extensions.nagpra.claim.form}
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.claim.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
