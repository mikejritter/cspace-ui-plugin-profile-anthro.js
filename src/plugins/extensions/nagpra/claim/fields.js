import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    'ns2:claims_nagpra': {
      [config]: {
        service: {
          ns: 'http://collectionspace.org/services/claim/domain/nagpra',
        },
      },
      nagpraClaimName: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.nagpraClaimName.name',
              defaultMessage: 'Claim name',
            },
          }),
          view: {
            type: TextInput,
          },
        },
      },
      nagpraClaimTypes: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimType.name',
                defaultMessage: 'Claim type',
              },
            }),
            repeating: true,
            view: {
              type: TermPickerInput,
              props: {
                source: 'nagpraclaimtype',
              },
            },
          },
        },
      },
      nagpraClaimAltNameGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimAltNameGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimAltNameGroup.name',
                defaultMessage: 'Alternate name/number',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          nagpraClaimAltName: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimAltName.fullName',
                  defaultMessage: 'Alternate name/number',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimAltName.name',
                  defaultMessage: 'Name/number',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          nagpraClaimAltNameNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimAltNameNote.fullName',
                  defaultMessage: 'Alternate name/number note',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimAltNameNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      nagpraClaimNotes: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimNote.name',
                defaultMessage: 'Note',
              },
            }),
            repeating: true,
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
      },
      nagpraClaimSiteGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimSiteGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimSiteGroup.name',
                defaultMessage: 'Site/place involved',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          nagpraClaimSiteName: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimSiteName.fullName',
                  defaultMessage: 'Site/place involved name',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimSiteName.name',
                  defaultMessage: 'Name',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'place/local,place/shared',
                },
              },
            },
          },
          nagpraClaimSiteNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimSiteNote.fullName',
                  defaultMessage: 'Site/place involved note',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimSiteNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      nagpraClaimGroupGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimGroupGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimGroupGroup.name',
                defaultMessage: 'Cultural group involved',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          nagpraClaimGroupName: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimGroupName.fullName',
                  defaultMessage: 'Cultural group involved name',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimGroupName.name',
                  defaultMessage: 'Name',
                },
              }),
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/ethculture',
                },
              },
            },
          },
          nagpraClaimGroupNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimGroupNote.fullName',
                  defaultMessage: 'Cultural group involved note',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimGroupNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      nagpraClaimPeriodGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimPeriodGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimPeriodGroup.name',
                defaultMessage: 'Time period represented',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          nagpraClaimPeriodDateGroup: {
            [config]: {
              dataType: DATA_TYPE_STRUCTURED_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimPeriodDateGroup.fullName',
                  defaultMessage: 'Time period represented date',
                },
                groupName: {
                  id: 'field.claims_nagpra.nagpraClaimPeriodDateGroup.groupName',
                  defaultMessage: 'Date',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimPeriodDateGroup.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: StructuredDateInput,
              },
            },
            ...extensions.structuredDate.fields,
          },
          nagpraClaimPeriodNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimPeriodNote.fullName',
                  defaultMessage: 'Time period represented note',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimPeriodNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      nagpraClaimInitialResponseGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimInitialResponseGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimInitialResponseGroup.name',
                defaultMessage: 'Initial response',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          nagpraClaimInitialResponseDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimInitialResponseDate.fullName',
                  defaultMessage: 'Initial response date',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimInitialResponseDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          nagpraClaimInitialResponseNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimInitialResponseNote.fullName',
                  defaultMessage: 'Initial response note',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimInitialResponseNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      nagpraClaimSentToLocalGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimSentToLocalGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimSentToLocalGroup.name',
                defaultMessage: 'Sent to NAGPRA committee',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          nagpraClaimSentToLocalDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimSentToLocalDate.fullName',
                  defaultMessage: 'Sent to NAGPRA committee date',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimSentToLocalDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          nagpraClaimSentToLocalNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimSentToLocalNote.fullName',
                  defaultMessage: 'Sent to NAGPRA committee note',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimSentToLocalNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      nagpraClaimLocalRecGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimLocalRecGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimLocalRecGroup.name',
                defaultMessage: 'Recommendation of NAGPRA committee',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          nagpraClaimLocalRecDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimLocalRecDate.fullName',
                  defaultMessage: 'Recommendation of NAGPRA committee date',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimLocalRecDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          nagpraClaimLocalRecNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimLocalRecNote.fullName',
                  defaultMessage: 'Recommendation of NAGPRA committee note',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimLocalRecNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      nagpraClaimSentToNatlGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimSentToNatlGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimSentToNatlGroup.name',
                defaultMessage: 'Sent to National NAGPRA',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          nagpraClaimSentToNatlDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimSentToNatlDate.fullName',
                  defaultMessage: 'Sent to National NAGPRA date',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimSentToNatlDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          nagpraClaimSentToNatlNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimSentToNatlNote.fullName',
                  defaultMessage: 'Sent to National NAGPRA note',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimSentToNatlNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      nagpraClaimNatlRespGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimNatlRespGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimNatlRespGroup.name',
                defaultMessage: 'Response from National NAGPRA',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          nagpraClaimNatlRespDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimNatlRespDate.fullName',
                  defaultMessage: 'Response from National NAGPRA date',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimNatlRespDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          nagpraClaimNatlRespNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimNatlRespNote.fullName',
                  defaultMessage: 'Response from National NAGPRA note',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimNatlRespNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      nagpraClaimNatlApprovalGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimNatlApprovalGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimNatlApprovalGroup.name',
                defaultMessage: 'Publication by National NAGPRA',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          nagpraClaimNatlApprovalDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimNatlApprovalDate.fullName',
                  defaultMessage: 'Publication by National NAGPRA date',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimNatlApprovalDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          nagpraClaimNatlApprovalNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimNatlApprovalNote.fullName',
                  defaultMessage: 'Publication by National NAGPRA note',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimNatlApprovalNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      nagpraClaimNoticeGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimNoticeGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimNoticeGroup.name',
                defaultMessage: 'National NAGPRA 30-day notice',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          nagpraClaimNoticeDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimNoticeDate.fullName',
                  defaultMessage: 'National NAGPRA 30-day notice date',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimNoticeDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          nagpraClaimNoticeDateType: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimNoticeDateType.fullName',
                  defaultMessage: 'National NAGPRA 30-day notice date type',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimNoticeDateType.name',
                  defaultMessage: 'Type',
                },
              }),
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'nagpraNoticeDateTypes',
                },
              },
            },
          },
          nagpraClaimNoticeNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimNoticeNote.fullName',
                  defaultMessage: 'National NAGPRA 30-day notice note',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimNoticeNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      nagpraClaimTransferGroupList: {
        [config]: {
          view: {
            type: CompoundInput,
          },
        },
        nagpraClaimTransferGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.claims_nagpra.nagpraClaimTransferGroup.name',
                defaultMessage: 'Transfer',
              },
            }),
            repeating: true,
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          nagpraClaimTransferDate: {
            [config]: {
              dataType: DATA_TYPE_DATE,
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimTransferDate.fullName',
                  defaultMessage: 'Transfer date',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimTransferDate.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: DateInput,
              },
            },
          },
          nagpraClaimTransferNote: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.claims_nagpra.nagpraClaimTransferNote.fullName',
                  defaultMessage: 'Transfer note',
                },
                name: {
                  id: 'field.claims_nagpra.nagpraClaimTransferNote.name',
                  defaultMessage: 'Note',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
      dispositionPossibilitiesDiscussed: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.dispositionPossibilitiesDiscussed.name',
              defaultMessage: 'Disposition possibilities discussed',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      dispositionPossibilitiesDiscussedNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.claims_nagpra.dispositionPossibilitiesDiscussedNote.fullName',
              defaultMessage: 'Disposition possibilities discussed note',
            },
            name: {
              id: 'field.claims_nagpra.dispositionPossibilitiesDiscussedNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      surroundingTribesContacted: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.surroundingTribesContacted.name',
              defaultMessage: 'Surrounding tribes contacted',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      surroundingTribesContactedNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.claims_nagpra.surroundingTribesContactedNote.fullName',
              defaultMessage: 'Surrounding tribes contacted note',
            },
            name: {
              id: 'field.claims_nagpra.surroundingTribesContactedNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      workingTeamNotified: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.workingTeamNotified.name',
              defaultMessage: 'Institutional NAGPRA team notified',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      workingTeamNotifiedNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.claims_nagpra.workingTeamNotifiedNote.fullName',
              defaultMessage: 'Institutional NAGPRA team notified note',
            },
            name: {
              id: 'field.claims_nagpra.workingTeamNotifiedNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      siteFileResearchCompleted: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.siteFileResearchCompleted.name',
              defaultMessage: 'Site file research completed',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      siteFileResearchCompletedNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.claims_nagpra.siteFileResearchCompletedNote.fullName',
              defaultMessage: 'Site file research completed note',
            },
            name: {
              id: 'field.claims_nagpra.siteFileResearchCompletedNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      accessionFileResearchCompleted: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.accessionFileResearchCompleted.name',
              defaultMessage: 'Accession file research completed',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      accessionFileResearchCompletedNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.claims_nagpra.accessionFileResearchCompletedNote.fullName',
              defaultMessage: 'Accession file research completed note',
            },
            name: {
              id: 'field.claims_nagpra.accessionFileResearchCompletedNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      objectsLocatedAndCounted: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.objectsLocatedAndCounted.name',
              defaultMessage: 'Objects located and counted',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      objectsLocatedAndCountedNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.claims_nagpra.objectsLocatedAndCountedNote.fullName',
              defaultMessage: 'Objects located and counted note',
            },
            name: {
              id: 'field.claims_nagpra.objectsLocatedAndCountedNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      objectsConsolidated: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.objectsConsolidated.name',
              defaultMessage: 'Objects consolidated',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      objectsConsolidatedNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.claims_nagpra.objectsConsolidatedNote.fullName',
              defaultMessage: 'Objects consolidated note',
            },
            name: {
              id: 'field.claims_nagpra.objectsConsolidatedNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      objectsPhotographed: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.objectsPhotographed.name',
              defaultMessage: 'Objects photographed',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      objectsPhotographedNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.claims_nagpra.objectsPhotographedNote.fullName',
              defaultMessage: 'Objects photographed note',
            },
            name: {
              id: 'field.claims_nagpra.objectsPhotographedNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      registrationDocumentsDrafted: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.registrationDocumentsDrafted.name',
              defaultMessage: 'Registration documents drawn up',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      registrationDocumentsDraftedNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.claims_nagpra.registrationDocumentsDraftedNote.fullName',
              defaultMessage: 'Registration documents drawn up note',
            },
            name: {
              id: 'field.claims_nagpra.registrationDocumentsDraftedNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      tribeContactedForPackingPreferences: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.tribeContactedForPackingPreferences.name',
              defaultMessage: 'Tribe contacted for packing/storage instructions',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      tribeContactedForPackingPreferencesNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.claims_nagpra.tribeContactedForPackingPreferencesNote.fullName',
              defaultMessage: 'Tribe contacted for packing/storage instructions note',
            },
            name: {
              id: 'field.claims_nagpra.tribeContactedForPackingPreferencesNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      dateArrangedForTransfer: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.dateArrangedForTransfer.name',
              defaultMessage: 'Date arranged for pickup/transfer',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      dateArrangedForTransferNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.claims_nagpra.dateArrangedForTransferNote.fullName',
              defaultMessage: 'Date arranged for pickup/transfer note',
            },
            name: {
              id: 'field.claims_nagpra.dateArrangedForTransferNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      objectsMarkedAsDeaccessioned: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.objectsMarkedAsDeaccessioned.name',
              defaultMessage: 'Objects marked as deaccessioned',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      objectsMarkedAsDeaccessionedNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.claims_nagpra.objectsMarkedAsDeaccessionedNote.fullName',
              defaultMessage: 'Objects marked as deaccessioned note',
            },
            name: {
              id: 'field.claims_nagpra.objectsMarkedAsDeaccessionedNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
      documentsArchived: {
        [config]: {
          dataType: DATA_TYPE_BOOL,
          messages: defineMessages({
            name: {
              id: 'field.claims_nagpra.documentsArchived.name',
              defaultMessage: 'Claim documents archived',
            },
          }),
          view: {
            type: CheckboxInput,
          },
        },
      },
      documentsArchivedNote: {
        [config]: {
          messages: defineMessages({
            fullName: {
              id: 'field.claims_nagpra.documentsArchivedNote.fullName',
              defaultMessage: 'Claim documents archived note',
            },
            name: {
              id: 'field.claims_nagpra.documentsArchivedNote.name',
              defaultMessage: 'Note',
            },
          }),
          view: {
            type: TextInput,
            props: {
              multiline: true,
            },
          },
        },
      },
    },
  };
};
