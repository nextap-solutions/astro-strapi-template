import type { Schema, Attribute } from '@strapi/strapi';

export interface ShowcaseShowcase extends Schema.Component {
  collectionName: 'components_showcase_showcases';
  info: {
    displayName: 'showcase';
  };
  attributes: {
    version: Attribute.String;
    locale: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'showcase.showcase': ShowcaseShowcase;
    }
  }
}
