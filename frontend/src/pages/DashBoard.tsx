import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import { useState } from "react";

import { PostForm, PostList } from "../components";
import { useGetPosts } from "../hooks";

const DashBoard = () => {
	const [enabled, setEnabled] = useState(false);
	const { isLoading, data: posts } = useGetPosts(enabled);
	console.log(isLoading);

	return (
		<Card>
			<div className="flex justify-between">
				<Button
					type="primary"
					loading={isLoading}
					iconPosition="end"
					onClick={() => setEnabled(true)}
				>
					Fetch
				</Button>
				<PostForm
					button={
						<Button
							type="primary"
							iconPosition="end"
							icon={<PlusCircleOutlined />}
						>
							Add
						</Button>
					}
				/>
			</div>
			<div className="mt-3"></div>
			<PostList isLoading={isLoading} data={posts ?? []} />
		</Card>
	);
};

export default DashBoard;
