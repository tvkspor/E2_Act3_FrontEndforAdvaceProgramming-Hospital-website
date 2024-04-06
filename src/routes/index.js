import AdminPage from "../pages/AdminPage/AdminPage";
import DetailsOrderPage from "../pages/DetailsOrderPage/DetailsOrderPage";
import HomePage from "../pages/HomePage/HomePage";
import MyOrderPage from "../pages/MyOrder/MyOrder";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import OrderSucess from "../pages/OrderSuccess/OrderSuccess";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import ForgottenPassWordPage from "../pages/ForgottenPassWord/ForgottenPassWordPage";import KhoaPage from "../pages/KhoaPage/KhoaPage";
import BookingPage from "../pages/BookingPage/BookingPage";
import DoctorPage from "../pages/DoctorPage/DoctorPage";
import MyMedicalRecordPage from "../pages/MyMedicalRecordPage/MyMedicalRecordPage";
import MedicalEquipment from "../pages/medicalequipment/medicalequipment";


export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/my-order",
    page: MyOrderPage,
    isShowHeader: true,
  },
  {
    path: "/my-medicalrecords",
    page: MyMedicalRecordPage,
    isShowHeader: true,
  },
  {
    path: "/details-order/:id",
    page: DetailsOrderPage,
    isShowHeader: true,
  },
  {
    path: "/payment",
    page: PaymentPage,
    isShowHeader: true,
  },
  {
    path: "/orderSuccess",
    page: OrderSucess,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: ProductsPage,
    isShowHeader: true,
  },
  {
    path: "/product/:type",
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: "/sign-in",
    page: SignInPage,
    isShowHeader: false,
  },
  {
    path: "/sign-up",
    page: SignUpPage,
    isShowHeader: false,
  },
  {
    path: "/product-details/:id",
    page: ProductDetailsPage,
    isShowHeader: true,
  },
  {
    path: "/profile-user",
    page: ProfilePage,
    isShowHeader: true,
  },
  {
    path: "/system/admin",
    page: AdminPage,
    isShowHeader: true,
    isPrivated: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
  {
    path: "/forgotpassword",
    page: ForgottenPassWordPage,
    isShowHeader: false,
  },
  {
    path: "/khoa",
    page: KhoaPage,
    isShowHeader: true,
  },

  {
    path: "/booking",
    page: BookingPage,
    isShowHeader: true,
  },
  {
    path: "/doctor",
    page: DoctorPage,
    isShowHeader: true,
  },
  {
    path: "/medicalequipment",
    page: MedicalEquipment,
    isShowHeader: true,
  },
];
