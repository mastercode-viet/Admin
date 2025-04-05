import { Create, useForm } from "@refinedev/antd";
import { useList } from "@refinedev/core";
import { Form, Input, Radio, Select } from "antd";

export const ProductsCreate = () => {
  const { formProps, saveButtonProps } = useForm({});
  const { data } = useList({ resource: "categories" });
  console.log(data?.data);
  return (
    <Create saveButtonProps={saveButtonProps}>
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

            {/* <Select.Option value="2">Laptop</Select.Option>
            <Select.Option value="3">Tai nghe</Select.Option>
            <Select.Option value="4">Máy ảnh</Select.Option> */}
          </Select>
        </Form.Item>
        <Form.Item label="Tình trạng" name={["status"]}>
          <Radio.Group>
            <Radio value="Còn hàng"> Còn hàng </Radio>
            <Radio value="Hết hàng"> Hết hàng </Radio>
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
    </Create>
  );
};
