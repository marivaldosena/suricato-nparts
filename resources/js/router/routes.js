export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "login" */ './../views/Home'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ './../views/Login'),
    },
];
