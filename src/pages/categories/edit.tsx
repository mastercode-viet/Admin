import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export const CategoryEdit = () => {
  const { formProps, saveButtonProps } = useForm({
    resource: "categories",
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Title"}
          name={["title"]}
          rules={[
            {
              required: true,
              message: "Title is required",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Edit>
  );
};
