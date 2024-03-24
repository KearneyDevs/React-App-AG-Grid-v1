import { formConfig } from "./newDistilleryConfig";
import Form from "../general/Form";

interface FormProps {
  setData: React.Dispatch<React.SetStateAction<any[]>>;
  data: any[];
}

const NewDistilleryForm: React.FC<FormProps> = ({ setData, data }) => {
  return (
    <div className="w-full max-w-xs mb-10">
      <h2 className="text-2xl font-bold mb-5">Register a New Distillery</h2>
      <Form formConfig={formConfig} setData={setData} data={data} />
    </div>
  );
};

export default NewDistilleryForm;
