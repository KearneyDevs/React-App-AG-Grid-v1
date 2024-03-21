import { formConfig } from "./newDistilleryConfig";
import Form from "../general/Form";

const NewDistilleryForm = () => {
  return (
    <div>
      <h2>Register a New Distillery</h2>
      <Form formConfig={formConfig} />
    </div>
  );
};

export default NewDistilleryForm;
