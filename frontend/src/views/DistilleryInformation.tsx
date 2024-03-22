import DistilleryInfo from "../components/DistilleryInfo";

const DistilleryInformation = () => {
  return (
    <div className="container flex flex-col px-4 mx-auto mt-10">
      <h2 className="max-w-md text-4xl font-bold mb-5">
        Distillery Information
      </h2>

      <DistilleryInfo />
    </div>
  );
};

export default DistilleryInformation;
