import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";

const { Title } = Typography;

export const UserShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"Tên người dùng"}</Title>
      <TextField value={record?.username} />
      <Title level={5}>{"email"}</Title>
      <TextField value={record?.email} />
      <Title level={5}>{"Địa chỉchỉ"}</Title>
      <TextField value={record?.address} />
      <Title level={5}>{"Tình trạng"}</Title>
      <TextField value={record?.status} />
      <Title level={5}>{"Số điện thoại"}</Title>
      <TextField value={record?.phone} />
    </Show>
  );
};
