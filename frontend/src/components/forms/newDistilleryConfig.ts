import { object, string, number } from "zod";

export const formConfig = {
  schema: object({
    name: string().min(1),
    slug: string().min(1),
    country: string().min(1),
    whiskybase_whiskies: string().min(1),
    whiskybase_votes: string().min(1),
    whiskybase_rating: string().min(1),
  }),
  fields: {
    name: { label: "Name", type: "text" },
    country: { label: "Country", type: "text" },
    whiskybase_whiskies: { label: "Whiskies", type: "text" },
    whiskybase_votes: { label: "Votes", type: "text" },
    whiskybase_rating: { label: "Rating", type: "text" },
  },
  initialValues: {
    name: "",
    slug: "",
    country: "",
    whiskybase_whiskies: "",
    whiskybase_votes: "",
    whiskybase_rating: "",
  },
};
