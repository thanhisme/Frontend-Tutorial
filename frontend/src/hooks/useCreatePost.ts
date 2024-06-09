import { useMutation } from "@tanstack/react-query";

import { postService } from "../services";
import toast from "react-hot-toast";

const useCreatePost = () => {
	const { isPending, mutateAsync } = useMutation({
		mutationFn: postService.createPost,
		onError: () => {
			toast.error(`Error creating post`);
		},
		onSuccess: () => {
			toast.success(`Successfully created post`);
		},
	});

	return { isPending, handleCreatePost: mutateAsync };
};

export default useCreatePost;
