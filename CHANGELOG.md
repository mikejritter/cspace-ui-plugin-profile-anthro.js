# Change Log

## v3.0.0

### Breaking Changes

- v3.0.0 requires cspace-ui version 4, because it uses cspace-ui-plugin-record-taxon version 2.

## v2.0.0

v2.0.0 adds support for CollectionSpace 5.2.

### Breaking Changes

New fields have been added to the record editor form for object records. These fields exist in CollectionSpace 5.2, but not in older versions of CollectionSpace. To use this version of the anthropology profile with an older CollectionSpace server, these new fields should be hidden; otherwise, any values entered will not be saved. The following fields are new:

- `nagpraReportFiled`
- `nagpraReportFiledBy`
- `nagpraReportFiledDate`
