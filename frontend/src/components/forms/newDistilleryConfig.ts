import { object, string, number } from "zod";

export const formConfig = {
  schema: object({
    name: string().min(1),
    country: string().min(1),
    whiskies: string().min(1),
    votes: string().min(1),
    rating: number().nonnegative(),
  }),
  fields: {
    name: { label: "Name", type: "text" },
    country: { label: "Country", type: "text" },
    whiskies: { label: "Whiskies", type: "text" },
    votes: { label: "Votes", type: "text" },
    rating: { label: "Rating", type: "number" },
  },
  initialValues: {
    name: "",
    country: "",
    whiskies: "",
    votes: "",
    rating: 0,
  },
};
