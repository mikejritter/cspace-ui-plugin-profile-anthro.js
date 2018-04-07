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
  } = configContext.recordComponents;

  return (
    <Field name="annotationGroupList" subpath="ns2:collectionobjects_annotation">
      <Field name="annotationGroup">
        <Field name="annotationType" />
        <Field name="annotationNote" />
        <Field name="annotationDate" />
        <Field name="annotationAuthor" />
      </Field>
    </Field>
  );
};
