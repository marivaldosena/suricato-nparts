import axios from 'axios'
import Interceptors from './interceptors';
import { API_URL } from "../../../config";

const instance = axios.create({
    baseURL: `http://suricato.local${API_URL}`,
});

const i = Interceptors.init(instance);

instance.interceptors.response.use(i.successResponseInterceptor, i.errorResponseInterceptor);
instance.interceptors.request.use(i.successRequestInterceptor);

export default instance;
