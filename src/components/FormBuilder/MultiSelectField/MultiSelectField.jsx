import { Field } from 'formik';
import { FieldError } from '../FieldError/FieldError';
import Select from 'react-select';

export const MultiSelectField = ({
  name,
  isMulti,
  label,
  className,
  options,
  id,
  ...props
}) => (
  <Field name={name}>
    {({ field, meta, form }) => (
      <div className={`${className}-wrapper`}>
        <label htmlFor={field.name}>{label}</label>

        <Select
          name={field.name}
          id={id}
          className={className}
          isMulti={isMulti}
          options={options}
          value={options.filter(({ label }) => field.value.includes(label))}
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
