import React, { createRef, useState } from 'react';
import { getEntityDataForTable } from '../../services';
import PageHeader from '../../ui-components/PageHeader/PageHeader';
import Table, { ResponseDataType } from '../../ui-components/Table/Table';
import UsersForm from '../../ui-components/Users/Users';
const columns = [
  { title: 'Id', field: 'id' },
  { title: 'Name', field: 'name' },
  { title: 'Role', field: 'role' },
];

const Users = () => {
  const [open, setOpen] = useState(false);
  const tableRef = createRef<any>();

  const getPaginatedUsersData = async (
    pageSize: number,
    page: number,
  ): Promise<ResponseDataType> => {
    try {
      const response = await getEntityDataForTable('Users', pageSize, page);
      const {
        entityList: data,
        currentPage,
        totalItems: totalCount,
      } = response.data;
      return { data, currentPage, totalCount };
    } catch (error) {
      throw error;
    }
  };
  const handleDeleteUser = async (userId: string): Promise<any> => {};
  const setInitialValuesForUser = async (): Promise<any> => {};
  return (
    <>
      <PageHeader
        title="Users"
        buttonTitle="Create User"
        buttonVariant="primary"
        setOpen={() => setOpen(true)}
      />
      <UsersForm />
      <Table
        columns={columns}
        title={'Users'}
        exportButton
        getData={getPaginatedUsersData}
        tableRef={tableRef}
        handleRemoveItem={handleDeleteUser}
        setEditEntityValues={setInitialValuesForUser}
      />
    </>
  );
};

export default Users;
