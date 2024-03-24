import { FormValues } from "./useFormValidator";

export const useFormSubmitter = () => {
  const submit = async (
    formValues: FormValues,
    setData: React.Dispatch<React.SetStateAction<any[]>>,
    data: any[]
  ): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log("Form submitted", formValues);
        setData([...data, formValues]);
        resolve();
      }, 1000);
    });
  };

  return { submit };
};
