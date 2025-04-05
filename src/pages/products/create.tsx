import { PlusOutlined } from "@ant-design/icons";
import { Create, useForm } from "@refinedev/antd";
import { useList } from "@refinedev/core";
import { Form, Input, Radio, Select, Upload } from "antd";

export const ProductsCreate = () => {
  const { formProps, saveButtonProps } = useForm({});
  const { data } = useList({ resource: "categories" });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label={"Tên sản phẩm"}
          name={["title"]}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Giá sản phẩm"}
          name={["price"]}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Danh mục" name={["categories"]}>
          <Select defaultValue={"Chọn danh mục"}>
            {data?.data.map((item) => {
              return (
                <Select.Option key={item.id} value={item.title}>
                  {item.title}
                </Select.Option>
              );
            })}
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
        <Form.Item label="Ảnh sản phẩm" name="imageUrl">
          <Upload
            listType="picture-card"
            beforeUpload={() => false} // Ngăn chặn upload tự động
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
      </Form>
    </Create>
  );
};
