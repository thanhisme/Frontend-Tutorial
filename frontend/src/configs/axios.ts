import axios from "axios";

const instance = axios.create({
	baseURL: import.meta.env.VITE_REACT_APP_BASE_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

instance.interceptors.response.use((res) => res.data);

export default instance;
