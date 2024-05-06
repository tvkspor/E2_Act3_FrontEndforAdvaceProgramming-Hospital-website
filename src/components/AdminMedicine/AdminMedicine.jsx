import { Button, Form, Select, Space } from "antd";
import {
    PlusOutlined,
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
} from "@ant-design/icons";
import React, { useRef } from "react";
import { WrapperHeader, WrapperUploadFile, WrapperInput, WrapperLabel, WrapperTitle } from "./style";
import TableComponent from "../TableComponent/TableComponent";
import { useState } from "react";
import InputComponent from "../InputComponent/InputComponent";
import { getBase64, renderOptions } from "../../utils";
import * as MedicineService from "../../services/Medicine"
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import { useEffect } from "react";
import * as message from "../../components/Message/Message";
import { useQuery } from "@tanstack/react-query";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { useSelector } from "react-redux";
import ModalComponent from "../ModalComponent/ModalComponent";
import moment from 'moment';
import { DatePicker } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    height: 60px;
    width: 60px;
    border-radius: 6px;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    background: ;
    transition: all 0.3s; /* Thêm hiệu ứng transition */

    &:hover {
        background-color: #d9eed3; /* Màu nền khi hover */
        color: black;
    }
`;

const ButtonText = styled.span`
    margin-top: 5px;
`;

const AdminMedicine = () => {
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
        image: "",
        type: "",
        price: "",
        countInStock: "",
        description: "",
        selled: new Date("2024-04-14"),
    });
    const [stateMedicine, setStateMedicine] = useState(inittial());
    const [stateMedicineDetails, setStateMedicineDetails] = useState(inittial());

    const [form] = Form.useForm();

    // Sử dụng mutation để cập nhật dữ liệu trên data
    const mutation = useMutationHooks((data) => {
        const {
            name,
            image,
            type,
            price,
            countInStock,
            description,
            selled,
        } = data;
        const res = MedicineService.createMedicine({
            name,
            image,
            type,
            price,
            countInStock,
            description,
            selled,
        });
        return res;
    });
    const mutationUpdate = useMutationHooks((data) => {
        const { id, token, ...rests } = data;
        const res = MedicineService.updateMedicine(id, token, { ...rests });
        return res;
    });

    const mutationDeleted = useMutationHooks((data) => {
        const { id, token } = data;
        const res = MedicineService.deleteMedicine(id, token);
        return res;
    });

    const mutationDeletedMany = useMutationHooks((data) => {
        const { token, ...ids } = data;
        const res = MedicineService.deleteManyMedicine(ids, token);
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
    const getAllMedicines = async () => {
        const res = await MedicineService.getAllMedicine();
        return res;
    };
    const fetchAllTypeMedicine = async () => {
        const res = await MedicineService.getAllTypeMedicine();
        return res;
    };

    const queryMedicine = useQuery({
        queryKey: ["medicines"],
        queryFn: getAllMedicines,
    });
    const typeMedicine = useQuery({
        queryKey: ["type-medicine"],
        queryFn: fetchAllTypeMedicine,
    });
    const { isLoading: isLoadingMedicines, data: medicines } = queryMedicine;

    const fetchGetDetailsMedicine = async (rowSelected) => {
        const res = await MedicineService.getDetailsMedicine(rowSelected);
        if (res?.data) {
            let selled = res?.data?.selled;

            setStateMedicineDetails({
                name: res?.data?.name,
                image: res?.data?.image,
                type: res?.data?.type,
                price: res?.data?.price,
                countInStock: res?.data?.countInStock,
                description: res?.data?.description,
                selled: res?.data?.selled,
            });
        }
        setIsLoadingUpdate(false);
    };

    useEffect(() => {
        if (!isModalOpen) {
            form.setFieldsValue(stateMedicineDetails);
        } else {
            form.setFieldsValue(inittial());
        }
    }, [form, stateMedicineDetails, isModalOpen]);

    useEffect(() => {
        if (rowSelected && isOpenDrawer) {
            setIsLoadingUpdate(true);
            fetchGetDetailsMedicine(rowSelected);
        }
    }, [rowSelected, isOpenDrawer]);

    const handleDetailsMedicine = () => {
        setIsOpenDrawer(true);
    };

    const handleDelteManyMedicines = (ids) => {
        mutationDeletedMany.mutate(
            { ids: ids, token: user?.access_token },
            {
                onSettled: () => {
                    queryMedicine.refetch();
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
                    onClick={handleDetailsMedicine}
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
    });

    // Bảng và thông tin hiển thị
    const columns = [
        {
            title: "Tên thuốc",
            dataIndex: "name",
            sorter: (a, b) => a.name.length - b.name.length,
            ...getColumnSearchProps("name"),
        },
        {
            title: "Giá",
            dataIndex: "price",
            sorter: (a, b) => a.price - b.price,
            filters: [
                {
                    text: ">= 50",
                    value: ">=",
                },
                {
                    text: "<= 50",
                    value: "<=",
                },
            ],
            onFilter: (value, record) => {
                if (value === ">=") {
                    return record.price >= 50;
                }
                return record.price <= 50;
            },
        },
        {
            title: "Loại",
            dataIndex: "type",
            filters: [
                {
                    text: "Bột",
                    value: "Bột",
                },
                {
                    text: "Viên Nén",
                    value: "Viên Nén",
                },
                {
                    text: "Gel",
                    value: "Gel",
                },
                {
                    text: "Dung Dịch",
                    value: "Dung Dịch",
                },
            ],
            onFilter: (value, record) => record.type.indexOf(value) === 0,
        },
        {
            title: "Mô tả",
            dataIndex: "description",
        },
        {
            title: "Hàng tồn",
            dataIndex: "countInStock",
            sorter: (a, b) => a.countInStock - b.countInStock,
        },
        {
            title: 'Hạn sử dụng',
            dataIndex: 'selled',
            // sorter: (a, b) => moment(a.selled).unix() - moment(b.selled).unix(),
            sorter: (a, b) => moment(a.selled).unix() - moment(b.selled).unix(),
            render: (selled) => moment(selled).format('DD-MM-YYYY')
        },
        {
            title: "Chỉnh sửa",
            dataIndex: "action",
            render: renderAction,
        },
    ];
    const dataTable =
        medicines?.data?.length &&
        medicines?.data?.map((medicine) => {
            return { ...medicine, key: medicine._id };
        });

    //Thiết lập các hành động của form
    const handleCloseDrawer = () => {
        setIsOpenDrawer(false);
        setStateMedicineDetails({
            name: "",
            image: "",
            type: "",
            price: "",
            countInStock: "",
            description: "",
            selled: new Date("2024-04-14"),
        });
        form.resetFields();
    };
    const handleCancelDelete = () => {
        setIsModalOpenDelete(false);
    };

    const handleDeleteMedicine = () => {
        mutationDeleted.mutate(
            { id: rowSelected, token: user?.access_token },
            {
                onSettled: () => {
                    queryMedicine.refetch();
                },
            }
        );
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setStateMedicine({
            name: "",
            image: "",
            type: "",
            price: "",
            countInStock: "",
            description: "",
            selled: new Date("2024-04-14"),
        });
        form.resetFields();
    };

    const onFinish = () => {
        const params = {
            name: stateMedicine.name,
            image: stateMedicine.image,
            type:
                stateMedicine.type === "add_type"
                    ? stateMedicine.newType
                    : stateMedicine.type,
            price: stateMedicine.price,
            countInStock: stateMedicine.countInStock,
            description: stateMedicine.description,
            selled: stateMedicine.selled,
        };
        mutation.mutate(params, {
            onSettled: () => {
                queryMedicine.refetch();
            },
        });
    };

    const handleOnchange = (e) => {
        setStateMedicine({
            ...stateMedicine,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnchangeDetails = (e) => {
        let value = e.target.value;

        // // If the value is a moment object, convert it to a string
        // if (moment.isMoment(value)) {
        //     value = value.format('DD-MM-YYYY');
        // }

        setStateMedicineDetails({
            ...stateMedicineDetails,
            [e.target.name]: value,
        });
    };

    const handleOnchangeAvatar = async ({ fileList }) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateMedicine({
            ...stateMedicine,
            image: file.preview,
        });
    };

    const handleOnchangeAvatarDetails = async ({ fileList }) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateMedicineDetails({
            ...stateMedicineDetails,
            image: file.preview,
        });
    };
    const onUpdateMedicine = () => {
        mutationUpdate.mutate(
            { id: rowSelected, token: user?.access_token, ...stateMedicineDetails },
            {
                onSettled: () => {
                    queryMedicine.refetch();
                },
            }
        );
    };

    const handleChangeSelect = (value) => {
        setStateMedicine({
            ...stateMedicine,
            type: value,
        });
    };

    const handleDateChange = (date) => {
        // Format the date to 'DD-MM-YYYY' format and update stateItem
        // const formattedDate = date.format('DD-MM-YYYY');
        setStateMedicine({ ...stateMedicine, selled: date });
    };


    const handleDateChangeDetails = (date) => {
        // Update stateItemDetails with the selected date
        setStateMedicineDetails({ ...stateMedicineDetails, selled: date });
    };


    return (
        <div>
            {/*Hiển thị phần quản lí sản phẩm */}
            <WrapperHeader>Quản lý bác sĩ</WrapperHeader>

            {/* Nút bấm */}
            <div style={{
                marginTop: "10px",
                display: "flex", // Sử dụng flex container
                justifyContent: "left", // Căn lề sang phải

            }}>
                <StyledButton
                    onClick={() => setIsModalOpen(true)}
                >
                    <PlusOutlined style={{
                        fontSize: "30px",
                    }} />
                    {/* <ButtonText>Thêm bác sĩ</ButtonText> */}
                </StyledButton>
            </div>

            {/* Bảng hiển thị sản phẩm */}
            <div style={{ marginTop: "20px" }}>
                <TableComponent
                    handleDelteMany={handleDelteManyMedicines}
                    columns={columns}
                    isLoading={isLoadingMedicines}
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
                title={<WrapperTitle>Thêm thuốc</WrapperTitle>}
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
                            label="Tên thuốc"
                            name="name"
                            rules={[{ required: true, message: "Please input your name!" }]}
                        >
                            <InputComponent
                                value={stateMedicine["name"]}
                                onChange={handleOnchange}
                                name="name"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Loại"
                            name="type"
                            rules={[{ required: true, message: "Please input your type!" }]}
                        >
                            <Select
                                name="type"
                                value={stateMedicine.type}
                                onChange={handleChangeSelect}
                                options={renderOptions(typeMedicine?.data?.data)}
                            />
                        </Form.Item>
                        {stateMedicine.type === "add_type" && (
                            <Form.Item
                                label="Thêm loại"
                                name="newType"
                                rules={[{ required: true, message: "Please input your type!" }]}
                            >
                                <InputComponent
                                    value={stateMedicine.newType}
                                    onChange={handleOnchange}
                                    name="newType"
                                />
                            </Form.Item>
                        )}
                        <Form.Item
                            label="Số hàng tồn"
                            name="countInStock"
                            rules={[
                                { required: true, message: "Please input your count inStock!" },
                            ]}
                        >
                            <InputComponent
                                value={stateMedicine.countInStock}
                                onChange={handleOnchange}
                                name="countInStock"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Giá"
                            name="price"
                            rules={[
                                { required: true, message: "Please input your count price!" },
                            ]}
                        >
                            <InputComponent
                                value={stateMedicine.price}
                                onChange={handleOnchange}
                                name="price"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Mô tả"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your count description!",
                                },
                            ]}
                        >
                            <InputComponent
                                value={stateMedicine.description}
                                onChange={handleOnchange}
                                name="description"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Hạn sử dụng"
                            name="selled"
                            rules={[
                                { required: true, message: "Please input your date!" },
                            ]}
                        >
                            <WrapperInput>
                                <DatePicker
                                    //defaultValue={moment(stateItemDetails.importDate)}
                                    format={dateFormatList}
                                    onChange={handleDateChange}
                                />
                            </WrapperInput>
                        </Form.Item>
                        <Form.Item
                            label="Hình ảnh"
                            name="image"
                            rules={[
                                { required: true, message: "Please input your count image!" },
                            ]}
                        >
                            <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                                <Button>Select File</Button>
                                {stateMedicine?.image && (
                                    <img
                                        src={stateMedicine?.image}
                                        style={{
                                            height: "60px",
                                            width: "60px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            marginLeft: "10px",
                                        }}
                                        alt="avatar"
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
                        onFinish={onUpdateMedicine}
                        autoComplete="on"
                        form={form}
                    >
                        <Form.Item
                            label="Tên thuốc"
                            name="name"
                            rules={[{ required: true, message: "Please input your name!" }]}
                        >
                            <InputComponent
                                value={stateMedicineDetails["name"]}
                                onChange={handleOnchangeDetails}
                                name="name"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Loại"
                            name="type"
                            rules={[{ required: true, message: "Please input your type!" }]}
                        >
                            <InputComponent
                                value={stateMedicineDetails["type"]}
                                onChange={handleOnchangeDetails}
                                name="type"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Tồn kho"
                            name="countInStock"
                            rules={[
                                { required: true, message: "Please input your count inStock!" },
                            ]}
                        >
                            <InputComponent
                                value={stateMedicineDetails.countInStock}
                                onChange={handleOnchangeDetails}
                                name="countInStock"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Giá"
                            name="price"
                            rules={[
                                { required: true, message: "Please input your count price!" },
                            ]}
                        >
                            <InputComponent
                                value={stateMedicineDetails.price}
                                onChange={handleOnchangeDetails}
                                name="price"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Mô tả"
                            name="description"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your count description!",
                                },
                            ]}
                        >
                            <InputComponent
                                value={stateMedicineDetails.description}
                                onChange={handleOnchangeDetails}
                                name="description"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Hạn sử dụng"
                            name="selled"
                            rules={[
                                { required: true, message: "Please input your date!" },
                            ]}
                        >
                            <WrapperInput>
                                <DatePicker
                                    //defaultValue={moment(stateItemDetails.importDate)}
                                    format={dateFormatList}
                                    onChange={handleDateChangeDetails}
                                />
                            </WrapperInput>
                        </Form.Item>
                        <Form.Item
                            label="Hình ảnh"
                            name="image"
                            rules={[
                                { required: true, message: "Please input your count image!" },
                            ]}
                        >
                            <WrapperUploadFile
                                onChange={handleOnchangeAvatarDetails}
                                maxCount={1}
                            >
                                <Button>Select File</Button>
                                {stateMedicineDetails?.image && (
                                    <img
                                        src={stateMedicineDetails?.image}
                                        style={{
                                            height: "60px",
                                            width: "60px",
                                            borderRadius: "50%",
                                            objectFit: "cover",
                                            marginLeft: "10px",
                                        }}
                                        alt="avatar"
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
                onOk={handleDeleteMedicine}
            >
                <Loading isLoading={isLoadingDeleted}>
                    <div>Bạn có chắc xóa sản phẩm này không?</div>
                </Loading>
            </ModalComponent>
        </div>
    );
};

export default AdminMedicine;
