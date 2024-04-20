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
        detailed: [
            {
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
            },
        ],
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
            detailed: [
                {
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
                },
            ],
        } = data;
        const res = BookingService.createBooking({
            date,
            totalMorning,
            totalEvening,
            morningCounter,
            eveningCounter,
            detailed: [
                {
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
                },
            ],
        });
        return res;
    });

    const mutationDeleted = useMutationHooks((data) => {
        const { id, token } = data;
        const res = BookingService.deleteBooking(id, token);
        return res;
    });
    const { data, isLoading, isSuccess, isError } = mutation;

    const {
        data: dataDeleted,
        isLoading: isLoadingDeleted,
        isSuccess: isSuccessDelected,
        isError: isErrorDeleted,
    } = mutationDeleted;

    useEffect(() => {
        if (isSuccess && data?.status === "OK") {
            message.success();
            handleCancel();
        } else if (isError) {
            message.error();
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isSuccessDelected && dataDeleted?.status === "OK") {
            message.success();
            handleCancelDelete();
        } else if (isErrorDeleted) {
            message.error();
        }
    }, [isSuccessDelected]);

    // Truy vấn dữ liệu từ database
    const getAllBooking = async () => {
        const res = await BookingService.getAllBooking();
        return res;
    };


    const queryBooking = useQuery({
        queryKey: ["bookings"],
        queryFn: getAllBooking,
    });
    const { isLoading: isLoadingBookings, data: bookings } = queryBooking;

    useEffect(() => {
        if (!isModalOpen) {
            form.setFieldsValue(stateBookingDetails);
        } else {
            form.setFieldsValue(inittial());
        }
    }, [form, stateBookingDetails, isModalOpen]);

    const handleDetailsBooking = () => {
        setIsOpenDrawer(true);
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
    // Bảng và thông tin hiển thị
    const columns = [
        {
            title: "Date",
            dataIndex: "date",
        },
        {
            title: "CCCD",
            dataIndex: "detailed",
            render: (detailed) => (
                <ul>
                    {detailed.map((item, index) => (
                        <li key={index}>
                            CCCD: {item.cccd}
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            title: "Session",
            dataIndex: "detailed",
            render: (detailed) => (
                <ul>
                    {detailed.map((item, index) => (
                        <li>{item.session ? "Buổi sáng" : "Buổi chiều"}</li>
                    ))}
                </ul>
            ),
        },
        {
            title: "Symptom",
            dataIndex: "detailed",
            render: (detailed) => (
                <ul>
                    {detailed.map((item, index) => (
                        <li key={index}>
                            Triệu chứng: {item.symptom}
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            title: "Order",
            dataIndex: "detailed",
            render: (detailed) => (
                <ul>
                    {detailed.map((item, index) => (
                        <li key={index}>
                            Số thứ tự: {item.stt}
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
                ...booking, key: booking._id,
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
                    columns={columns}
                    isLoading={isLoadingBookings}
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
