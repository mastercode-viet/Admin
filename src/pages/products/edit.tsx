import { PlusOutlined } from "@ant-design/icons";
import { Edit, useForm } from "@refinedev/antd";

import { useList } from "@refinedev/core";
import { Form, Input, Radio, Select } from "antd";



export const ProductsEdit = () => {
  const { formProps, saveButtonProps } = useForm({});
  const { data } = useList({ resource: "categories" });
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
            {data?.data.map((item) => {
              return (
                <Select.Option value={item.title}>{item.title}</Select.Option>
              );
            })}
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

        <Form.Item
          label="Image"
          name="image"
          rules={[{ required: true, message: "Vui lòng nhập ảnh!" }]}
        >
          <Input />


        </Form.Item>
      </Form>
    </Edit>
  );
};
