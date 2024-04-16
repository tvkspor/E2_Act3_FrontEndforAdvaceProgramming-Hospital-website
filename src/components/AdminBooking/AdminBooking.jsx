import { Button, Form, Select, Space } from "antd";
import {
    PlusOutlined,
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import React, { useRef } from "react";
import { WrapperHeader, WrapperUploadFile } from "./style";
import TableComponent from "../TableComponent/TableComponent";
import { useState } from "react";
import InputComponent from "../InputComponent/InputComponent";
import { getBase64, renderOptions } from "../../utils";
import * as DoctorService from "../../services/DoctorService";
import * as BookingService from "../../services/BookingService"
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import { useEffect } from "react";
import * as message from "../../components/Message/Message";
import { useQuery } from "@tanstack/react-query";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { useSelector } from "react-redux";
import ModalComponent from "../ModalComponent/ModalComponent";
import moment from 'moment';


const AdminBooking = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rowSelected, setRowSelected] = useState("");
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);
    const [isLoadingUpdate, setIsLoadingUpdate] = useState(false);
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
    const user = useSelector((state) => state?.user);
    const searchInput = useRef(null);
    const inittial = () => ({
        date: "",
        totalMorning: "",
        totalEvening: "",
        morningCounter: "",
        eveningCounter: "",

                name: "",
                cccd: "",
                birth: "",
                email: "",
                sex: "",
                number: "",
                session: "",
                address: "",
                symptom: "",
                stt: "",
            
        
    });
    const [stateBooking, setStateBooking] = useState(inittial());
    const [stateBookingDetails, setStateBookingDetails] = useState(inittial());

    const [form] = Form.useForm();

    // Sử dụng mutation để cập nhật dữ liệu trên data
    const mutation = useMutationHooks((data) => {
        const {
            date,
            totalMorning,
            totalEvening,
            morningCounter,
            eveningCounter,

                    name,
                    cccd,
                    birth,
                    email,
                    sex,
                    number,
                    session,
                    address,
                    symptom,
                    stt,

        } = data;
        const res = BookingService.createBooking({
            date,
            totalMorning,
            totalEvening,
            morningCounter,
            eveningCounter,

                    name,
                    cccd,
                    birth,
                    email,
                    sex,
                    number,
                    session,
                    address,
                    symptom,
                    stt,
        });
        return res;
    });
    const mutationUpdate = useMutationHooks((data) => {
        const { id, token, ...rests } = data;
        const res = BookingService.updateBooking(id, token, { ...rests });
        return res;
    });

    const mutationDeleted = useMutationHooks((data) => {
        const { day, token } = data;
        const res = BookingService.deleteBooking(day, token);
        return res;
    });

    const mutationDeletedMany = useMutationHooks((data) => {
        const { token, ...ids } = data;
        const res = BookingService.deleteManyBooking(ids, token);
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
    const getAllBooking = async () => {
        const res = await BookingService.getAllBooking();
        return res;
    };


    const queryBooking = useQuery({
        queryKey: ["bookings"],
        queryFn: getAllBooking,
    });
    const { isLoading: isLoadingDoctors, data: bookings } = queryBooking;

    const fetchGetDetailsBooking = async (rowSelected) => {
        const res = await BookingService.getDetailsBooking(rowSelected);
        if (res?.data) {
            setStateBookingDetails({
                date: res?.data?.date,
                totalMorning: res?.data?.totalMorning,
                totalEvening: res?.data?.totalEvening,
                morningCounter: res?.data?.morningCounter,
                eveningCounter: res?.data?.eveningCounter,
                
                        name: res?.data?.name,
                        cccd: res?.data?.cccd,
                        birth: res?.data?.birth,
                        email: res?.data?.email,
                        sex: res?.data?.sex,
                        number: res?.data?.number,
                        session: res?.data?.session,
                        address: res?.data?.address,
                        symptom: res?.data?.symptom,
                        stt: res?.data?.stt,
 
            });
        }
        setIsLoadingUpdate(false);
    };

    useEffect(() => {
        if (!isModalOpen) {
            form.setFieldsValue(stateBookingDetails);
        } else {
            form.setFieldsValue(inittial());
        }
    }, [form, stateBookingDetails, isModalOpen]);

    useEffect(() => {
        if (rowSelected && isOpenDrawer) {
            setIsLoadingUpdate(true);
            fetchGetDetailsBooking(rowSelected);
        }
    }, [rowSelected, isOpenDrawer]);

    const handleDetailsBooking = () => {
        setIsOpenDrawer(true);
    };

    const handleDelteManyBookings = (ids) => {
        mutationDeletedMany.mutate(
            { ids: ids, token: user?.access_token },
            {
                onSettled: () => {
                    queryBooking.refetch();
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
                    onClick={handleDetailsBooking}
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
            title: "Date",
            dataIndex: "date",
        },

        {
            title: "TotalMorning",
            dataIndex: "totalMorning",
        },
        {
            title: "TotalEvening",
            dataIndex: "totalEvening",
        },
        {
            title: "MorningCounter",
            dataIndex: "morningCounter",
        },
        {
            title: "EveningCounter",
            dataIndex: "eveningCounter",
        },
        {
            title: "Detailed",
            dataIndex: "detailed",
            render: (detailed) => (
                <ul>
                    {detailed.map((item, index) => (
                        <li key={index}>
                            Name: {item.name}, CCCD: {item.cccd}
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            title: "Action",
            dataIndex: "action",
            render: renderAction,
        },
    ];
    const dataTable =
        bookings?.data?.length &&
        bookings?.data?.map((booking) => {
            return { 
                ...booking, key: booking._id ,
                date: moment(user.date).format('DD/MM/YYYY'),
            };
            
        });

    //Thiết lập các hành động của form
    const handleCloseDrawer = () => {
        setIsOpenDrawer(false);
        setStateBookingDetails({
            date: "",
            totalMorning: "",
            totalEvening: "",
            morningCounter: "",
            eveningCounter: "",

                    name: "",
                    cccd: "",
                    birth: "",
                    email: "",
                    sex: "",
                    number: "",
                    session: "",
                    address: "",
                    symptom: "",
                    stt: "",

        });
        form.resetFields();
    };
    const handleCancelDelete = () => {
        setIsModalOpenDelete(false);
    };

    const handleDeleteBooking = () => {
        mutationDeleted.mutate(
            { id: rowSelected, token: user?.access_token },
            {
                onSettled: () => {
                    queryBooking.refetch();
                },
            }
        );
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setStateBooking({
            date: "",
            totalMorning: "",
            totalEvening: "",
            morningCounter: "",
            eveningCounter: "",

                    name: "",
                    cccd: "",
                    birth: "",
                    email: "",
                    sex: "",
                    number: "",
                    session: "",
                    address: "",
                    symptom: "",
                    stt: "",

        });
        form.resetFields();
    };

    const onFinish = () => {
        const params = {
            date: stateBooking?.data?.date,
            totalMorning: stateBooking?.data?.totalMorning,
            totalEvening: stateBooking?.data?.totalEvening,
            morningCounter: stateBooking?.data?.morningCounter,
            eveningCounter: stateBooking?.data?.eveningCounter,
                    name: stateBooking?.data?.name,
                    cccd: stateBooking?.data?.cccd,
                    birth: stateBooking?.data?.birth,
                    email: stateBooking?.data?.email,
                    sex: stateBooking?.data?.sex,
                    number: stateBooking?.data?.number,
                    session: stateBooking?.data?.session,
                    address: stateBooking?.data?.address,
                    symptom: stateBooking?.data?.symptom,
                    stt: stateBooking?.data?.stt,

        
        };
        mutation.mutate(params, {
            onSettled: () => {
                queryBooking.refetch();
            },
        });
    };

    const handleOnchange = (e) => {
        setStateBooking({
            ...stateBooking,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnchangeDetails = (e) => {
        setStateBookingDetails({
            ...stateBookingDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnchangeAvatar = async ({ fileList }) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateBooking({
            ...stateBooking,
            avatar: file.preview,
        });
    };

    const handleOnchangeAvatarDetails = async ({ fileList }) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateBookingDetails({
            ...stateBookingDetails,
            avatar: file.preview,
        });
    };
    const onUpdateBooking = () => {
        mutationUpdate.mutate(
            { id: rowSelected, token: user?.access_token, ...stateBookingDetails },
            {
                onSettled: () => {
                    queryBooking.refetch();
                },
            }
        );
    };

    const handleChangeSelect = (value) => {
        setStateBooking({
            ...stateBooking,
            department: value,
        });
    };

    return (
        <div>
            {/*Hiển thị phần quản lí sản phẩm */}
            <WrapperHeader>Quản lý book</WrapperHeader>

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
                    handleDelteMany={handleDelteManyBookings}
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
                                value={stateBooking["name"]}
                                onChange={handleOnchange}
                                name="name"
                            />
                        </Form.Item>
                        <Form.Item
                            label="TotalMorning"
                            name="totalMorning"
                            rules={[{ required: true, message: "Please input your totalMorning!" }]}
                        >
                            <InputComponent
                                value={stateBookingDetails["totalMorning"]}
                                onChange={handleOnchangeDetails}
                                name="totalMorning"
                            />
                        </Form.Item>
                        <Form.Item
                            label="TotalEvening"
                            name="totalEvening"
                            rules={[{ required: true, message: "Please input your  totalEvening!" }]}
                        >
                            <InputComponent
                                value={stateBookingDetails.totalEvening}
                                onChange={handleOnchangeDetails}
                                name="totalEvening"
                            />
                        </Form.Item>

                        <Form.Item
                            label="MorningCounter"
                            name="morningCounter"
                            rules={[
                                { required: true, message: "Please input your  morningCounter!" },
                            ]}
                        >
                            <InputComponent
                                value={stateBookingDetails.morningCounter}
                                onChange={handleOnchangeDetails}
                                name="morningCounter"
                            />
                        </Form.Item>

                        <Form.Item
                            label="EveningCounter"
                            name="eveningCounter"
                            rules={[
                                { required: true, message: "Please input your  eveningCounter!" },
                            ]}
                        >
                            <InputComponent
                                value={stateBookingDetails.eveningCounter}
                                onChange={handleOnchangeDetails}
                                name="eveningCounter"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Date"
                            name="date"
                            rules={[{ required: true, message: "Please input your date!" }]}
                        >
                            <InputComponent
                                value={stateBooking.date}
                                onChange={handleOnchange}
                                name="date"
                            />
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
                title="Chi tiết sản phẩm"
                isOpen={isOpenDrawer}
                onClose={() => setIsOpenDrawer(false)}
                width="90%"
            >
                <Loading isLoading={isLoadingUpdate || isLoadingUpdated}>
                    <Form
                        name="basic"
                        labelCol={{ span: 2 }}
                        wrapperCol={{ span: 22 }}
                        onFinish={onUpdateBooking}
                        autoComplete="on"
                        form={form}
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: "Please input your name!" }]}
                        >
                            <InputComponent
                                value={stateBookingDetails["name"]}
                                onChange={handleOnchangeDetails}
                                name="name"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Cccd"
                            name="cccd"
                            rules={[{ required: true, message: "Please input your cccd!" }]}
                        >
                            <InputComponent
                                value={stateBookingDetails["cccd"]}
                                onChange={handleOnchangeDetails}
                                name="cccd"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Birth"
                            name="birth"
                            rules={[{ required: true, message: "Please input your  birth!" }]}
                        >
                            <InputComponent
                                value={stateBookingDetails.birth}
                                onChange={handleOnchangeDetails}
                                name="birth"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: "Please input your  email!" },
                            ]}
                        >
                            <InputComponent
                                value={stateBookingDetails.email}
                                onChange={handleOnchangeDetails}
                                name="email"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Number"
                            name="number"
                            rules={[
                                { required: true, message: "Please input your  number!" },
                            ]}
                        >
                            <InputComponent
                                value={stateBookingDetails.number}
                                onChange={handleOnchangeDetails}
                                name="number"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Date"
                            name="date"
                            rules={[{ required: true, message: "Please input your phone!" }]}
                        >
                            <InputComponent
                                value={stateBookingDetails.date}
                                onChange={handleOnchangeDetails}
                                name="date"
                            />
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
                onOk={handleDeleteBooking}
            >
                <Loading isLoading={isLoadingDeleted}>
                    <div>Bạn có chắc xóa book này không?</div>
                </Loading>
            </ModalComponent>
        </div>
    );
};

export default AdminBooking;
