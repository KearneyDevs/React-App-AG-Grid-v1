import DistilleriesInfo from "../components/DistilleriesInfo";
import NewDistilleryForm from "../components/forms/NewDistilleryForm";

const DistillInfo = () => {
  return (
    <div className="container flex flex-col px-4 mx-auto mt-10">
      <h2 className="max-w-md text-4xl font-bold mb-5">
        Distillery Information
      </h2>

      <p className="text-darkGrayishBlue mb-10">
        Search and select a distillery name for more information.
      </p>

      <DistilleriesInfo />
      <NewDistilleryForm />
    </div>
  );
};

export default DistillInfo;
