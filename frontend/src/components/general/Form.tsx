import { useState } from "react";
import { ZodObject, ZodNumber } from "zod";
import {
  useFormValidator,
  ValidationResult,
} from "../../hooks/useFormValidator";
import { useFormSubmitter } from "../../hooks/useFormSubmitter";
import InputField from "./InputField";

type FormErrors = {
  [key: string]: string | undefined;
};

interface FieldConfig {
  label: string;
  type: string;
}

interface Props {
  formConfig: {
    schema: ZodObject<any>;
    fields: Record<string, FieldConfig>;
    initialValues: Record<string, string | number>;
  };
}

const Form: React.FC<Props> = ({ formConfig }) => {
  const { schema, fields, initialValues } = formConfig;
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const { validate } = useFormValidator(schema);
  const { submit } = useFormSubmitter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const fieldSchema = schema.shape[name as keyof typeof initialValues];

    const newValue =
      fieldSchema instanceof ZodNumber ? parseFloat(value) : value;

    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationResult: ValidationResult = validate(formValues);
    if (validationResult.isValid) {
      try {
        await submit(formValues);
        console.log("Form submission successful", formValues);
      } catch (error) {
        console.error("Form submission failed", error);
      }
    } else {
      setFormErrors(validationResult.errors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.entries(fields).map(([fieldName, fieldConfig], index) => {
        return (
          <InputField
            key={index + fieldName}
            name={fieldName}
            type={fieldConfig.type}
            label={fieldConfig.label}
            value={
              formValues[fieldName] !== undefined ? formValues[fieldName] : ""
            }
            onChange={handleInputChange}
            error={formErrors[fieldName]}
          />
        );
      })}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
