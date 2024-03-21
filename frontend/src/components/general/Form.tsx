import { useState } from "react";
import { z, ZodNumber } from "zod";

type FormErrors = {
  [key: string]: string | undefined;
};

interface FieldConfig {
  label: string;
  type: string;
}

interface FormConfig {
  schema: z.ZodObject<any>;
  fields: Record<string, FieldConfig>;
  initialValues: Record<string, string | number>;
}

interface Props {
  formConfig: FormConfig;
}

const Form: React.FC<Props> = ({ formConfig }) => {
  const { schema, fields, initialValues } = formConfig;
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldSchema = schema.shape[name as keyof typeof initialValues];

    const newValue =
      fieldSchema instanceof ZodNumber ? parseFloat(value) : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      schema.parse(formValues);
      setFormErrors({});
      console.log("Form is valid:", formValues);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log("Form validation failed:", error.errors);

        setFormErrors(
          error.errors.reduce((acc, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
          }, {} as FormErrors)
        );
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(fields).map(([fieldName, fieldConfig]) => {
        return (
          <div key={fieldName}>
            <label>{fieldConfig.label}</label>
            <input
              type={fieldConfig.type}
              name={fieldName}
              value={
                formValues[fieldName] !== undefined ? formValues[fieldName] : ""
              }
              onChange={handleInputChange}
            />
            {formErrors[fieldName] && <span>{formErrors[fieldName]}</span>}
          </div>
        );
      })}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
