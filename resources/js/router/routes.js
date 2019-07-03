export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ './../views/Home'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ './../views/Login'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "register" */ '../views/Register/Register')
    },
    {
        path: '/register/buyer',
        name: 'register.buyer',
        component: () => import(/* webpackChunkName: "register.buyer" */ '../views/Register/views/BuyerRegister')
    },
    {
        path: '/register/seller',
        name: 'register.seller',
        component: () => import(/* webpackChunkName: "register.seller" */ '../views/Register/views/SellerRegister')
    },
    // todo - adicionar prefixo nessa rota: password
    {
        path: '/reset/:token?',
        name: 'reset',
        component: () => import(/* webpackChunkName: "reset" */ '../views/ResetPassword/ResetPassword'),
    },
    {
        path: '/password/create/:token',
        name: 'create.password',
        component: () => import(/* webpackChunkName: "reset" */ '../views/CreatePassword'),
    },
    {
        path: '/admin',
        component: () => import(/* webpackChunkName: "admin" */ './../views/admin/Admin'),
        meta: {
            auth: {
                roles: 'admin',
            },
        },
        children: [
            {
                path: '',
                name: 'admin',
                component: () => import(/* webpackChunkName: "admin.index" */ './../views/admin/Index'),
                meta: {
                    icon: 'home',
                    title: 'Home',
                    breadcrumb: [
                        {
                            name: 'Admin'
                        }
                    ]
                }
            },
            {
                path: 'users',
                component: () => import(/* webpackChunkName: "users" */ './../views/admin/users/Users'),
                meta: {
                    icon: 'users',
                    title: 'Usuários',
                    breadcrumb: [
                        {
                            name: 'Usuários'
                        }
                    ]
                },
                children: [
                    {
                        path: '',
                        name: 'users',
                        component: () => import(/* webpackChunkName: "users.index" */ './../views/admin/users/views/Index'),
                        meta: {
                            title: 'Users',
                            breadcrumb: [
                                // the parent, Alfred
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Users',
                                }
                            ]
                        },
                    },
                    {
                        path: 'create',
                        name: 'users.create',
                        component: () => import(/* webpackChunkName: "users.create" */ './../views/admin/users/views/Create'),
                        meta: {
                            title: 'Create User',
                            breadcrumb: [
                                // the parent, Alfred
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the parent, Alfred
                                {
                                    name: 'Users',
                                    path: '/admin/users',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Create User',
                                }
                            ]
                        },
                    },
                    {
                        path: ':id',
                        name: 'users.update',
                        component: () => import(/* webpackChunkName: "users.update" */ './../views/admin/users/views/Edit'),
                        meta: {
                            title: 'Edit User',
                            breadcrumb: [
                                // the parent, Alfred
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the parent, Alfred
                                {
                                    name: 'Users',
                                    path: '/admin/users',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Edit User',
                                }
                            ]
                        },
                    },
                ]
            },
            {
                path: 'customers/natural',
                component: () => import(/* webpackChunkName: "customers.natural" */ './../views/admin/customers/Customers'),
                meta: {
                    icon: 'customers',
                    title: 'Clientes Pessoa Física',
                    breadcrumb: [
                        {
                            name: 'Clientes Pessoa Física'
                        }
                    ]
                },
                children: [
                    {
                        path: '',
                        name: 'customers.natural',
                        component: () => import(/* webpackChunkName: "customers.natural.index" */ '../views/admin/customers/natural/views/Index'),
                        meta: {
                            title: 'Natural Person Customer',
                            breadcrumb: [
                                // the parent, Alfred
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Natural Person Customer',
                                }
                            ]
                        },
                    },
                    {
                        path: 'create',
                        name: 'customers.natural.create',
                        component: () => import(/* webpackChunkName: "customers.natural.create" */ '../views/admin/customers/natural/views/Create'),
                        meta: {
                            title: 'Create Natural Person Customer',
                            breadcrumb: [
                                // the parent, Alfred
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the parent, Alfred
                                {
                                    name: 'Natural Person Customers',
                                    path: '/admin/customers/natural',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Create Natural Person Customer',
                                }
                            ]
                        },
                    },
                    {
                        path: ':id',
                        name: 'customers.natural.update',
                        component: () => import(/* webpackChunkName: "customers.natural.update" */ '../views/admin/customers/natural/views/Edit'),
                        meta: {
                            title: 'Edit Natural Person Customer',
                            breadcrumb: [
                                // the parent, Alfred
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the parent, Alfred
                                {
                                    name: 'Natural Person Customers',
                                    path: '/admin/customers/natural',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Edit Natural Person Customer',
                                }
                            ]
                        },
                    },
                ]
            },
            {
                path: 'customers/legal',
                component: () => import(/* webpackChunkName: "customers.legal" */ './../views/admin/customers/Customers'),
                meta: {
                    icon: 'customers',
                    title: 'Clientes Pessoa Jurídica',
                    breadcrumb: [
                        {
                            name: 'Clientes Pessoa Jurídica'
                        }
                    ]
                },
                children: [
                    {
                        path: '',
                        name: 'customers.legal',
                        component: () => import(/* webpackChunkName: "customers.legal.index" */ '../views/admin/customers/legal/views/Index'),
                        meta: {
                            title: 'Legal Person Customer',
                            breadcrumb: [
                                // the parent, Alfred
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Legal Person Customer',
                                }
                            ]
                        },
                    },
                    {
                        path: 'create',
                        name: 'customers.legal.create',
                        component: () => import(/* webpackChunkName: "customers.legal.create" */ '../views/admin/customers/legal/views/Create'),
                        meta: {
                            title: 'Create Legal Person Customer',
                            breadcrumb: [
                                // the parent, Alfred
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the parent, Alfred
                                {
                                    name: 'Legal Person Customers',
                                    path: '/admin/customers/legal',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Create Legal Person Customer',
                                }
                            ]
                        },
                    },
                    {
                        path: ':id',
                        name: 'customers.legal.update',
                        component: () => import(/* webpackChunkName: "customers.legal.update" */ '../views/admin/customers/legal/views/Edit'),
                        meta: {
                            title: 'Edit Legal Person Customer',
                            breadcrumb: [
                                // the parent, Alfred
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the parent, Alfred
                                {
                                    name: 'Legal Person Customers',
                                    path: '/admin/customers/legal',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Edit Legal Person Customer',
                                }
                            ]
                        },
                    },
                ]
            },
        ]
    },
    {
        path: '/seller',
        component: () => import(/* webpackChunkName "seller" */ './../views/seller/Seller'),
        meta: {
            auth: {
                roles: 'seller',
            },
        },
        children: [
            {
                path: '',
                name: 'seller.index',
                component: () => import(/* webpackChunkName "seller.index" */ './../views/seller/Index'),
                meta: {
                    title: 'My area',
                    breadcrumb: [
                        {
                            name: 'My area'
                        }
                    ]
                },
            },
            {
                path: 'announcements',
                component: () => import(/* webpackChunkName: "seller.announcements" */ './../views/seller/announcements/Announcements'),
                meta: {
                    title: 'Announcements',
                    breadcrumb: [
                        {
                            name: 'Announcements'
                        }
                    ]
                },
                children: [
                    {
                        path: '',
                        name: 'announcements',
                        component: () => import(/* webpackChunkName: "seller.announcements.index" */ './../views/seller/announcements/views/Index'),
                        meta: {
                            title: 'Announcements',
                            breadcrumb: [
                                // the parent
                                {
                                    name: 'My area',
                                    path: '/seller',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Announcements',
                                }
                            ]
                        },
                    },
                    {
                        path: 'create',
                        name: 'seller.announcements.create',
                        component: () => import(/* webpackChunkName: "seller.announcements.create" */ './../views/seller/announcements/views/Create'),
                        meta: {
                            title: 'Create Announcement',
                            breadcrumb: [
                                // the parent
                                {
                                    name: 'My area',
                                    path: '/seller',
                                },
                                // the parent, Alfred
                                {
                                    name: 'Announcements',
                                    path: '/seller/announcements',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Create Announcement',
                                }
                            ]
                        },
                    },
                    {
                        path: ':id',
                        name: 'seller.announcements.update',
                        component: () => import(/* webpackChunkName: "seller.announcements.update" */ './../views/seller/announcements/views/Edit'),
                        meta: {
                            title: 'Edit Announcement',
                            breadcrumb: [
                                // the parent
                                {
                                    name: 'My area',
                                    path: '/seller',
                                },
                                // the parent, Alfred
                                {
                                    name: 'Announcements',
                                    path: '/seller/announcements',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Edit Announcement',
                                }
                            ]
                        },
                    },
                ]
            },
        ]
    }
    // {
    //     path: '/customer',
    //     component: () => import(/* webpackChunkName: "customer" */ './../views/customer/Customer'),
    //     children: [
    //         {
    //             path: 'natural',
    //             name: 'customer.natural',
    //             component: () => import(/* webpackChunkName: "customer.natural" */ './../views/customer/natural/Natural'),
    //             meta: {
    //                 auth: {
    //                     roles: 'buyer',
    //                 },
    //             },
    //         },
    //         {
    //             path: 'legal',
    //             name: 'customer.legal',
    //             component: () => import(/* webpackChunkName: "customer.legal" */ './../views/customer/legal/Legal'),
    //             meta: {
    //                 auth: {
    //                     roles: 'seller',
    //                 },
    //             },
    //         }
    //     ]
    // },
];
