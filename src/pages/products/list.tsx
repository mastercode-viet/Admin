import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import type { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export const ProductsList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="title" title={"Tên sản phẩm"} />
        <Table.Column dataIndex="price" title={"Giá sản phẩm"} />
        <Table.Column dataIndex="categories" title={"Danh mục"} />
        <Table.Column dataIndex="status" title={"Tình trạng"} />
        <Table.Column dataIndex="description" title={"Mô tả"} />
        <Table.Column
          dataIndex="image"
          title={"Ảnh"}
          render={(image: string) => (
            <img
              src={image}
              alt="category"
              style={{ width: 50, height: 50, objectFit: "cover" }}
            />
          )}
        />
        <Table.Column
          title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
