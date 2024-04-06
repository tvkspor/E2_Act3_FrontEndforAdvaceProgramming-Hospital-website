import { Table } from "antd";
import React, { useState } from "react";
import Loading from "../../components/LoadingComponent/Loading";
import { useMemo } from "react";

const TableUserComponent = (props) => {
  const {
    selectionType = "checkbox",
    data: dataSource = [],
    isLoading = false,
    columns = [],
    handleDelteMany,
  } = props;
  const [rowSelectedKeys, setRowSelectedKeys] = useState([]);
  const newColumnExport = useMemo(() => {
    const arr = columns?.filter((col) => col.dataIndex !== "action");
    return arr;
  }, [columns]);

  return (
    <Loading isLoading={isLoading}>
      <Table columns={columns} dataSource={dataSource} {...props} />
    </Loading>
  );
};

export default TableUserComponent;
