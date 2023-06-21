# Change Log

## v7.0.0

v7.0.0 adds support for CollectionSpace 7.2.

### Breaking Changes

The record editor form for Object records now includes the following new fields, added in CollectionSpace 7.2. To use this version of the anthropology profile with an older CollectionSpace server, these fields should be hidden; otherwise, any values entered will not be saved.

- NAGPRA Note (`nagpraNotes/nagpraNote`),
- Field Collection Event (`fieldCollectionEvents/fieldCollectionEvent`),
- Field Collection Site (`fieldCollectionSites/fieldCollectionSite`)
- Apparel Size (`apparelSizes/apparelSize`)
- Description Level (`descriptionLevel`)

## v6.0.0

v6.0.0 adds support for CollectionSpace 7.1.

### Breaking Changes

- The record editor form for place records now includes fields from the NAGPRA place extension, added in CollectionSpace 7.1. To use this version of the anthropology profile with an older CollectionSpace server, the NAGPRA-related sections should be hidden; otherwise, any values entered will not be saved.

## v5.0.0

v5.0.0 adds support for CollectionSpace 7.0.

### Breaking Changes

- The record editor form for object records now uses the `nagpraReportFiledGroupList/nagpraReportFiledGroup` repeating group, added in CollectionSpace 7.0. To use this version of the anthropology profile with an older CollectionSpace server, this field group should be hidden; otherwise, any values entered will not be saved.

  The following fields, present in CollectionSpace prior to 7.0, have been removed from the form:

  - `nagpraReportFiled`
  - `nagpraReportFiledBy`
  - `nagpraReportFiledDate`

  To use this version of the anthropology profile with an older CollectionSpace server, the above fields must be added back to the form.

- v5.0.0 requires cspace-ui version 6. The record editor form for object records now uses the annotation fields that are defined in cspace-ui as of version 6, instead of using the (now deprecated) cspace-ui-plugin-ext-annotation plugin.

## v4.1.0

- Added the Named Collection field to the Object record editor form (only if using cspace-ui version 5).
- Added local organizations to NAGPRA Report Filed By autocomplete sources.

## v4.0.0

v4.0.0 contains configuration cleanup.

### Breaking Changes

- The message ID of the label for the field `graveAssocCodes/graveAssocCode` has changed. It is now `field.collectionobjects_nagpra.graveAssocCode.name`. If you have customized this label using the previous message ID (`field.collectionobjects_nagpra.graveAssocCodes.name`), update your configuration to use the new ID. The previous ID contained a typo.

## v3.0.0

v3.0.0 adds support for CollectionSpace 6.0.

### Breaking Changes

- v3.0.0 requires cspace-ui version 4. If you've customized this profile, see the cspace-ui 4.0.0 change log for configuration changes that may be needed.

## v2.0.0

v2.0.0 adds support for CollectionSpace 5.2.

### Breaking Changes

- New fields have been added to the record editor form for object records. These fields exist in CollectionSpace 5.2, but not in older versions of CollectionSpace. To use this version of the anthropology profile with an older CollectionSpace server, these new fields should be hidden; otherwise, any values entered will not be saved. The following fields are new:

  - `nagpraReportFiled`
  - `nagpraReportFiledBy`
  - `nagpraReportFiledDate`
