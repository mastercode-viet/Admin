import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { type BaseRecord, useMany } from "@refinedev/core";
import { Space, Table } from "antd";
import { Tag } from "antd/lib";

export const UsersList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });
  console.log(tableProps.dataSource); 


  return (
    <List>

      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title={"ID"} />
        <Table.Column dataIndex="username" title={"Tên người dùng"} />
        <Table.Column dataIndex="phone" title={"Số điện thoại"} />
        <Table.Column dataIndex="address" title={"Địa chỉ"} />
        <Table.Column
          dataIndex="status"
          title="Trạng thái"
          render={(status: string) => (
            <Tag color={status === "active" ? "green" : "red"}>{status}</Tag>
          )}
        />
        <Table.Column
  dataIndex="createdAt"
  title="Ngày tạo"
  render={(value) => <DateField value={value} format="DD/MM/YYYY HH:mm" />}
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
