import { axios } from "../configs";

export default {
	getPosts: async (): Promise<IPost[]> => await axios.get("/posts"),
	createPost: (data: ICreatePostRequest) => axios.post("/posts", data),
};
