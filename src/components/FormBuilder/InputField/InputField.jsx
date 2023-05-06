import { Field } from 'formik';
import { FieldError } from '../FieldError/FieldError';
import { Input, Textarea } from '../../../common';

export const InputField = ({ name, type, placeholder, label, ...props }) => (
  <Field name={name}>
    {({ field, form, meta }) => (
      <div>
        {type === 'textarea' ? (
          <Textarea
            type={type}
            placeholder={placeholder}
            label={label}
            onChange={(value) => form.setFieldValue(field.name, value)}
            {...props}
          />
        ) : (
          <Input
            type={type}
            placeholder={placeholder}
            label={label}
            onChange={(value) => form.setFieldValue(field.name, value)}
            {...props}
          />
        )}

        {meta && <FieldError meta={meta} />}
      </div>
    )}
  </Field>
);