import { Admin } from '../Admin/AdminPage/Admin';
import { Device } from 'Pages/Admin/Device/Device';
import { Information } from 'Pages/Admin/Information/Information';
import { Dashboard } from 'Pages/Admin/Dashboard/Dashboard';
import { UpdateItem } from 'Pages/Admin/Device/UpdateItem';
import { ListService } from 'Pages/Admin/ServicePage/ListService';
import { Report } from 'Pages/Admin/Report/Report';

import { AddItem } from 'Pages/Admin/Device/AddItem';
import { DetailsDevice } from 'Pages/Admin/Device/DetailsDevice';
import { AddService } from 'Pages/Admin/ServicePage/AddService';
import { UpdateService } from 'Pages/Admin/ServicePage/UpdateService';
import { DetailService } from 'Pages/Admin/ServicePage/DetailService';
import { ManageNumber } from 'Pages/Admin/ManageNumber/ManageNumber';
import { NewNumber } from 'Pages/Admin/NewNumber/NewNumber';
import { Details } from 'Pages/Admin/ManageNumber/Details';
import { ManageAccount } from 'Pages/Admin/ManageAccount/ManageAccount';
import { AddAccount } from 'Pages/Admin/ManageAccount/AddAccount';
import { UpdateAccount } from 'Pages/Admin/ManageAccount/UpdateAccount';
import { MemoryUser } from 'Pages/Admin/MemoryUser/MemoryUser';
import { ManageRole } from 'Pages/Admin/ManageRole/ManageRole';
import { ListRole } from 'Pages/Admin/ManageRole/AddRole';
import { UpdateRole } from 'Pages/Admin/ManageRole/UpdateRole';

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
        path: '/details-device/:id',
        component: DetailsDevice,
    },
    {
        path: '/update-device/:id',
        component: UpdateItem,
    },
    {
        path: '/manage-service',
        component: ListService,
    },
    {
        path: '/add-service',
        component: AddService,
    },
    {
        path: '/detail-service/:id',
        component: DetailService,
    },
    {
        path: '/update-service/:id',
        component: UpdateService,
    },
    {
        path: '/manage-number',
        component: ManageNumber,
    },
    {
        path: '/new-number',
        component: NewNumber,
    },
    {
        path: '/details-number/:id',
        component: Details
    },
    {
        path: '/report',
        component: Report,
    },
    {
        path: '/manage-account',
        component: ManageAccount,
    },
    {
        path: '/add-account',
        component: AddAccount,
    },
    {
        path: '/update-account/:id',
        component: UpdateAccount,
    },
    {
        path: '/memory-user',
        component: MemoryUser,
    },
    {
        path: '/manage-role',
        component: ManageRole,
    },
    {
        path: '/add-role',
        component: ListRole,
    },
    {
        path: '/update-role/:id',
        component: UpdateRole,
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