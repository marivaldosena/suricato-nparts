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
                path: 'profile',
                name: 'profile',
                component: () => import(/* webpackChunkName: "profile.admin" */ './../views/Profile'),
                meta: {
                    title: 'My profile',
                    breadcrumb: [
                        {
                            name: 'My profile'
                        }
                    ]
                }
            },
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
                path: 'buyers',
                component: () => import(/* webpackChunkName: "buyers" */ './../views/admin/buyers/Buyers'),
                meta: {
                    icon: 'customers',
                    title: 'Buyers',
                    breadcrumb: [
                        {
                            name: 'Buyers'
                        }
                    ]
                },
                children: [
                    {
                        path: '',
                        name: 'buyers.index',
                        component: () => import(/* webpackChunkName: "buyers.index" */ '../views/admin/buyers/views/Index'),
                        meta: {
                            title: 'Buyers',
                            breadcrumb: [
                                // the parent
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Buyers',
                                }
                            ]
                        },
                    },
                    {
                        path: 'create',
                        name: 'buyers.create',
                        component: () => import(/* webpackChunkName: "buyers.create" */ '../views/admin/buyers/views/Create'),
                        meta: {
                            title: 'Create Buyer',
                            breadcrumb: [
                                // the parent
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the parent, Alfred
                                {
                                    name: 'Buyers',
                                    path: '/admin/buyers',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Create Buyer',
                                }
                            ]
                        },
                    },
                    {
                        path: ':id',
                        name: 'buyers.update',
                        component: () => import(/* webpackChunkName: "buyers.update" */ '../views/admin/buyers/views/Edit'),
                        meta: {
                            title: 'Edit Buyer',
                            breadcrumb: [
                                // the parent, Alfred
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the parent, Alfred
                                {
                                    name: 'Buyers',
                                    path: '/admin/buyers',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Edit Buyer',
                                }
                            ]
                        },
                    },
                ]
            },
            {
                path: 'sellers',
                component: () => import(/* webpackChunkName: "sellers" */ './../views/admin/sellers/Sellers'),
                meta: {
                    icon: 'customers',
                    title: 'Sellers',
                    breadcrumb: [
                        {
                            name: 'Sellers'
                        }
                    ]
                },
                children: [
                    {
                        path: '',
                        name: 'sellers.index',
                        component: () => import(/* webpackChunkName: "sellers.index" */ '../views/admin/sellers/views/Index'),
                        meta: {
                            title: 'Sellers',
                            breadcrumb: [
                                // the parent
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Sellers',
                                }
                            ]
                        },
                    },
                    {
                        path: 'create',
                        name: 'sellers.create',
                        component: () => import(/* webpackChunkName: "sellers.create" */ '../views/admin/sellers/views/Create'),
                        meta: {
                            title: 'Create Seller',
                            breadcrumb: [
                                // the parent
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the parent
                                {
                                    name: 'Sellers',
                                    path: '/admin/sellers',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Create Seller',
                                }
                            ]
                        },
                    },
                    {
                        path: ':id',
                        name: 'sellers.update',
                        component: () => import(/* webpackChunkName: "sellers.update" */ '../views/admin/sellers/views/Edit'),
                        meta: {
                            title: 'Edit Seller',
                            breadcrumb: [
                                // the parent, Alfred
                                {
                                    name: 'Admin',
                                    path: '/admin',
                                },
                                // the parent, Alfred
                                {
                                    name: 'Sellers',
                                    path: '/admin/sellers',
                                },
                                // the current route, so there's not have a path
                                {
                                    name: 'Edit Seller',
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
                path: 'profile',
                name: 'profile',
                component: () => import(/* webpackChunkName: "profile.admin" */ './../views/Profile'),
                meta: {
                    title: 'My profile',
                    breadcrumb: [
                        {
                            name: 'My profile'
                        }
                    ]
                }
            },
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
    },
    {
        path: '/buyer',
        component: () => import(/* webpackChunkName "buyer" */ './../views/buyer/Buyer'),
        meta: {
            auth: {
                roles: 'buyer',
            },
        },
        children: [
            {
                path: 'profile',
                name: 'profile',
                component: () => import(/* webpackChunkName: "profile.admin" */ './../views/Profile'),
                meta: {
                    title: 'My profile',
                    breadcrumb: [
                        {
                            name: 'My profile'
                        }
                    ]
                }
            },
            {
                path: '',
                name: 'buyer.index',
                component: () => import(/* webpackChunkName "buyer.index" */ './../views/buyer/Index'),
                meta: {
                    title: 'My area',
                    breadcrumb: [
                        {
                            name: 'My area'
                        }
                    ]
                },
            },
        ]
    },
];
