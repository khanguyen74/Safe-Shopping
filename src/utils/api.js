import axios from 'axios';

const route_api = "http://127.0.0.1:8080"

const instance = axios.create({
    baseURL: `${route_api}/api/`,
    timeout: 10000,
    headers: { authorization: localStorage.getItem('auth_token') }
});

const api = {
    route: `${route_api}/api`,
    instance,
    login: (params) => instance.post("/user/login", params),
    me: () => instance.post("/user/me"),
    shop: (params) => instance.get("/shop/"+params.domain),
    createReview: (params) => instance.post("/review/create", params),
    getReviews: (params) => instance.get("/review/get/"+params.shopId),
    getReviewsAverage: (params) => instance.get("/review/get-average/"+params.shopId),
    getHiddenElement: (params) => instance.get("/hidden-url/"+params.domain),
    register: (params) => instance.post("/user/register", params),
}

export default api;