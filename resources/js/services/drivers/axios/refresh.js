export default class Refresh{
    isRefreshing = false;
    refreshSubscribers = [];
    instance = null;

    constructor(instance){
        this.instance = instance;
    }

    static init (instance){
        return new this(instance);
    }

    handleRefreshToken(err){
        const { config } = err;
        const originalRequest = config;

        if(!this.isRefreshing){
            this.isRefreshing = true;

            this.instance.post('/auth/refresh')
                .then(response => {
                    this.isRefreshing = false;
                    this.onRefreshed(response.data.access_token);
                    this.refreshSubscribers = [];
                });

            return new Promise((resolve, reject) => {
                this.subscribeTokenRefresh(token => {

                    originalRequest.headers['Authorization'] = 'Bearer ' + token;
                    localStorage.setItem('token', token);
                    resolve(this.instance(originalRequest));
                });
            });
        }
    }

    subscribeTokenRefresh(cb) {
        this.refreshSubscribers.push(cb);
    }

    onRefreshed(token) {
        this.refreshSubscribers.map(cb => cb(token));
    }
}
