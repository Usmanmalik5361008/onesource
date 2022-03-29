import React from "react";

import { printerIcon, downloadArrow, SEARCH_ICON } from "assets";
import { FormField, Button, DefaultTable } from "globalComponents";
import "./index.scss";

const Staff = () => {
  const fieldStyle = {
    width: 150,
  };

  const staffColumns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const staffData = [
    {
      key: -1,
      name: `Edward King ${-1}`,
      age: 32,
      address: `London, Park Lane no. ${-1}`,
    },
  ];

  for (let i = 0; i < 20; i++) {
    staffData.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <div className="staff-page-wrapper">
      <div className="card-view">
        <div className="filters-wrapper">
          <FormField prependIcon={SEARCH_ICON} style={fieldStyle} />
          <FormField as="select" style={fieldStyle} />
          <FormField as="select" style={fieldStyle} />
        </div>
        <div className="actions-wrapper">
          <Button type="primary" title="New Staff" />
          <Button
            type="colored"
            bgColor="aquablue"
            prependIcon={downloadArrow}
          />
          <Button type="colored" bgColor="orange" prependIcon={printerIcon} />
        </div>
      </div>
      <div className="staff-listing-wrapper">
        <DefaultTable data={staffData} columns={staffColumns} />
      </div>
    </div>
  );
};

export default Staff;
