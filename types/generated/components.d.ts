import type { Schema, Attribute } from '@strapi/strapi';

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    description: '';
  };
  attributes: {
    Add: Attribute.String;
  };
}

export interface LanguageLanguageSpoken extends Schema.Component {
  collectionName: 'components_language_language_spokens';
  info: {
    displayName: 'LanguageSpoken';
    description: '';
  };
  attributes: {
    Add: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'education.education': EducationEducation;
      'language.language-spoken': LanguageLanguageSpoken;
    }
  }
}
