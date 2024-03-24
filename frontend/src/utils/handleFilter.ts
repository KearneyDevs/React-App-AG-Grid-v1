interface IRow {
  [key: string]: string;
}

export const handleFilter = (
  rowData: IRow[],
  searchTerm: string,
  fields: string[]
): IRow[] => {
  const value = searchTerm.toLowerCase();
  return rowData.filter((row) =>
    fields.some((field) => row[field].toLowerCase().includes(value))
  );
};
