import { Edit, useForm } from "@refinedev/antd";
import { useList } from "@refinedev/core";
import { Form, Input, message } from "antd";
import { useParams } from "react-router";


export const CategoryEdit = () => {
  const { id } = useParams(); // Lấy id danh mục đang chỉnh sửa
  const { formProps, saveButtonProps, onFinish } = useForm({});

  // Lấy danh sách danh mục hiện có
  const { data } = useList({
    resource: "categories",
  });

  // Kiểm tra danh mục trước khi lưu
  const handleFinish = async (values: any) => {
    const existingCategory = data?.data.find(
      (category) =>
        category.id !== id && // Bỏ qua danh mục đang chỉnh sửa
        category.title.toLowerCase() === values.title.toLowerCase()
    );

    if (existingCategory) {
      message.error("Danh mục này đã tồn tại!");
      return;
    }

    await onFinish(values);
  };

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical" onFinish={handleFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[
            { required: true, message: "Vui lòng nhập tên danh mục!" },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
