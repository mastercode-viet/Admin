import { Create, useForm} from "@refinedev/antd";
import { useList } from "@refinedev/core";
import { Form, Input, message } from "antd";

export const CategoryCreate = () => {
  const { formProps, saveButtonProps, onFinish } = useForm({});
  
  // Lấy danh sách danh mục hiện có
  const { data } = useList({
    resource: "categories",
  });

  // Kiểm tra danh mục trước khi gửi
  const handleFinish = async (values: any) => {
    const existingCategory = data?.data.find(
      (category) => category.title.toLowerCase() === values.title.toLowerCase()
    );

    if (existingCategory) {
      message.error("Danh mục này đã tồn tại!");
      return;
    }

    await onFinish(values);
  };

  return (
    <Create saveButtonProps={saveButtonProps}>
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
    </Create>
  );
};
