import { Field } from 'formik';

import { InputField } from './InputField/InputField';
import { MultiSelectField } from './MultiSelectField/MultiSelectField';
import { DateInputField } from './DateInputField/DateInputField';

export const TextField = ({ ...props }) => (
  <InputField type='text' {...props} />
);

export const NumericField = ({ ...props }) => (
  <InputField type='number' {...props} />
);

export const TextareaField = ({ ...props }) => (
  <InputField type='textarea' {...props} />
);

export const DateField = ({ ...props }) => (
  <DateInputField type='date' {...props} />
);

export const SelectField = ({ ...props }) => (
  <Field component={MultiSelectField} {...props} />
);
