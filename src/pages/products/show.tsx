import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Image } from "antd";

const { Title } = Typography;

export const ProductsShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <TextField value={record?.id} />
      <Title level={5}>{"Tên sản phẩm"}</Title>
      <TextField value={record?.title} />
      <Title level={5}>{"Giá sản phẩm"}</Title>
      <TextField value={record?.price} />
      <Title level={5}>{"Danh mục"}</Title>
      <TextField value={record?.categories} />
      <Title level={5}>{"Tình trạng"}</Title>
      <TextField value={record?.status} />
      <Title level={5}>{"Mô tả"}</Title>
      <TextField value={record?.description} />
      {record?.imageUrl && (
        <>
          <Title level={5}>{"Ảnh sản phẩm"}</Title>
          <Image src={record.imageUrl} width={150} />
        </>
      )}
    </Show>
  );
};
