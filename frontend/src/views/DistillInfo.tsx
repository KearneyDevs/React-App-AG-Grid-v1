interface DistilleryInformationProps {
  distilleryTable: React.ComponentType<any>;
  pageTitle: string;
  pagePara?: string;
}

const DistillInfo: React.FC<DistilleryInformationProps> = ({
  distilleryTable: DistilleriesTable,
  pageTitle,
  pagePara,
}) => {
  return (
    <div className="container flex flex-col px-4 mx-auto mt-10">
      <h2 className="max-w-md text-4xl font-bold mb-5">{pageTitle}</h2>

      {pagePara && <p className="text-darkGrayishBlue mb-10">{pagePara}</p>}

      <DistilleriesTable />
    </div>
  );
};

export default DistillInfo;
