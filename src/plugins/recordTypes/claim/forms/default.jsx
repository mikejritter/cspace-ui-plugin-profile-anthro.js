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

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Row>
          <Field name="claimNumber" />
          <Col />
        </Row>

        <Field name="claimantGroupList">
          <Field name="claimantGroup">
            <Field name="claimFiledBy" />
            <Field name="claimFiledOnBehalfOf" />
            <Field name="claimantNote" />
          </Field>
        </Field>

        <Field name="claimReceivedGroupList">
          <Field name="claimReceivedGroup">
            <Field name="claimReceivedDate" />
            <Field name="claimReceivedNote" />
          </Field>
        </Field>
      </Panel>
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.claim.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
