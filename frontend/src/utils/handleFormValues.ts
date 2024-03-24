import { convertStringToSlug } from "../utils/functions";

interface FormValues {
  [key: string]: string | number;
}

export function handleFormValues(formValues: FormValues): FormValues {
  const updatedFormValues = { ...formValues };

  if (
    "slug" in updatedFormValues &&
    typeof updatedFormValues["slug"] === "string" &&
    "name" in updatedFormValues &&
    typeof updatedFormValues["name"] === "string"
  ) {
    // Set the value of 'slug' with the value of 'name'
    updatedFormValues["slug"] = convertStringToSlug(updatedFormValues["name"]);
  }

  return updatedFormValues;
}
