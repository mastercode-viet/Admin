import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export const UserCreate = () => {
  const { formProps, saveButtonProps } = useForm({

  });
  const handleFinish = (values: any) => {
    return {
      ...values,
      status: "active", // Mặc định là active
      createdAt: new Date().toISOString(), // Thêm thời gian tạo
    };
  };
  

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical" initialValues={{ status: "active" }} // Đặt giá trị mặc định trong Form
        onFinish={(values) => formProps.onFinish?.(handleFinish(values))}>
        <Form.Item
          label={"Username"}
          name={["username"]}
          rules={[
            { required: true, message: "Vui lòng nhập Username!" },
            { min: 4, message: "Username phải có ít nhất 4 ký tự!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Password"}
          name={["password"]}
          rules={[
            { required: true, message: "Vui lòng nhập mật khẩu!" },
            { min: 6, message: "Mật khẩu phải có ít nhất 6 ký tự!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label={"Email"}
          name={["email"]}
          rules={[
            { required: true, message: "Vui lòng nhập Email!" },
            { type: "email", message: "Email không hợp lệ!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Địa chỉ"}
          name={["address"]}
          rules={[
            { required: true, message: "Vui lòng nhập địa chỉ!" },
            { min: 5, message: "Địa chỉ phải có ít nhất 5 ký tự!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={"Số điện thoại"}
          name={["phone"]}
          rules={[
            { required: true, message: "Vui lòng nhập số điện thoại!" },
            {
              pattern: /^[0-9]{10,11}$/,
              message: "Số điện thoại phải có 10-11 chữ số!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        
     
      </Form>
    </Create>
  );
};
