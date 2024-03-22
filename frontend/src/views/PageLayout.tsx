interface DistilleryInformationProps {
  component?: React.ComponentType<any>;
  pageTitle: string;
  pageParagraph?: string;
}

const PageLayout: React.FC<DistilleryInformationProps> = ({
  component: Component,
  pageTitle,
  pageParagraph,
}) => {
  return (
    <div className="container flex flex-col px-4 mx-auto mt-10">
      <h2 className="max-w-md text-4xl font-bold mb-5">{pageTitle}</h2>

      {pageParagraph && (
        <p className="text-darkGrayishBlue mb-10">{pageParagraph}</p>
      )}

      {Component && <Component />}
    </div>
  );
};

export default PageLayout;
