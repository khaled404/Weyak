import { register } from 'react-native-bundle-splitter';
export const Home = register({ loader: () => import('./Home') });
export const Voucher = register({ loader: () => import('./Voucher') });
export const Language = register({ loader: () => import('./Language') });
export const Country = register({ loader: () => import('./Country') });
