import { Table } from "antd";
import React from "react";

const DefaultTable = ({ columns = [], data = [] }) => {
  return <Table className="custom-table" columns={columns} data={data} />;
};

export default DefaultTable;
