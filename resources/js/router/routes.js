export const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "login" */ './../views/Home'),
        meta: {
            icon: 'home',
        }
    },
];
