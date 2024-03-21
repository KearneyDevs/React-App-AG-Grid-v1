import { ZodObject, ZodError } from "zod";
export type FormValues = Record<string, string | number>;

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const useFormValidator = (schema: ZodObject<any>) => {
  const validate = (formValues: FormValues): ValidationResult => {
    try {
      schema.parse(formValues);
      return { isValid: true, errors: {} };
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {} as Record<string, string>);
        return { isValid: false, errors: errorMessages };
      }
      return { isValid: false, errors: {} };
    }
  };

  return { validate };
};
