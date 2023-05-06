import { Field } from 'formik';
import { Input } from '../../../common';
import { FieldError } from '../FieldError/FieldError';

export const DateInputField = ({
  name,
  type,
  placeholder,
  label,
  ...props
}) => (
  <Field name={name}>
    {({ field, form, meta }) => (
      <div>
        <Input
          type={type}
          placeholder={placeholder}
          onChange={(value) => form.setFieldValue(field.name, value)}
          label={label}
          {...props}
        />
        {meta && <FieldError meta={meta} />}
      </div>
    )}
  </Field>
);
