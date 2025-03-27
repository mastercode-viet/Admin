import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { Select } from "antd/lib";

export const UserEdit = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Username"}
          name={["username"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          label={"Email"}
          name={["email"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
        <Input disabled />
        </Form.Item>
        <Form.Item
          label={"Số điện thoại"}
          name={["phone"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input disabled />
        </Form.Item>
        <Form.Item
          label={"Địa chỉ"}
          name={["address"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Trạng thái" name="status">
          <Select>
            <Select.Option value="active">Active</Select.Option>
            <Select.Option value="Inactive">Inactive</Select.Option>
          
          </Select>
        </Form.Item>
      </Form>
    </Edit>
  );
};
