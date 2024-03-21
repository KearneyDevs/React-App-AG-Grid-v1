import { z } from "zod";

export const formConfig = {
  schema: z.object({
    name: z.string().min(1),
    country: z.string().min(1),
    whiskies: z.string().min(1),
    votes: z.string().min(1),
    rating: z.number().nonnegative(),
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
