import { Button, Form, Select, Space } from "antd";
import {
  EditOutlined,
  SearchOutlined,
  PlusOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
import React, { useRef } from "react";
import { WrapperHeader, WrapperUploadFile } from "./style";
import TableUserComponent from "../../components/TableUserComponent/TableUserComponent";
import { useState } from "react";
import InputComponent from "../../components/InputComponent/InputComponent";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserService";
import * as MedicineService from "../../services/MedicineService";
import Loading from "../../components/LoadingComponent/Loading";
import { useEffect } from "react";
import * as message from "../../components/Message/Message";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import DrawerComponent from "../../components/DrawerComponent/DrawerComponent";
import { useSelector } from "react-redux";

const MyDoctorPage = () => {
  const [rowSelected, setRowSelected] = useState("");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isOpenDrawer2, setIsOpenDrawer2] = useState(false);
  const [isOpenDrawer3, setIsOpenDrawer3] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const user = useSelector((state) => state?.user);
  const queryClient = useQueryClient();
  const searchInput = useRef(null);
  const inittial = () => ({
    day: "",
    doctorname: "",
    information_daily: "",
  });
  const [stateHistory, setStateHistory] = useState(inittial());
  //
  const inittial2 = () => ({
    date: 0,
    month: 0,
    year: 0,
    content: "",
  });
  const [stateEventData, setStateEventData] = useState(inittial2());
  //
  const inittial3 = () => ({
    type: "",
    medicinename: "",
  });
  const [stateMedicine, setStateMedicine] = useState(inittial3());

  const [form] = Form.useForm();

  // Sử dụng mutation để cập nhật dữ liệu trên data

  const mutationUpdate = useMutationHooks((data) => {
    const { id, ...rests } = data;
    const res = UserService.updatetreatmentHistory(id, { ...rests });
    return res;
  });

  const {
    data: dataUpdated,
    isLoading: isLoadingUpdated,
    isSuccess: isSuccessUpdated,
    isError: isErrorUpdated,
  } = mutationUpdate;
  //
  const mutationUpdateE = useMutationHooks((data) => {
    const { id, ...rests } = data;
    const res = UserService.updateEventData(id, { ...rests });
    return res;
  });

  const {
    data: dataE,
    isLoading: isLoadingE,
    isSuccess: isSuccessE,
    isError: isErrorE,
  } = mutationUpdateE;
  //
  const mutationUpdateMedicine = useMutationHooks((data) => {
    const { id, ...rests } = data;
    const res = UserService.updateMedicine(id, { ...rests });
    return res;
  });

  const {
    data: dataM,
    isLoading: isLoadingM,
    isSuccess: isSuccessM,
    isError: isErrorM,
  } = mutationUpdateMedicine;

  //
  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === "OK") {
      message.success();
      handleCloseDrawer();
    } else if (isErrorUpdated) {
      message.error();
    }
  }, [isSuccessUpdated]);
  useEffect(() => {
    if (isSuccessE && dataE?.status === "OK") {
      message.success();
      handleCloseDrawer2();
    } else if (isErrorE) {
      message.error();
    }
  }, [isSuccessE]);
  useEffect(() => {
    if (isSuccessM && dataM?.status === "OK") {
      message.success();
      handleCloseDrawer3();
    } else if (isErrorE) {
      message.error();
    }
  }, [isSuccessM]);

  // Truy vấn dữ liệu từ database

  const handleHistory = () => {
    setIsOpenDrawer(true);
  };

  const handleEvent = () => {
    setIsOpenDrawer2(true);
  };

  const handleMedicine = () => {
    setIsOpenDrawer3(true);
  };

  const renderAction = () => {
    return (
      <div>
        <EditOutlined
          style={{ color: "orange", fontSize: "30px", cursor: "pointer" }}
          onClick={handleHistory}
        />
      </div>
    );
  };

  const renderAction2 = () => {
    return (
      <div>
        <PlusOutlined
          style={{ color: "green", fontSize: "30px", cursor: "pointer" }}
          onClick={handleEvent}
        />
      </div>
    );
  };

  const renderAction3 = () => {
    return (
      <div>
        <MedicineBoxOutlined
          style={{ color: "green", fontSize: "30px", cursor: "pointer" }}
          onClick={handleMedicine}
        />
      </div>
    );
  };

  const getDoctorcourse = async () => {
    const res = await UserService.getDoctorcourse(user?.id);
    return res;
  };

  const queryDoctorcourse = useQuery({
    queryKey: "doctorcourse",
    queryFn: getDoctorcourse,
  });

  const { isLoading: isLoadingDoctorcourse, data: Doctorcourse } =
    queryDoctorcourse;

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    // setSearchText(selectedKeys[0]);
    // setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    // setSearchText('');
  };

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

  //Khu vuc cap nhat thuoc
  const fetchAllTypeMedicine = async () => {
    const res = await MedicineService.getAlltype();
    return res;
  };

  const typemedicine = useQuery({
    queryKey: ["typemedicine"],
    queryFn: fetchAllTypeMedicine,
  });

  // Bảng và thông tin hiển thị
  const columns = [
    {
      title: "Tên bệnh nhân",
      dataIndex: "patientName",
      ...getColumnSearchProps("patientName"),
    },
    {
      title: "Tên chương trình",
      dataIndex: "nameOrder",
      ...getColumnSearchProps("nameOrder"),
    },
    {
      title: "Tên thuốc ngoài chương trình",
      dataIndex: "Medicine",
      render: (Medicine) => (
        <ul>
          {Medicine.map((item, index) => (
            <li key={index}>{item.medicinename}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Cập nhật tình hình bệnh nhân",
      dataIndex: "action",
      render: renderAction,
    },
    {
      title: "Đặt lịch gặp cho bệnh nhân",
      dataIndex: "action2",
      render: renderAction2,
    },
    {
      title: "Thêm thuốc ngoài chương trình",
      dataIndex: "action3",
      render: renderAction3,
    },
  ];
  const dataTable =
    Doctorcourse?.data?.length &&
    Doctorcourse?.data?.map((Doctorcourse) => {
      return { ...Doctorcourse, key: Doctorcourse._id };
    });

  //Thiết lập các hành động của form
  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
    setStateHistory({
      day: "",
      doctorname: "",
      information_daily: "",
    });
    form.resetFields();
  };

  const handleCloseDrawer2 = () => {
    setIsOpenDrawer2(false);
    setStateEventData({
      date: 0,
      month: 0,
      year: 0,
      content: "",
    });
    form.resetFields();
  };

  const handleCloseDrawer3 = () => {
    setIsOpenDrawer3(false);
    setStateMedicine({
      medicinename: "",
    });
    form.resetFields();
  };
  //

  const handleOnchangeDetails = (e) => {
    setStateHistory({
      ...stateHistory,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnchangeDetails2 = (e) => {
    setStateEventData({
      ...stateEventData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnchangeDetails3 = (e) => {
    setStateMedicine({
      ...stateMedicine,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeSelectType = (value) => {
    setStateMedicine({
      ...stateMedicine,
      type: value,
    });
  };
  const handleChangeMedicineName = (value) => {
    setStateMedicine({
      ...stateMedicine,
      medicinename: value,
    });
  };

  //

  const onUpdateProduct = () => {
    mutationUpdate.mutate({
      id: rowSelected,
      ...stateHistory,
    });
  };

  const onUpdateEventData = () => {
    mutationUpdateE.mutate({
      id: rowSelected,
      ...stateEventData,
    });
  };

  const onUpdateMedicine = () => {
    mutationUpdateMedicine.mutate(
      {
        id: rowSelected,
        ...stateMedicine,
      },
      {
        onSettled: () => {
          queryClient.invalidateQueries(["Medicine"]);
        },
      }
    );
  };

  const renderOptions = (arr) => {
    let results = [];
    if (arr) {
      results = arr?.map((opt) => {
        return {
          value: opt,
          label: opt,
        };
      });
    }
    return results;
  };

  // Tên thuốc từng type

  const fetchAllTablets = async () => {
    const res = await MedicineService.getAllTabletsname();
    return res;
  };

  const Tablets = useQuery({
    queryKey: ["doctor2"],
    queryFn: fetchAllTablets,
  });
  const TabletsNames = Tablets?.data?.data?.map((medicine) => medicine.name);

  return (
    <div>
      {/*Hiển thị phần quản lí sản phẩm */}
      <WrapperHeader>Quản lý bệnh nhân đang điều trị</WrapperHeader>

      {/* Bảng hiển thị sản phẩm */}
      <div style={{ marginTop: "20px" }}>
        <TableUserComponent
          columns={columns}
          isLoading={isLoadingDoctorcourse}
          data={dataTable}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setRowSelected(record.OrderId);
              },
            };
          }}
        />
      </div>

      <DrawerComponent
        title="Cập nhật lịch sử khám bệnh"
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        width="90%"
      >
        <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>
          <Form
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={onUpdateProduct}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Ngày"
              name="day"
              rules={[{ required: true, message: "Please input day!" }]}
            >
              <InputComponent
                value={stateHistory["day"]}
                onChange={handleOnchangeDetails}
                name="name"
              />
            </Form.Item>
            <Form.Item
              label="Tên bác sĩ"
              name="doctorname"
              rules={[{ required: true, message: "Please input doctor name!" }]}
            >
              <InputComponent
                value={stateHistory["doctorname"]}
                onChange={handleOnchangeDetails}
                name="doctorname"
              />
            </Form.Item>
            <Form.Item
              label="Thông tin"
              name="information_daily"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <InputComponent
                value={stateHistory["information_daily"]}
                onChange={handleOnchangeDetails}
                name="information_daily"
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </DrawerComponent>

      <DrawerComponent
        title="Cập nhật lịch gặp bệnh nhân"
        isOpen={isOpenDrawer2}
        onClose={() => setIsOpenDrawer2(false)}
        width="90%"
      >
        <Loading isLoading={isLoadingE}>
          <Form
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={onUpdateEventData}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Ngày"
              name="date"
              rules={[{ required: true, message: "Please input day!" }]}
            >
              <InputComponent
                value={stateEventData["date"]}
                onChange={handleOnchangeDetails2}
                name="date"
              />
            </Form.Item>
            <Form.Item
              label="Tháng"
              name="month"
              rules={[{ required: true, message: "Please input month!" }]}
            >
              <InputComponent
                value={stateEventData["month"]}
                onChange={handleOnchangeDetails2}
                name="month"
              />
            </Form.Item>
            <Form.Item
              label="Năm"
              name="year"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <InputComponent
                value={stateEventData["year"]}
                onChange={handleOnchangeDetails2}
                name="year"
              />
            </Form.Item>
            <Form.Item
              label="Nội dung"
              name="content"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <InputComponent
                value={stateEventData["content"]}
                onChange={handleOnchangeDetails2}
                name="content"
              />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </DrawerComponent>

      <DrawerComponent
        title="Thêm thuốc ngoài chương trình"
        isOpen={isOpenDrawer3}
        onClose={() => setIsOpenDrawer3(false)}
        width="90%"
      >
        <Loading isLoading={isLoadingM}>
          <Form
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={onUpdateMedicine}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Type"
              name="type"
              rules={[{ required: true, message: "Please input type!" }]}
            >
              <Select
                name="type"
                value={stateMedicine.type}
                onChange={handleChangeSelectType}
                options={renderOptions(typemedicine?.data?.data)}
              />
            </Form.Item>

            {stateMedicine.type === "viên nén" && (
              <Form.Item
                label="Tên thuốc"
                name="medicinename"
                rules={[
                  { required: true, message: "Please choose Medicinename!" },
                ]}
              >
                <Select
                  name="medicinename"
                  value={stateMedicine.medicinename}
                  onChange={handleChangeMedicineName}
                  options={renderOptions(TabletsNames)}
                />
              </Form.Item>
            )}

            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </DrawerComponent>
    </div>
  );
};

export default MyDoctorPage;
