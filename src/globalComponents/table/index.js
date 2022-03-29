import { Table } from "antd";
import React from "react";

const DefaultTable = ({ columns = [], data = [] }) => {
  
  return <Table className="custom-table" columns={columns} dataSource={data} />;
};

export default DefaultTable;
