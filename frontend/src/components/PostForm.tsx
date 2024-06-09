import { Button, Form, Input, Modal } from "antd";
import { ReactNode, useState } from "react";
import { useCreatePost, useGetPosts } from "../hooks";

const PostForm = ({ button }: { button: ReactNode }) => {
	const [form] = Form.useForm();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { handleCreatePost, isPending } = useCreatePost();
	const { refetch } = useGetPosts(isPending);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const hideModel = () => {
		setIsModalOpen(false);
	};

	return (
		<>
			<div onClick={showModal}>{button}</div>
			<Modal
				title="Create Post"
				open={isModalOpen}
				footer={null}
				onCancel={hideModel}
			>
				<Form
					form={form}
					layout="vertical"
					onFinish={async (data: IPostForm) => {
						await handleCreatePost(data);
						form.resetFields();
						setIsModalOpen(false);
						refetch();
					}}
					initialValues={{ title: "", body: "", userId: "" }}
				>
					<Form.Item
						label="Title"
						name="title"
						rules={[{ required: true, message: "Please input the title!" }]}
					>
						<Input placeholder="Enter the title" />
					</Form.Item>
					<Form.Item
						label="Body"
						name="body"
						rules={[{ required: true, message: "Please input the body!" }]}
					>
						<Input.TextArea placeholder="Enter the body" />
					</Form.Item>
					<Form.Item
						label="User ID"
						name="userId"
						rules={[{ required: true, message: "Please input the user ID!" }]}
					>
						<Input placeholder="Enter the user ID" />
					</Form.Item>
					<div className="flex justify-end">
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								loading={isPending}
								iconPosition="end"
							>
								Create Post
							</Button>
						</Form.Item>
					</div>
				</Form>
			</Modal>
		</>
	);
};

export default PostForm;
