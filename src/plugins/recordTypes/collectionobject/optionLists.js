import { defineMessages } from 'react-intl';

export default {
  forms: {
    values: [
      'bagged',
      'bottled',
      'boxed',
      'in can or tin',
      'in drum',
      'dry',
      'ground',
      'mounted',
      'pinned',
      'thin section',
      'wet',
      'wrapped',
      'unknown',
    ],
    messages: defineMessages({
      bagged: {
        id: 'option.forms.bagged',
        defaultMessage: 'bagged',
      },
      bottled: {
        id: 'option.forms.bottled',
        defaultMessage: 'bottled',
      },
      boxed: {
        id: 'option.forms.boxed',
        defaultMessage: 'boxed',
      },
      'in can or tin': {
        id: 'option.forms.in can or tin',
        defaultMessage: 'in can or tin',
      },
      'in drum': {
        id: 'option.forms.in drum',
        defaultMessage: 'in drum',
      },
      // dry message is already configured in cspace-ui.
      ground: {
        id: 'option.forms.ground',
        defaultMessage: 'ground',
      },
      mounted: {
        id: 'option.forms.mounted',
        defaultMessage: 'mounted',
      },
      // pinned message is already configured in cspace-ui.
      'thin section': {
        id: 'option.forms.thin section',
        defaultMessage: 'thin section',
      },
      // wet message is already configured in cspace-ui.
      wrapped: {
        id: 'option.forms.wrapped',
        defaultMessage: 'wrapped',
      },
      unknown: {
        id: 'option.forms.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
  nameCurrencies: {
    values: [
      'current',
      'out of date',
      'unknown',
    ],
    messages: defineMessages({
      'out of date': {
        id: 'option.nameCurrencies.out of date',
        defaultMessage: 'out of date',
      },
      unknown: {
        id: 'option.nameCurrencies.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
  nameSystems: {
    values: [
      'AASLH Nomenclature',
      'Bennyhoff Olivella bead typology',
      'Getty Art & Architecture Thesaurus',
      'Gifford worked bone typology',
      'Gifford worked shell typology',
      'Heizer projectile point typology',
      'Justice projectile point typology',
      'Meighan historic glass bead typology',
      'Treganza clay artifact typology',
      'no system',
    ],
    messages: defineMessages({
      'AASLH Nomenclature': {
        id: 'option.nameSystems.AASLH Nomenclature',
        defaultMessage: 'AASLH Nomenclature',
      },
      'Bennyhoff Olivella bead typology': {
        id: 'option.nameSystems.Bennyhoff Olivella bead typology',
        defaultMessage: 'Bennyhoff Olivella bead typology',
      },
      'Getty Art & Architecture Thesaurus': {
        id: 'option.nameSystems.Getty Art & Architecture Thesaurus',
        defaultMessage: 'Getty Art & Architecture Thesaurus',
      },
      'Gifford worked bone typology': {
        id: 'option.nameSystems.Gifford worked bone typology',
        defaultMessage: 'Gifford worked bone typology',
      },
      'Gifford worked shell typology': {
        id: 'option.nameSystems.Gifford worked shell typology',
        defaultMessage: 'Gifford worked shell typology',
      },
      'Heizer projectile point typology': {
        id: 'option.nameSystems.Heizer projectile point typology',
        defaultMessage: 'Heizer projectile point typology',
      },
      'Justice projectile point typology': {
        id: 'option.nameSystems.Justice projectile point typology',
        defaultMessage: 'Justice projectile point typology',
      },
      'Meighan historic glass bead typology': {
        id: 'option.nameSystems.Meighan historic glass bead typology',
        defaultMessage: 'Meighan historic glass bead typology',
      },
      'Treganza clay artifact typology': {
        id: 'option.nameSystems.Treganza clay artifact typology',
        defaultMessage: 'Treganza clay artifact typology',
      },
      'no system': {
        id: 'option.nameSystems.no system',
        defaultMessage: 'no system',
      },
    }),
  },
  phases: {
    values: [
      'adult/mature',
      'subadult/immature',
      'egg',
      'larva',
      'seed',
      'indeterminate',
      'multiple',
      'unknown',
    ],
    messages: defineMessages({
      'adult/mature': {
        id: 'option.phases.adult/mature',
        defaultMessage: 'adult/mature',
      },
      'subadult/immature': {
        id: 'option.phases.subadult/immature',
        defaultMessage: 'subadult/immature',
      },
      egg: {
        id: 'option.phases.egg',
        defaultMessage: 'egg',
      },
      // larva message is already configured in cspace-ui.
      seed: {
        id: 'option.phases.seed',
        defaultMessage: 'seed',
      },
      indeterminate: {
        id: 'option.phases.indeterminate',
        defaultMessage: 'indeterminate',
      },
      multiple: {
        id: 'option.phases.multiple',
        defaultMessage: 'multiple',
      },
      unknown: {
        id: 'option.phases.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
};
