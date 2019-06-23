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
        path: '/admin',
        component: () => import(/* webpackChunkName: "admin" */ './../views/admin/Admin'),
        meta: {
            auth: {
                roles: 1,
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
                ]
            },
        ]
    },
    {
        path: '/customer',
        component: () => import(/* webpackChunkName: "customer" */ './../views/customer/Customer'),
        children: [
            {
                path: 'natural',
                name: 'customer.natural',
                component: () => import(/* webpackChunkName: "customer.natural" */ './../views/customer/natural/Natural'),
                meta: {
                    auth: {
                        roles: 2,
                    },
                },
            },
            {
                path: 'legal',
                name: 'customer.legal',
                component: () => import(/* webpackChunkName: "customer.legal" */ './../views/customer/legal/Legal'),
                meta: {
                    auth: {
                        roles: 3,
                    },
                },
            }
        ]
    },
];
