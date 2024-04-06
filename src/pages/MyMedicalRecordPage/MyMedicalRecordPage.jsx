import InputComponent from "../../components/InputComponent/InputComponent";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Select, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React, { useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import TableUserComponent from "../../components/TableUserComponent/TableUserComponent";
import * as UserService from "../../services/UserService";

const MyMedicalRecordPage = () => {
  const user = useSelector((state) => state.user);
  const searchInput = useRef(null);

  const getTreatmenthistory = async () => {
    const res = await UserService.getTreatmenthistory(user?.id);
    return res;
  };

  const getTreatment = async () => {
    const res = await UserService.getTreatment(user?.id);
    return res;
  };

  const queryTreatmenthistory = useQuery({
    queryKey: "treatmenthistory",
    queryFn: getTreatmenthistory,
  });

  const queryTreatment = useQuery({
    queryKey: "treatment",
    queryFn: getTreatment,
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
  };
  const handleReset = (clearFilters) => {
    clearFilters();
  };

  const { isLoading: isLoadingTreatmenthistory, data: treatmenthistory } =
    queryTreatmenthistory;

  const { isLoading: isLoadingTreatment, data: treatment } = queryTreatment;

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <InputComponent
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    // render: (text) =>
    //   searchedColumn === dataIndex ? (
    //     // <Highlighter
    //     //   highlightStyle={{
    //     //     backgroundColor: '#ffc069',
    //     //     padding: 0,
    //     //   }}
    //     //   searchWords={[searchText]}
    //     //   autoEscape
    //     //   textToHighlight={text ? text.toString() : ''}
    //     // />
    //   ) : (
    //     text
    //   ),
  });

  // Bảng và thông tin hiển thị
  const columns1 = [
    {
      title: "Tên chương trình",
      dataIndex: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Tiến trình (/100)",
      dataIndex: "progress",
      ...getColumnSearchProps("progress"),
    },
  ];
  const columns2 = [
    {
      title: "Ngày",
      dataIndex: "day",
      ...getColumnSearchProps("day"),
    },
    {
      title: "Tình trạng sức khỏe",
      dataIndex: "information_daily",
      ...getColumnSearchProps("information_daily"),
    },
    {
      title: "Bác sĩ cập nhật",
      dataIndex: "doctorname",
      ...getColumnSearchProps("doctor"),
    },
  ];
  const dataTable1 =
    treatment?.data?.length &&
    treatment?.data?.map((treatment) => {
      return { ...treatment, key: treatment._id };
    });
  const dataTable2 =
    treatmenthistory?.data?.length &&
    treatmenthistory?.data?.map((treatmenthistory) => {
      return { ...treatmenthistory, key: treatmenthistory._id };
    });

  return (
    <div>
      <h1 style={{ color: "#000", fontSize: "14px" }}>Gói chữa bệnh của tôi</h1>
      <div style={{ marginTop: "20px" }}>
        <TableUserComponent
          columns={columns1}
          isLoading={isLoadingTreatment}
          data={dataTable1}
        />
      </div>
      <h1 style={{ color: "#000", fontSize: "14px" }}>
        Quản lý lịch trình khám bệnh
      </h1>
      <div style={{ marginTop: "20px" }}>
        <TableUserComponent
          columns={columns2}
          isLoading={isLoadingTreatmenthistory}
          data={dataTable2}
        />
      </div>
    </div>
  );
};

export default MyMedicalRecordPage;
