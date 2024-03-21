import { formConfig } from "./newDistilleryConfig";
import Form from "../general/Form";

const NewDistilleryForm = () => {
  return (
    <div>
      <h2>New Distillery Form</h2>
      <Form formConfig={formConfig} />
    </div>
  );
};

export default NewDistilleryForm;
