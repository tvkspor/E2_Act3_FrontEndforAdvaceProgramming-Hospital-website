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
import * as ItemService from "../../services/ItemService"
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

const AdminItem = () => {
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
        component: "",
        price: "",
        availability: "",
        description: "",
        importDate: new Date("2024-04-14"),
    });
    const [stateItem, setStateItem] = useState(inittial());
    const [stateItemDetails, setStateItemDetails] = useState(inittial());

    const [form] = Form.useForm();

    // Sử dụng mutation để cập nhật dữ liệu trên data
    const mutation = useMutationHooks((data) => {
        const {
            name,
            image,
            component,
            price,
            availability,
            description,
            importDate,
        } = data;
        const res = ItemService.createItem({
            name,
            image,
            component,
            price,
            availability,
            description,
            importDate,
        });
        return res;
    });
    const mutationUpdate = useMutationHooks((data) => {
        const { id, token, ...rests } = data;
        const res = ItemService.updateItem(id, token, { ...rests });
        return res;
    });

    const mutationDeleted = useMutationHooks((data) => {
        const { id, token } = data;
        const res = ItemService.deleteItem(id, token);
        return res;
    });

    const mutationDeletedMany = useMutationHooks((data) => {
        const { token, ...ids } = data;
        const res = ItemService.deleteManyItems(ids, token);
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
    const getAllItem = async () => {
        const res = await ItemService.getAllItem();
        return res;
    };
    const fetchAllTypeItem = async () => {
        const res = await ItemService.getAllTypeItem();
        return res;
    };

    const queryItem = useQuery({
        queryKey: ["items"],
        queryFn: getAllItem,
    });
    const typeItem = useQuery({
        queryKey: ["type-item"],
        queryFn: fetchAllTypeItem,
    });
    const { isLoading: isLoadingItem, data: items } = queryItem;

    const fetchGetDetailsItem = async (rowSelected) => {
        const res = await ItemService.getDetailsItem(rowSelected);
        if (res?.data) {
            let importDate = res?.data?.importDate;

            setStateItemDetails({
                name: res?.data?.name,
                image: res?.data?.image,
                component: res?.data?.component,
                price: res?.data?.price,
                availability: res?.data?.availability,
                description: res?.data?.description,
                importDate: res?.data?.importDate,
            });
        }
        setIsLoadingUpdate(false);
    };

    useEffect(() => {
        if (!isModalOpen) {
            form.setFieldsValue(stateItemDetails);
        } else {
            form.setFieldsValue(inittial());
        }
    }, [form, stateItemDetails, isModalOpen]);

    useEffect(() => {
        if (rowSelected && isOpenDrawer) {
            setIsLoadingUpdate(true);
            fetchGetDetailsItem(rowSelected);
        }
    }, [rowSelected, isOpenDrawer]);

    const handleDetailsItem = () => {
        setIsOpenDrawer(true);
    };

    const handleDelteManyItems = (ids) => {
        mutationDeletedMany.mutate(
            { ids: ids, token: user?.access_token },
            {
                onSettled: () => {
                    queryItem.refetch();
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
                    onClick={handleDetailsItem}
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
            title: "Tên thiết bị",
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
            title: "Mô tả",
            dataIndex: "description",
        },
        {
            title: 'Ngày nhập',
            dataIndex: 'importDate',
            // sorter: (a, b) => moment(a.selled).unix() - moment(b.selled).unix(),
            sorter: (a, b) => moment(a.importDate).unix() - moment(b.importDate).unix(),
            render: (importDate) => moment(importDate).format('DD-MM-YYYY')
        },
        {
            title: "Hành động",
            dataIndex: "action",
            render: renderAction,
        },
    ];
    const dataTable =
        items?.data?.length &&
        items?.data?.map((item) => {
            return { ...item, key: item._id };
        });

    //Thiết lập các hành động của form
    const handleCloseDrawer = () => {
        setIsOpenDrawer(false);
        setStateItemDetails({
            name: "",
            image: "",
            component: "",
            price: "",
            availability: "",
            description: "",
            importDate: new Date("2024-04-14"),
        });
        form.resetFields();
    };
    const handleCancelDelete = () => {
        setIsModalOpenDelete(false);
    };

    const handleDeleteItem = () => {
        mutationDeleted.mutate(
            { id: rowSelected, token: user?.access_token },
            {
                onSettled: () => {
                    queryItem.refetch();
                },
            }
        );
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setStateItem({
            name: "",
            image: "",
            component: "",
            price: "",
            availability: "",
            description: "",
            importDate: new Date("2024-04-14"),
        });
        form.resetFields();
    };

    const onFinish = () => {
        const params = {
            name: stateItem.name,
            image: stateItem.image,
            component: stateItem.component,
            price: stateItem.price,
            availability: stateItem.availability,
            description: stateItem.description,
            importDate: stateItem.importDate,
        };
        mutation.mutate(params, {
            onSettled: () => {
                queryItem.refetch();
            },
        });
    };

    const handleOnchange = (e) => {
        setStateItem({
            ...stateItem,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnchangeDetails = (e) => {
        let value = e.target.value;

        // // If the value is a moment object, convert it to a string
        // if (moment.isMoment(value)) {
        //     value = value.format('DD-MM-YYYY');
        // }

        setStateItemDetails({
            ...stateItemDetails,
            [e.target.name]: value,
        });
    };

    const handleOnchangeAvatar = async ({ fileList }) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateItem({
            ...stateItem,
            image: file.preview,
        });
    };

    const handleOnchangeAvatarDetails = async ({ fileList }) => {
        const file = fileList[0];
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setStateItemDetails({
            ...stateItemDetails,
            image: file.preview,
        });
    };
    const onUpdateItem = () => {
        mutationUpdate.mutate(
            { id: rowSelected, token: user?.access_token, ...stateItemDetails },
            {
                onSettled: () => {
                    queryItem.refetch();
                },
            }
        );
    };

    const handleChangeSelect = (value) => {
        setStateItem({
            ...stateItem,
            type: value,
        });
    };

    const handleDateChange = (date) => {
        // Format the date to 'DD-MM-YYYY' format and update stateItem
        // const formattedDate = date.format('DD-MM-YYYY');
        setStateItem({ ...stateItem, importDate: date });
    };


    const handleDateChangeDetails = (date) => {
        // Update stateItemDetails with the selected date
        setStateItemDetails({ ...stateItemDetails, importDate: date });
    };


    return (
        <div>
            {/*Hiển thị phần quản lí sản phẩm */}
            <WrapperHeader>Quản lý sản phẩm</WrapperHeader>

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
                    handleDelteMany={handleDelteManyItems}
                    columns={columns}
                    isLoading={isLoadingItem}
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
                title={<WrapperTitle>Thêm sản phẩm</WrapperTitle>}
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
                            label="Tên thiết bị"
                            name="name"
                            rules={[{ required: true, message: "Please input your name!" }]}
                        >
                            <InputComponent
                                value={stateItem["name"]}
                                onChange={handleOnchange}
                                name="name"
                            />
                        </Form.Item>
                        {/* <Form.Item
                            label="Thành phần"
                            name="component"
                            rules={[{ required: true, message: "Please input your component!" }]}
                        >
                            <Select
                                name="component"
                                value={stateItem.component}
                                onChange={handleChangeSelect}
                                options={renderOptions(typeItem?.data?.data)}
                            />
                        </Form.Item> */}
                        <Form.Item
                            label="Thành phần"
                            name="component"
                            rules={[
                                { required: true, message: "Please input your component!" },
                            ]}
                        >
                            <InputComponent
                                value={stateItem.component}
                                onChange={handleOnchange}
                                name="component"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Tình trạng"
                            name="availability"
                            rules={[
                                { required: true, message: "Please input your availability!" },
                            ]}
                        >
                            <InputComponent
                                value={stateItem.availability}
                                onChange={handleOnchange}
                                name="availability"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Giá"
                            name="price"
                            rules={[
                                { required: true, message: "Please input your price!" },
                            ]}
                        >
                            <InputComponent
                                value={stateItem.price}
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
                                    message: "Please input your description!",
                                },
                            ]}
                        >
                            <InputComponent
                                value={stateItem.description}
                                onChange={handleOnchange}
                                name="description"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Ngày nhập"
                            name="importDate"
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
                                {stateItem?.image && (
                                    <img
                                        src={stateItem?.image}
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
                        onFinish={onUpdateItem}
                        autoComplete="on"
                        form={form}
                    >
                        <Form.Item
                            label="Tên thiết bị"
                            name="name"
                            rules={[{ required: true, message: "Please input your name!" }]}
                        >
                            <InputComponent
                                value={stateItemDetails["name"]}
                                onChange={handleOnchangeDetails}
                                name="name"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Thành phần"
                            name="component"
                            rules={[{ required: true, message: "Please input your component!" }]}
                        >
                            <InputComponent
                                value={stateItemDetails["component"]}
                                onChange={handleOnchangeDetails}
                                name="component"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Tình trạng"
                            name="availability"
                            rules={[
                                { required: true, message: "Please input your availability!" },
                            ]}
                        >
                            <InputComponent
                                value={stateItemDetails.availability}
                                onChange={handleOnchangeDetails}
                                name="availability"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Giá"
                            name="price"
                            rules={[
                                { required: true, message: "Please input your price!" },
                            ]}
                        >
                            <InputComponent
                                value={stateItemDetails.price}
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
                                    message: "Please input your description!",
                                },
                            ]}
                        >
                            <InputComponent
                                value={stateItemDetails.description}
                                onChange={handleOnchangeDetails}
                                name="description"
                            />
                        </Form.Item>
                        <Form.Item
                            label="Ngày nhập"
                            name="importDate"
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
                                { required: true, message: "Please input your image!" },
                            ]}
                        >
                            <WrapperUploadFile
                                onChange={handleOnchangeAvatarDetails}
                                maxCount={1}
                            >
                                <Button>Select File</Button>
                                {stateItemDetails?.image && (
                                    <img
                                        src={stateItemDetails?.image}
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
                onOk={handleDeleteItem}
            >
                <Loading isLoading={isLoadingDeleted}>
                    <div>Bạn có chắc xóa sản phẩm này không?</div>
                </Loading>
            </ModalComponent>
        </div>
    );
};

export default AdminItem;
