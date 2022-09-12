import React from "react";
import DataTable from "react-data-table-component";

function BasicTable({ columns, data }) {
  return <DataTable columns={columns} data={data} />;
}

export default BasicTable;
