import { Field } from 'formik';
import { FieldError } from '../FieldError/FieldError';
import Select from 'react-select';

export const MultiSelectField = ({
  name,
  isMulti,
  label,
  className,
  options,
  value,
  id,
  ...props
}) => (
  <Field name={name}>
    {({ field, meta, form }) => (
      <div className={`${className}-wrapper`}>
        <label htmlFor={field.name}>{label}</label>

        <Select
          classNamePrefix='react-select'
          name={field.name}
          isMulti={isMulti}
          id={id}
          className={className}
          value={value}
          options={options}
          onChange={(option) => {
            form.setFieldValue(
              field.name,
              option ? option.map((item) => item.label) : []
            );
          }}
          {...props}
        />

        {meta && <FieldError meta={meta} />}
      </div>
    )}
  </Field>
);
