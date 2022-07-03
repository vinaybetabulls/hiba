import MaterialTable from 'material-table';
import React from 'react';

type Props = {
  title?: string;
  columns: {
    title: string;
    field: string;
    type?: 'numeric' | 'string';
    lookup?: any;
  }[];
  data: any[];
  options?: any;
};
const Table = ({ title, columns, data }: Props) => {
  return (
    <MaterialTable
      title={title || 'Table'}
      columns={columns}
      data={data}
      options={{
        exportButton: true,
      }}
    />
  );
};

export default Table;
