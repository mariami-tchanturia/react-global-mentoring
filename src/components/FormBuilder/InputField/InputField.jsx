import { Field } from 'formik';
import { FieldError } from '../FieldError/FieldError';
import { Input } from '../../../common';

const InputField = ({ name, type, placeholder, label, ...props }) => (
  <Field name={name}>
    {({ field, form, meta }) => (
      <div>
        <Input
          placeholder={placeholder}
          label={label}
          type={type}
          value={field.value}
          onChange={(value) =>
            form.setFieldValue(
              field.name,
              type === 'number' ? parseFloat(value) : value
            )
          }
          {...props}
        />

        {meta && <FieldError meta={meta} />}
      </div>
    )}
  </Field>
);

export const TextField = ({ ...props }) => (
  <InputField type='text' {...props} />
);

export const NumericField = ({ ...props }) => (
  <InputField type='number' {...props} />
);

export const DateField = ({ ...props }) => (
  <InputField type='date' {...props} />
);
