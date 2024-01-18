import type { Schema, Attribute } from '@strapi/strapi';

export interface ShowcaseInfo extends Schema.Component {
  collectionName: 'components_showcase_infos';
  info: {
    displayName: 'info';
  };
  attributes: {
    version: Attribute.String;
    locale: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'showcase.info': ShowcaseInfo;
    }
  }
}
