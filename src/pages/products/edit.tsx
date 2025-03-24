import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Radio, Select } from "antd";

export const ProductsEdit = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Tên sản phẩm"}
          name={["title"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Giá sản phẩm"}
          name={["price"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Danh mục" name={["categories"]}>
          <Select defaultValue={"Chọn danh mục"}>
            <Select.Option value="1">Điện thoại</Select.Option>
            <Select.Option value="2">Laptop</Select.Option>
            <Select.Option value="3">Tai nghe</Select.Option>
            <Select.Option value="4">Máy ảnh</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Tình trạng" name={["status"]}>
          <Radio.Group>
            <Radio value="true"> Còn hàng </Radio>
            <Radio value="false"> Hết hàng </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Mô tả sản phẩm" name="description">
          <Input.TextArea rows={5} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
