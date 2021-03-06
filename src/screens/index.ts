import { register } from 'react-native-bundle-splitter';
export const Home = register({ loader: () => import('./Home') });
export const Voucher = register({ loader: () => import('./Voucher') });
export const Language = register({ loader: () => import('./Language') });
export const Country = register({ loader: () => import('./Country') });
export const RX = register({ loader: () => import('./RX') });
export const PrescriptionWithoutInsurance = register({ loader: () => 
    import('./PrescriptionWithoutInsurance') });
export const PrescriptionAdd = register({ loader: () => 
        import('./PrescriptionAdd') });
export const RequestInProgress = register({ loader: () => import('./RequestInProgress') });
export const PrescriptionDetails = register({ loader: () => import('./PrescriptionDetails') });
export const Cart = register({ loader: () => import('./Cart') });
export const CheckOut = register({ loader: () => import('./CheckOut') });
export const OrderConfirmation = register({ loader: () => import('./OrderConfirmation') });
export const Register = register({ loader: () => import('./Auth/Register') });
export const PhoneCode = register({ loader: () => import('./Auth/PhoneCode') });
export const ConfirmPhoneCode = register({ loader: () => import('./Auth/ConfirmPhoneCode') });
export const Login = register({ loader: () => import('./Auth/Login') });
