import {atom} from 'nanostores'

export const template = atom('vanilla');

export const onChangeTemplate = (templateType: string) =>
  template.set(templateType);
