import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Image, Typography } from "antd";

const { Title } = Typography;

export const CategoryShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;
  console.log(record);

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"Title"}</Title>
      <TextField value={record?.title} />
      <Title level={5}>{"Ảnh"}</Title>
      <Image width={200} height={200} src="error" fallback={record?.image} />
    </Show>
  );
};
