import React from 'react';
import { Shellbar } from 'fundamental-react/lib/Shellbar';
import { MultiInput } from 'fundamental-react/lib/MultiInput';
import { FormLabel } from 'fundamental-react/lib/Forms';
import { List } from 'fundamental-react/lib/List';
import { Table } from 'fundamental-react/lib/Table';
import './App.css';

function App() {

  const data = ["a", "b", "c"];

  const defaultHeaders = [
    'Column Header 1',
    'Column Header 2',
    'Column Header 3',
    'Column Header 4'
  ];
  const defaultData = [
    {
      rowData: ['Data 1', 'Data 2', 'Data 3', 'Data 4']
    },
    {
      rowData: ['Data 5', 'Data 6', 'Data 7', 'Data 8']
    }
  ];

  return (
    <div>
      <Shellbar
        productTitle='Fundamental React test' />
      <div style={{ margin: "1rem" }}>
        <FormLabel htmlFor='multiInputPrimaryExample' >Primary</FormLabel>
        <MultiInput
          buttonLabel='Show options'
          data={data}

          placeholder='Placeholder' />

        <List>
          <List.Item>
            <List.Text>Apple</List.Text>
          </List.Item>
          <List.Item>
            <List.Text>Banana</List.Text>
          </List.Item>
          <List.Item>
            <List.Text>Durian</List.Text>
          </List.Item>
          <List.Item>
            <List.Text>Grape</List.Text>
          </List.Item>
        </List>

        <Table
          headers={defaultHeaders}
          tableData={defaultData} />
      </div>
    </div>
  );
}

export default App;
