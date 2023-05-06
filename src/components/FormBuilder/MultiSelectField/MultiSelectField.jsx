import Select from 'react-select';
import { FieldError } from '../FieldError/FieldError';

export const MultiSelectField = ({
  field,
  form,
  meta,
  options,
  isMulti,
  label,
  className,
  defaultValue,
  ...props
}) => {
  const handleChange = (option) => {
    form.setFieldValue(
      field.name,
      option ? option.map((item) => item.label) : []
    );
  };

  return (
    <div className={`${className}-wrapper`}>
      <label htmlFor={field.name}>{label}</label>

      <Select
        classNamePrefix='react-select'
        name={field.name}
        isMulti={isMulti}
        className={className}
        defaultValue={defaultValue}
        options={options}
        onChange={handleChange}
        {...props}
      />

      {meta && <FieldError meta={meta} />}
    </div>
  );
};
