import { useState } from "react";
import { ZodObject, ZodNumber } from "zod";
import {
  useFormValidator,
  ValidationResult,
} from "../../hooks/useFormValidator";
import { useFormSubmitter } from "../../hooks/useFormSubmitter";
import InputField from "./InputField";
import { handleFormValues } from "../../utils/handleFormValues";

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
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  data: any[];
  handleFormValues?: (
    values: Record<string, string | number>
  ) => Record<string, string | number>;
}

const Form: React.FC<Props> = ({ formConfig, setData, data }) => {
  const { schema, fields, initialValues } = formConfig;
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const { validate } = useFormValidator(schema);
  const { submit } = useFormSubmitter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const fieldSchema = schema.shape[name as keyof typeof initialValues];

    const parsedValue =
      fieldSchema instanceof ZodNumber ? parseFloat(value) : value;

    setFormValues({ ...formValues, [name]: parsedValue });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let updatedFormValues = { ...formValues };

    if (typeof handleFormValues === "function") {
      updatedFormValues = handleFormValues(updatedFormValues);
    }

    // Validate the updated form values
    const validationResult: ValidationResult = validate(updatedFormValues);

    if (validationResult.isValid) {
      try {
        await submit(updatedFormValues, setData, data);
        console.log("Form submission successful", updatedFormValues);
        setFormValues(initialValues);
        setFormErrors({});
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

      <button
        type="submit"
        className="p-2 px-6 text-white bg-brightRed rounded-full align-middle hover:bg-brightRedLight"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
