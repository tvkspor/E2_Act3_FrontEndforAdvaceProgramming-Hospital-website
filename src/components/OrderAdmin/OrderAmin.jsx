import { Button, Form, Space, Select } from "antd";
import React from "react";
import { WrapperHeader, WrapperUploadFile, CustomCheckbox } from "./style";
import TableComponent from "../TableComponent/TableComponent";
import InputComponent from "../InputComponent/InputComponent";
import { convertPrice, getBase64 } from "../../utils";
import { useState } from "react";
import { useEffect } from "react";
import * as OrderService from "../../services/OrderService";
import * as DoctorService from "../../services/DoctorService";
import { useQuery } from "@tanstack/react-query";
import { CheckOutlined, EditOutlined, SearchOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import * as ProductService from "../../services/ProductService";
import * as UserService from "../../services/UserService";
import Loading from "../../components/LoadingComponent/Loading";
import { orderContant } from "../../contant";
import PieChartComponent from "./PieChart";
import { useMutationHooks } from "../../hooks/useMutationHook";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import * as message from "../../components/Message/Message";

const OrderAdmin = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const order = useSelector((state) => state?.order);
  const user = useSelector((state) => state?.user);
  const [rowSelected, setRowSelected] = useState("");
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);

  const inittial = () => ({
    paymentMethod: "",
    itemsPrice: 0,
    totalPrice: 0,
    doctor: "",
    type: "",
    isChecked: false,
    user: "",
  });
  const [stateOrderDetails, setStateOrderDetails] = useState(inittial());
  const [form] = Form.useForm();

  const mutation = useMutationHooks((data) => {
    const { paymentMethod, itemsPrice, totalPrice } = data;
    const res = ProductService.createProduct({
      paymentMethod,
      itemsPrice,
      totalPrice,
    });
    return res;
  });

  const mutationUpdate = useMutationHooks((data) => {
    const { id, ...rests } = data;
    const res = OrderService.updateOrder(id, { ...rests });
    return res;
  });

  const mutationUpdateTreatment = useMutationHooks((data) => {
    const { id } = data;
    const res = UserService.updateTreatment(id);
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
    data: dataUpdatedTreatment,
    isLoading: isLoadingUpdatedTreatment,
    isSuccess: isSuccessUpdatedTreatment,
    isError: isErrorUpdatedTreatment,
  } = mutationUpdateTreatment;

  useEffect(() => {
    if (rowSelected && isOpenDrawer) {
      setIsLoadingUpdate(true);
      fetchGetDetailsOrder(rowSelected);
    }
  }, [rowSelected, isOpenDrawer]);

  const handleDetailsOrder = () => {
    setIsOpenDrawer(true);
  };

  useEffect(() => {
    form.setFieldsValue(stateOrderDetails);
  }, [form, stateOrderDetails]);

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
    setStateOrderDetails({
      paymentMethod: "",
      itemsPrice: 0,
      totalPrice: 0,
    });
    form.resetFields();
  };

  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === "OK") {
      message.success();
      handleCloseDrawer();
    } else if (isErrorUpdated) {
      message.error();
    }
  }, [isSuccessUpdated]);

  const handleChecked = () => {
    mutationUpdateTreatment.mutate({
      id: rowSelected,
    });
    mutationUpdate.mutate(
      { id: rowSelected, isChecked: true },
      {
        onSettled: () => {
          queryOrder.refetch();
        },
      }
    );
  };

  const renderAction = () => {
    return (
      <div>
        <EditOutlined
          style={{ color: "orange", fontSize: "30px", cursor: "pointer" }}
          onClick={handleDetailsOrder}
        />
        <a> </a>
        <CheckOutlined
          style={{ color: "green", fontSize: "30px", cursor: "pointer" }}
          onClick={handleChecked}
        />
      </div>
    );
  };

  const getAllOrderUnchecked = async () => {
    const res = await OrderService.getAllOrderUnchecked(user?.access_token);
    return res;
  };

  const queryOrder = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrderUnchecked,
  });

  const { isLoading: isLoadingOrders, data: orders } = queryOrder;

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
          // ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          // onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            // onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            // onClick={() => clearFilters && handleReset(clearFilters)}
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
        // setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });

  const fetchGetDetailsOrder = async (rowSelected) => {
    const res = await OrderService.getDetailsOrder(rowSelected);
    if (res?.data) {
      setStateOrderDetails({
        paymentMethod: res?.data?.paymentMethod,
        itemsPrice: res?.data?.itemsPrice,
        totalPrice: res?.data?.totalPrice,
      });
    }
    setIsLoadingUpdate(false);
  };

  const columns = [
    {
      title: "Tên bệnh nhân",
      dataIndex: "userName",
      sorter: (a, b) => a.userName.length - b.userName.length,
      ...getColumnSearchProps("userName"),
    },
    {
      title: "Các liệu trình đăng kí",
      dataIndex: "orderItems",
      render: (orderItems) => (
        <ul>
          {orderItems.map((item, index) => (
            <li key={index}>Name: {item.name}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Được phê duyệt",
      dataIndex: "isChecked",
      ...getColumnSearchProps("isChecked"),
    },
    {
      title: "Bác sĩ được phân công",
      dataIndex: "doctor",
      ...getColumnSearchProps("doctor"),
    },
    {
      title: "Chỉnh sửa",
      dataIndex: "action",
      render: renderAction,
    },
  ];

  const dataTable =
    orders?.data?.length &&
    orders?.data?.map((order) => {
      return {
        ...order,
        key: order._id,
        orderItems: order?.orderItems,
        userName: order?.shippingAddress?.fullName,
        phone: order?.shippingAddress?.phone,
        address: order?.shippingAddress?.address,
        paymentMethod: orderContant.payment[order?.paymentMethod],
        isChecked: order?.isChecked ? "TRUE" : "FALSE",
        totalPrice: convertPrice(order?.totalPrice),
      };
    });

  const handleOnchangeDetails = (e) => {
    setStateOrderDetails({
      ...stateOrderDetails,
      [e.target.name]: e.target.value,
    });
  };
  const onUpdateOrder = () => {
    mutationUpdate.mutate(
      { id: rowSelected, ...stateOrderDetails },
      {
        onSettled: () => {
          queryOrder.refetch();
        },
      }
    );
  };

  const onUpdateTreatment = () => {
    mutationUpdateTreatment.mutate({
      id: stateOrderDetails.user,
      ...stateOrderDetails,
    });
  };

  const handleChangeSelectType = (value) => {
    setStateOrderDetails({
      ...stateOrderDetails,
      type: value,
    });
  };

  const handleChangeSelect = (value) => {
    setStateOrderDetails({
      ...stateOrderDetails,
      doctor: value,
    });
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

  const fetchAllDoctorCardiology = async () => {
    const res = await DoctorService.getAllDoctorCardiology();
    return res;
  };
  const fetchAllDoctorNervesurgery = async () => {
    const res = await DoctorService.getAllDoctorNervesurgery();
    return res;
  };
  const fetchAllDoctorIntensivecare = async () => {
    const res = await DoctorService.getAllDoctorIntensivecare();
    return res;
  };
  const fetchAllDoctorMusculoskeletal = async () => {
    const res = await DoctorService.getAllDoctorMusculoskeletal();
    return res;
  };
  const fetchAllDoctorOtorhinology = async () => {
    const res = await DoctorService.getAllDoctorOtorhinology();
    return res;
  };
  const fetchAllDoctorPediatrics = async () => {
    const res = await DoctorService.getAllDoctorPediatrics();
    return res;
  };

  // Khu phân khoa
  const DoctorCardiology = useQuery({
    queryKey: ["doctor"],
    queryFn: fetchAllDoctorCardiology,
  });
  const doctorCardiologyNames = DoctorCardiology?.data?.data?.map(
    (doctor) => doctor.name
  );

  const DoctorNervesurgery = useQuery({
    queryKey: ["doctor2"],
    queryFn: fetchAllDoctorNervesurgery,
  });
  const doctorNervesugeryNames = DoctorNervesurgery?.data?.data?.map(
    (doctor) => doctor.name
  );

  const DoctorIntensivecare = useQuery({
    queryKey: ["doctor3"],
    queryFn: fetchAllDoctorIntensivecare,
  });
  const doctorIntensivecareNames = DoctorIntensivecare?.data?.data?.map(
    (doctor) => doctor.name
  );

  const DoctorMusculoskeletal = useQuery({
    queryKey: ["doctor4"],
    queryFn: fetchAllDoctorMusculoskeletal,
  });
  const doctorMusculoskeletalNames = DoctorMusculoskeletal?.data?.data?.map(
    (doctor) => doctor.name
  );

  const DoctorOtorhinology = useQuery({
    queryKey: ["doctor5"],
    queryFn: fetchAllDoctorOtorhinology,
  });
  const doctorOtorhinologyNames = DoctorOtorhinology?.data?.data?.map(
    (doctor) => doctor.name
  );

  const DoctorPediatrics = useQuery({
    queryKey: ["doctor6"],
    queryFn: fetchAllDoctorPediatrics,
  });
  const doctorPediatricsNames = DoctorPediatrics?.data?.data?.map(
    (doctor) => doctor.name
  );

  const fetchAllDepartmentDoctor = async () => {
    const res = await DoctorService.getAllDepartmentDoctor();
    return res;
  };

  const typeDepartment = useQuery({
    queryKey: ["type-department"],
    queryFn: fetchAllDepartmentDoctor,
  });

  return (
    <div>
      <WrapperHeader>Quản lý đơn khám</WrapperHeader>
      {/* <div style={{ height: 200, width: 200 }}>
        <PieChartComponent data={orders?.data} />
      </div> */}
      <div style={{ marginTop: "20px" }}>
        <TableComponent
          columns={columns}
          isLoading={isLoadingOrders}
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
      <DrawerComponent
        title="Chi tiết đơn hàng"
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        width="90%"
      >
        <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>
          <Form
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={onUpdateOrder}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="itemsPrice"
              name="itemsPrice"
              rules={[
                { required: true, message: "Please input your itemsPrice!" },
              ]}
            >
              <InputComponent
                value={stateOrderDetails["itemsPrice"]}
                onChange={handleOnchangeDetails}
                name="itemsPrice"
              />
            </Form.Item>
            <Form.Item
              label="Type"
              name="type"
              rules={[{ required: true, message: "Please input type!" }]}
            >
              <Select
                name="type"
                value={stateOrderDetails.type}
                onChange={handleChangeSelectType}
                options={renderOptions(typeDepartment?.data?.data)}
              />
            </Form.Item>
            {stateOrderDetails.type === "cardiology" && (
              <Form.Item
                label="Bác sĩ"
                name="doctor"
                rules={[{ required: true, message: "Please choose doctor!" }]}
              >
                <Select
                  name="doctor"
                  value={stateOrderDetails["Name"]}
                  onChange={handleChangeSelect}
                  options={renderOptions(doctorCardiologyNames)}
                />
              </Form.Item>
            )}
            {stateOrderDetails.type === "intensive care" && (
              <Form.Item
                label="Bác sĩ"
                name="doctor"
                rules={[{ required: true, message: "Please choose doctor!" }]}
              >
                <Select
                  name="doctor"
                  value={stateOrderDetails["Name"]}
                  onChange={handleChangeSelect}
                  options={renderOptions(doctorIntensivecareNames)}
                />
              </Form.Item>
            )}
            {stateOrderDetails.type === "musculoskeletal" && (
              <Form.Item
                label="Bác sĩ"
                name="doctor"
                rules={[{ required: true, message: "Please choose doctor!" }]}
              >
                <Select
                  name="doctor"
                  value={stateOrderDetails["Name"]}
                  onChange={handleChangeSelect}
                  options={renderOptions(doctorMusculoskeletalNames)}
                />
              </Form.Item>
            )}
            {stateOrderDetails.type === "otorhinology" && (
              <Form.Item
                label="Bác sĩ"
                name="doctor"
                rules={[{ required: true, message: "Please choose doctor!" }]}
              >
                <Select
                  name="doctor"
                  value={stateOrderDetails["Name"]}
                  onChange={handleChangeSelect}
                  options={renderOptions(doctorOtorhinologyNames)}
                />
              </Form.Item>
            )}
            {stateOrderDetails.type === "otorhinology" && (
              <Form.Item
                label="Bác sĩ"
                name="doctor"
                rules={[{ required: true, message: "Please choose doctor!" }]}
              >
                <Select
                  name="doctor"
                  value={stateOrderDetails["Name"]}
                  onChange={handleChangeSelect}
                  options={renderOptions(doctorOtorhinologyNames)}
                />
              </Form.Item>
            )}
            {stateOrderDetails.type === "pediatrics" && (
              <Form.Item
                label="Bác sĩ"
                name="doctor"
                rules={[{ required: true, message: "Please choose doctor!" }]}
              >
                <Select
                  name="doctor"
                  value={stateOrderDetails["Name"]}
                  onChange={handleChangeSelect}
                  options={renderOptions(doctorPediatricsNames)}
                />
              </Form.Item>
            )}
            {stateOrderDetails.type === "nerve surgery" && (
              <Form.Item
                label="Bác sĩ"
                name="doctor"
                rules={[{ required: true, message: "Please choose doctor!" }]}
              >
                <Select
                  name="doctor"
                  value={stateOrderDetails["Name"]}
                  onChange={handleChangeSelect}
                  options={renderOptions(doctorNervesugeryNames)}
                />
              </Form.Item>
            )}

            <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Apply
              </Button>
            </Form.Item>
          </Form>
        </Loading>
      </DrawerComponent>
    </div>
  );
};

export default OrderAdmin;
