import { formConfig } from "./newDistilleryConfig";
import Form from "../general/Form";

const NewDistilleryForm = () => {
  return (
    <div className="w-full max-w-xs">
      <h2 className="text-2xl font-bold underline">
        Register a New Distillery
      </h2>
      <Form formConfig={formConfig} />
    </div>
  );
};

export default NewDistilleryForm;
