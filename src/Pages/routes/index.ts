import { Admin } from '../Admin/AdminPage/Admin';
import { Device } from 'Pages/Admin/Device/Device';
import { Information } from 'Pages/Admin/Information/Information';
import { Dashboard } from 'Pages/Admin/Dashboard/Dashboard';
import { AddItem } from 'Pages/Admin/Device/AddItem';
import { DetailsDevice } from 'Pages/Admin/Device/DetailsDevice';
import { ManageItem } from 'Pages/Admin/Device/ManageItem';
const publicRoutes = [
    {
        path: '/',
        component: Admin
    },
    {
        path: '/device',
        component: Device,
    },
    {
        path: '/add-item',
        component: AddItem,
    },
    {
        path: '/details-device',
        component: DetailsDevice,
    },
    {
        path: '/manage-device',
        component: ManageItem,
    },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/information',
        component: Information,
    },
]

export { publicRoutes }