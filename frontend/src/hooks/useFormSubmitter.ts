import { FormValues } from "./useFormValidator";

export const useFormSubmitter = () => {
  const submit = async (formValues: FormValues): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log("Form submitted", formValues);
        resolve();
      }, 1000);
    });
  };

  return { submit };
};
