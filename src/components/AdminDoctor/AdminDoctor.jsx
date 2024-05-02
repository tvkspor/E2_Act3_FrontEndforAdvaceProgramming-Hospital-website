import { Button, Form, Select, Space, DatePicker } from "antd";
import {
  PlusOutlined,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import React, { useRef } from "react";
import { WrapperHeader, WrapperUploadFile, WrapperLabel, WrapperInput } from "./style";
import TableComponent from "../TableComponent/TableComponent";
import { useState } from "react";
import InputComponent from "../InputComponent/InputComponent";
import { getBase64, renderOptions } from "../../utils";
import * as DoctorService from "../../services/DoctorService";
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import { useEffect } from "react";
import * as message from "../../components/Message/Message";
import { useQuery } from "@tanstack/react-query";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { useSelector } from "react-redux";
import ModalComponent from "../ModalComponent/ModalComponent";
import moment from "moment";

const AdminDoctor = () => {
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowSelected, setRowSelected] = useState("");
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const user = useSelector((state) => state?.user);
  const searchInput = useRef(null);
  const inittial = () => ({
    name: "",
    phone: "",
    address: "",
    avatar: "",
    dateofbirth: "",
    sex: "",
    department: "",
  });
  const [stateDoctor, setStateDoctor] = useState(inittial());
  const [stateDoctorDetails, setStateDoctorDetails] = useState(inittial());

  const [form] = Form.useForm();

  // Sử dụng mutation để cập nhật dữ liệu trên data
  const mutation = useMutationHooks((data) => {
    const { name, phone, address, avatar, dateofbirth, sex, department } = data;
    const res = DoctorService.createDoctor({
      name,
      phone,
      address,
      avatar,
      dateofbirth,
      sex,
      department,
    });
    return res;
  });
  const mutationUpdate = useMutationHooks((data) => {
    const { id, token, ...rests } = data;
    const res = DoctorService.updateDoctor(id, token, { ...rests });
    return res;
  });

  const mutationDeleted = useMutationHooks((data) => {
    const { id, token } = data;
    const res = DoctorService.deleteDoctor(id, token);
    return res;
  });

  const mutationDeletedMany = useMutationHooks((data) => {
    const { token, ...ids } = data;
    const res = DoctorService.deleteManyDoctor(ids, token);
    return res;
  });
  const { data, isLoading, isSuccess, isError } = mutation;
  const {
    data: dataUpdated,
    isLoading: isLoadingUpdated,
    isSuccess: isSuccessUpdated,
    isError: isErrorUpdated,
  } = mutationUpdate;
  const {
    data: dataDeleted,
    isLoading: isLoadingDeleted,
    isSuccess: isSuccessDelected,
    isError: isErrorDeleted,
  } = mutationDeleted;
  const {
    data: dataDeletedMany,
    isLoading: isLoadingDeletedMany,
    isSuccess: isSuccessDelectedMany,
    isError: isErrorDeletedMany,
  } = mutationDeletedMany;

  useEffect(() => {
    if (isSuccess && data?.status === "OK") {
      message.success();
      handleCancel();
    } else if (isError) {
      message.error();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isSuccessDelectedMany && dataDeletedMany?.status === "OK") {
      message.success();
    } else if (isErrorDeletedMany) {
      message.error();
    }
  }, [isSuccessDelectedMany]);

  useEffect(() => {
    if (isSuccessDelected && dataDeleted?.status === "OK") {
      message.success();
      handleCancelDelete();
    } else if (isErrorDeleted) {
      message.error();
    }
  }, [isSuccessDelected]);

  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === "OK") {
      message.success();
      handleCloseDrawer();
    } else if (isErrorUpdated) {
      message.error();
    }
  }, [isSuccessUpdated]);

  // Truy vấn dữ liệu từ database
  const getAllDoctors = async () => {
    const res = await DoctorService.getAllDoctor();
    return res;
  };
  const fetchAllTypeDoctor = async () => {
    const res = await DoctorService.getAllTypeDoctor();
    return res;
  };

  const queryDoctor = useQuery({
    queryKey: ["doctors"],
    queryFn: getAllDoctors,
  });
  const TypeDoctor = useQuery({
    queryKey: ["type-doctor"],
    queryFn: fetchAllTypeDoctor,
  });
  const { isLoading: isLoadingDoctors, data: doctors } = queryDoctor;

  const fetchGetDetailsDoctor = async (rowSelected) => {
    const res = await DoctorService.getDetailsDoctor(rowSelected);
    if (res?.data) {
      setStateDoctorDetails({
        name: res?.data?.name,
        phone: res?.data?.phone,
        address: res?.data?.address,
        avatar: res?.data?.avatar,
        dateofbirth: res?.data?.dateofbirth,
        sex: res?.data?.sex,
        department: res?.data?.department,
      });
    }
    setIsLoadingUpdate(false);
  };

  useEffect(() => {
    if (!isModalOpen) {
      form.setFieldsValue(stateDoctorDetails);
    } else {
      form.setFieldsValue(inittial());
    }
  }, [form, stateDoctorDetails, isModalOpen]);

  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      setIsLoadingUpdate(true);
      fetchGetDetailsDoctor(rowSelected);
    }
  }, [rowSelected, isOpenDrawer]);

  const handleDetailsDoctor = () => {
    setIsOpenDrawer(true);
  };

  const handleDelteManyDoctors = (ids) => {
    mutationDeletedMany.mutate(
      { ids: ids, token: user?.access_token },
      {
        onSettled: () => {
          queryDoctor.refetch();
        },
      }
    );
  };

  // Các thành phần, thuộc tính của bảng
  const renderAction = () => {
    return (
      <div>
        <DeleteOutlined
          style={{ color: "red", fontSize: "30px", cursor: "pointer" }}
          onClick={() => setIsModalOpenDelete(true)}
        />
        <EditOutlined
          style={{ color: "orange", fontSize: "30px", cursor: "pointer" }}
          onClick={handleDetailsDoctor}
        />
      </div>
    );
  };

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

  // Bảng và thông tin hiển thị
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      ...getColumnSearchProps("name"),
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Dateofbirth",
      dataIndex: "dateofbirth",
      render: (dateofbirth) => moment(dateofbirth).format("DD-MM-YYYY"),
    },
    {
      title: "Sex",
      dataIndex: "sex",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: renderAction,
    },
  ];
  const dataTable =
    doctors?.data?.length &&
    doctors?.data?.map((doctor) => {
      return { ...doctor, key: doctor._id };
    });

  //Thiết lập các hành động của form
  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
    setStateDoctorDetails({
      name: "",
      phone: "",
      address: "",
      avatar: "",
      dateofbirth: new Date("2024-04-14"),
      sex: "",
      department: "",
    });
    form.resetFields();
  };
  const handleCancelDelete = () => {
    setIsModalOpenDelete(false);
  };

  const handleDeleteDoctor = () => {
    mutationDeleted.mutate(
      { id: rowSelected, token: user?.access_token },
      {
        onSettled: () => {
          queryDoctor.refetch();
        },
      }
    );
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setStateDoctor({
      name: "",
      phone: "",
      address: "",
      avatar: "",
      dateofbirth: new Date("2024-04-14"),
      sex: "",
      department: "",
    });
    form.resetFields();
  };

  const onFinish = () => {
    const params = {
      name: stateDoctor.name,
      phone: stateDoctor.phone,
      address: stateDoctor.address,
      avatar: stateDoctor.avatar,
      dateofbirth: stateDoctor.dateofbirth,
      sex: stateDoctor.sex,
      department: stateDoctor.depar,
    };
    mutation.mutate(params, {
      onSettled: () => {
        queryDoctor.refetch();
      },
    });
  };

  const handleOnchange = (e) => {
    setStateDoctor({
      ...stateDoctor,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnchangeDetails = (e) => {
    setStateDoctorDetails({
      ...stateDoctorDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnchangeAvatar = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateDoctor({
      ...stateDoctor,
      avatar: file.preview,
    });
  };

  const handleOnchangeAvatarDetails = async ({ fileList }) => {
    const file = fileList[0];
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setStateDoctorDetails({
      ...stateDoctorDetails,
      avatar: file.preview,
    });
  };
  const onUpdateDoctor = () => {
    mutationUpdate.mutate(
      { id: rowSelected, token: user?.access_token, ...stateDoctorDetails },
      {
        onSettled: () => {
          queryDoctor.refetch();
        },
      }
    );
  };

  const handleChangeSelect = (value) => {
    setStateDoctor({
      ...stateDoctor,
      department: value,
    });
  };

  const handleDateChangeDetails = (date) => {
    // Update stateItemDetails with the selected date
    setStateDoctorDetails({ ...stateDoctorDetails, dateofbirth: date });
  };

  return (
    <div>
      {/*Hiển thị phần quản lí sản phẩm */}
      <WrapperHeader>Quản lý sản phẩm</WrapperHeader>

      {/* Nút bấm */}
      <div style={{ marginTop: "10px" }}>
        <Button
          style={{
            height: "60px",
            width: "60px",
            borderRadius: "6px",
            borderStyle: "dashed",
          }}
          onClick={() => setIsModalOpen(true)}
        >
          <PlusOutlined style={{ fontSize: "30px" }} />
        </Button>
      </div>

      {/* Bảng hiển thị bác sĩ */}
      <div style={{ marginTop: "20px" }}>
        <TableComponent
          handleDelteMany={handleDelteManyDoctors}
          columns={columns}
          isLoading={isLoadingDoctors}
          data={dataTable}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setRowSelected(record._id);
              },
            };
          }}
        />
      </div>

      {/* Bảng để nhập sản phẩm */}
      <ModalComponent
        forceRender
        title="Tạo sản phẩm"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Loading isLoading={isLoading}>
          <Form
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            onFinish={onFinish}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <InputComponent
                value={stateDoctor["name"]}
                onChange={handleOnchange}
                name="name"
              />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please input your phone!" }]}
            >
              <InputComponent
                value={stateDoctor.phone}
                onChange={handleOnchange}
                name="phone"
              />
            </Form.Item>
            <Form.Item
              label="Department"
              name="department"
              rules={[
                { required: true, message: "Please input your department!" },
              ]}
            >
              <InputComponent
                value={stateDoctor.department}
                onChange={handleOnchange}
                name="department"
              />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                { required: true, message: "Please input your count address!" },
              ]}
            >
              <InputComponent
                value={stateDoctor.address}
                onChange={handleOnchange}
                name="address"
              />
            </Form.Item>
            <Form.Item
              label="Dateofbirth "
              name="dateofbirth"
              rules={[
                { required: true, message: "Please input your dateofbirth!" },
              ]}
            >
              <InputComponent
                value={stateDoctor.dateofbirth}
                onChange={handleOnchange}
                name="dateofbirth"
              />
            </Form.Item>
            <Form.Item
              label="Sex"
              name="sex"
              rules={[
                {
                  required: true,
                  message: "Please input your count sex!",
                },
              ]}
            >
              <InputComponent
                value={stateDoctor.sex}
                onChange={handleOnchange}
                name="sex"
              />
            </Form.Item>
            <Form.Item
              label="Avatar"
              name="avatar"
              rules={[
                { required: true, message: "Please input your count avatar!" },
              ]}
            >
              <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                <Button>Select File</Button>
                {stateDoctor?.avatar && (
                  <img
                    src={stateDoctor?.avatar}
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginLeft: "10px",
                    }}
                    alt=""
                  />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </ModalComponent>

      <DrawerComponent
        title="Chi tiết bác sĩ"
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        width="90%"
      >
        <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>
          <Form
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={onUpdateDoctor}
            autoComplete="on"
            form={form}
          >
            <WrapperInput>
              <WrapperLabel>Ngày sinh</WrapperLabel>
              <DatePicker
                //defaultValue={moment(stateItemDetails.importDate)}
                format={dateFormatList}
                onChange={handleDateChangeDetails}
              />
            </WrapperInput>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <InputComponent
                value={stateDoctorDetails["name"]}
                onChange={handleOnchangeDetails}
                name="name"
              />
            </Form.Item>
            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please input your phone!" }]}
            >
              <InputComponent
                value={stateDoctorDetails.phone}
                onChange={handleOnchangeDetails}
                name="phone"
              />
            </Form.Item>
            <Form.Item
              label="Department"
              name="department"
              rules={[
                { required: true, message: "Please input your department!" },
              ]}
            >
              <InputComponent
                value={stateDoctorDetails.department}
                onChange={handleOnchangeDetails}
                name="department"
              />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                { required: true, message: "Please input your count address!" },
              ]}
            >
              <InputComponent
                value={stateDoctorDetails.address}
                onChange={handleOnchangeDetails}
                name="address"
              />
            </Form.Item>
            {/* <Form.Item
              label="Dateofbirth"
              name="dateofbirth"
              rules={[
                { required: true, message: "Please input your dateofbirth!" },
              ]}
            >
              <InputComponent
                value={stateDoctorDetails.dateofbirth}
                onChange={handleOnchangeDetails}
                name="dateofbirth"
              />
            </Form.Item> */}

            <Form.Item
              label="Sex"
              name="sex"
              rules={[
                {
                  required: true,
                  message: "Please input your count sex!",
                },
              ]}
            >
              <InputComponent
                value={stateDoctorDetails.sex}
                onChange={handleOnchangeDetails}
                name="sex"
              />
            </Form.Item>
            <Form.Item
              label="Avatar"
              name="avatar"
              rules={[
                { required: true, message: "Please input your count avatar!" },
              ]}
            >
              <WrapperUploadFile
                onChange={handleOnchangeAvatarDetails}
                maxCount={1}
              >
                <Button>Select File</Button>
                {stateDoctorDetails?.avatar && (
                  <img
                    src={stateDoctorDetails?.avatar}
                    style={{
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginLeft: "10px",
                    }}
                    alt=""
                  />
                )}
              </WrapperUploadFile>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Apply
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </DrawerComponent>

      <ModalComponent
        title="Xóa sản phẩm"
        open={isModalOpenDelete}
        onCancel={handleCancelDelete}
        onOk={handleDeleteDoctor}
      >
        <Loading isLoading={isLoadingDeleted}>
          <div>Bạn có chắc xóa bác sĩ này không?</div>
        </Loading>
      </ModalComponent>
    </div>
  );
};

export default AdminDoctor;
