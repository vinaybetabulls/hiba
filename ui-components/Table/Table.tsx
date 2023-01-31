import MaterialTable from 'material-table';
import React, { useState } from 'react';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';
import Modal from '../Modal/Modal';
import useStyles from './Table.styles';
export type ResponseDataType = {
  data: any[];
  currentPage: number;
  totalCount: number;
};

type Props = {
  title?: string;
  columns: {
    title: string;
    field: string;
    type?: 'numeric' | 'string';
    lookup?: any;
  }[];
  options?: any;
  exportButton?: boolean;
  getData: (pageSize: number, page: number) => Promise<ResponseDataType>;
  tableRef?: any;
  handleRemoveItem: (removeItemId: string) => void;
  setEditEntityValues: (entityData: any) => void;
};

// remote data exampleURL: https://material-table.com/#/docs/features/remote-data
const Table = ({
  title,
  columns,
  exportButton,
  getData,
  tableRef,
  handleRemoveItem,
  setEditEntityValues,
}: Props) => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>();
  const classes = useStyles();

  const deleteEntity = (id: string) => {
    try {
      handleRemoveItem(id);
      setConfirmDelete(false);
    } catch (error) {
      setConfirmDelete(false);
    }
  };

  return (
    <>
      <Modal open={confirmDelete} setOpen={setConfirmDelete}>
        <DeleteConfirmation
          name={selectedItem?.name as string}
          handleCancel={() => setConfirmDelete(false)}
          handleRemoveItem={() => deleteEntity(selectedItem?.id)}
          type={
            title?.toLowerCase().includes('institution')
              ? 'Institution'
              : 'Aricle'
          }
        />
      </Modal>
      <div className={classes.container}>
        <MaterialTable
          title={title || 'Table'}
          tableRef={tableRef}
          columns={columns}
          data={query =>
            new Promise(async (resolve, reject) => {
              const result = await getData(query.pageSize, query.page);
              resolve({
                data: result.data,
                page: result.currentPage,
                totalCount: result.totalCount,
              });
            })
          }
          actions={[
            {
              icon: 'edit',
              tooltip: `Edit ${title}`,
              onClick: (event, rowData) => {
                setEditEntityValues(rowData);
              },
            },
            rowData => ({
              icon: 'delete',
              tooltip: `Delete ${title}`,
              onClick: (event, rowData) => {
                setSelectedItem(rowData);
                setConfirmDelete(true);
              },
            }),
          ]}
          options={{
            exportButton,
            actionsColumnIndex: -1,
          }}
        />
      </div>
    </>
  );
};

export default Table;
