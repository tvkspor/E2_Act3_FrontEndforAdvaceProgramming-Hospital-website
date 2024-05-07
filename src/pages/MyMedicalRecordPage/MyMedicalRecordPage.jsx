import InputComponent from "../../components/InputComponent/InputComponent";
import { useQuery } from "@tanstack/react-query";
import { Button, Form, Select, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import React, { useRef } from "react";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import TableUserComponent from "../../components/TableUserComponent/TableUserComponent";
import * as UserService from "../../services/UserService";
import { Badge, Calendar } from "antd";
import { useMutationHooks } from "../../hooks/useMutationHook";
import DrawerComponent from "../../components/DrawerComponent/DrawerComponent";
import moment from "moment";
import Loading from "../../components/LoadingComponent/Loading";
import { useState, useEffect } from "react";
import * as message from "../../components/Message/Message";
import { useLocation } from "react-router-dom";

const MyMedicalRecordPage = () => {
  const user = useSelector((state) => state.user);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const [rowSelected, setRowSelected] = useState("");
  const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
  const location = useLocation();
  const { state } = location;
  const searchInput = useRef(null);
  //Form behavior
  const [form] = Form.useForm();
  const inittial = () => ({
    userName: user?.name,
    comment: "",
  });
  const [stateComment, setStateComment] = useState(inittial());
  const mutationUpdate = useMutationHooks((data) => {
    const { id, ...rests } = data;
    const res = UserService.updateComment(id, { ...rests });
    return res;
  });
  const {
    data: dataUpdated,
    isLoading: isLoadingUpdated,
    isSuccess: isSuccessUpdated,
    isError: isErrorUpdated,
  } = mutationUpdate;
  useEffect(() => {
    if (isSuccessUpdated && dataUpdated?.status === "OK") {
      message.success();
      handleCloseDrawer();
    } else if (isErrorUpdated) {
      message.error();
    }
  }, [isSuccessUpdated]);

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
    setStateComment({
      comment: "",
    });
    form.resetFields();
  };

  const getTreatmenthistory = async () => {
    const res = await UserService.getTreatmenthistory(state?.id);
    return res;
  };

  const getTreatment = async () => {
    const res = await UserService.getTreatment(state?.id);
    return res;
  };

  const getEventData = async () => {
    const res = await UserService.getEventData(state?.id);
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
  });

  const handleEvent = () => {
    setIsOpenDrawer(true);
  };

  const handleOnchangeDetails = (e) => {
    setStateComment({
      ...stateComment,
      [e.target.name]: e.target.value,
    });
  };

  const renderAction = () => {
    return (
      <div>
        <PlusOutlined
          style={{ color: "green", fontSize: "30px", cursor: "pointer" }}
          onClick={handleEvent}
        />
      </div>
    );
  };

  const onUpdateComment = () => {
    mutationUpdate.mutate({
      id: rowSelected,
      ...stateComment,
    });
  };

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
      title: "Tổng tiền(bao gồm thuốc ngoài chương trình)",
      dataIndex: "totalprice",
      ...getColumnSearchProps("totalprice"),
    },
    {
      title: "Thêm nhận xét",
      dataIndex: "action",
      render: renderAction,
    },
  ];
  const columns2 = [
    {
      title: "Ngày",
      dataIndex: "day",
      ...getColumnSearchProps("day"),
    },
    {
      title: "Tháng",
      dataIndex: "month",
      ...getColumnSearchProps("month"),
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

  var eventData = user?.eventData;

  const dateCellRender = (value) => {
    const eventsForDate = eventData.filter(
      (event) =>
        event.date === value.date() &&
        event.month === value.month() &&
        event.year === value.year()
    );
    return (
      <div className="notes-month">
        {eventsForDate.map((event, index) => (
          <div key={index}>
            <Badge key={index} status={event.type} text={event.content} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <section>
      <h1 className="heading" style={{ marginTop: "30px" }}>
        LỊCH TRÌNH <span>ĐIỀU TRỊ</span>{" "}
      </h1>
      <div style={{ margin: "20px", padding: "10px", borderRadius: "30px" }}>
        <Calendar style={calendarStyles} dateCellRender={dateCellRender} />
      </div>

      <DrawerComponent
        title="Thêm nhận xét"
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        width="90%"
      >
        <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>
          <Form
            name="basic"
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 22 }}
            onFinish={onUpdateComment}
            autoComplete="on"
            form={form}
          >
            <Form.Item
              label="Nhận xét"
              name="comment"
              rules={[{ required: true, message: "Please input day!" }]}
            >
              <InputComponent
                value={stateComment["comment"]}
                onChange={handleOnchangeDetails}
                name="comment"
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
      <h1 className="heading" style={{ marginTop: "30px" }}>
        GÓI <span>CHỮA BỆNH</span>{" "}
      </h1>

      <div
        style={{
          margin: "0 auto",
          width: "70%",
          borderRadius: "4px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)",
        }}
      >
        <TableUserComponent
          columns={columns1}
          isLoading={isLoadingTreatment}
          data={dataTable1}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                setRowSelected(record.product);
              },
            };
          }}
        />
      </div>
      <h1 className="heading" style={{ marginTop: "30px" }}>
        TIẾN TRÌNH <span>KHÁM BỆNH</span>{" "}
      </h1>
      <div
        style={{
          margin: "0 auto",
          width: "70%",
          borderRadius: "4px",
          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)",
          marginBottom: "50px",
        }}
      >
        <TableUserComponent
          columns={columns2}
          isLoading={isLoadingTreatmenthistory}
          data={dataTable2}
        />
      </div>
    </section>
  );
};

const calendarStyles = {
  width: "70%", // Adjust this value as needed
  margin: "0 auto", // This will center the calendar
  border: "1px solid #ddd",
  borderRadius: "4px",
  backgroundColor: "#16A085",
  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.35)",
};

const headerStyles = {
  color: "#000",
  fontSize: "20px", // Increase this value to make the text bigger
  marginBottom: "10px",
  textAlign: "center", // This will center the text
};

export default MyMedicalRecordPage;
