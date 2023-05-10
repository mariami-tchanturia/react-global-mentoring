import { Field } from 'formik';
import { FieldError } from '../FieldError/FieldError';
import { Textarea } from '../../../common';

export const TextareaField = ({ name, placeholder, label, ...props }) => (
  <Field name={name}>
    {({ field, form, meta }) => (
      <div>
        <Textarea
          placeholder={placeholder}
          label={label}
          onChange={(value) => form.setFieldValue(field.name, value)}
          {...props}
        />

        {meta && <FieldError meta={meta} />}
      </div>
    )}
  </Field>
);
