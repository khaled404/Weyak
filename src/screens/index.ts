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
export const FooterHome = register({ loader: () => import('./FooterHome') });
