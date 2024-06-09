import { useQuery } from "@tanstack/react-query";
import { postService } from "../services";

const useGetPosts = (enabled: boolean) => {
	const { isLoading, data, refetch } = useQuery({
		enabled,
		queryKey: ["posts"],
		queryFn: postService.getPosts,
	});

	return { isLoading, data, refetch };
};

export default useGetPosts;
