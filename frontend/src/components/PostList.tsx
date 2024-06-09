import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Table } from "antd";

import { ColumnsType } from "antd/es/table";

const columns: ColumnsType<IPost> = [
	{
		title: "Id",
		dataIndex: "id",
		key: "id",
		width: 100,
	},
	{
		title: "Title",
		dataIndex: "title",
		key: "title",
		width: 300,
		ellipsis: true,
	},
	{
		title: "Body",
		dataIndex: "body",
		key: "body",
		ellipsis: true,
		// width: 300,
	},
	{
		title: "User Id",
		dataIndex: "userId",
		key: "userid",
		width: 100,
	},
];

const PostList = ({
	data,
	isLoading,
}: {
	data: IPost[];
	isLoading: boolean;
}) => {
	return (
		<Table
			loading={{
				spinning: isLoading,
				indicator: (
					<Spin
						indicator={
							<LoadingOutlined
								style={{
									fontSize: 24,
								}}
								spin
							/>
						}
					/>
				),
			}}
			// size="small"
			columns={columns}
			dataSource={data}
			className="table-striped-rows"
		/>
	);
};

export default PostList;
