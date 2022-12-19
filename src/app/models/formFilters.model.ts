export type FormFiltersFields = {
  name: string;
  nameStartsWith: string;
  offset: string;
};

export type FormFieldsName = keyof FormFiltersFields;
