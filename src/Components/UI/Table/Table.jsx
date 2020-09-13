import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

const DTCTable = props =>  (
    <Table data={props.data} virtualized={true} sortColumn='name' rtl={true} rowKey='id' hover={true}  height={700} isTree={true} >
        <Column width={100} align="center" sortable={true} fixed resizable>
            <HeaderCell>ID</HeaderCell>
            <Cell dataKey="id" />
        </Column>
        <Column width={300} align="center" sortable={true} fixed resizable>
            <HeaderCell>الأسم</HeaderCell>
            <Cell dataKey="name" />
        </Column>
        <Column width={300} align="center" sortable={true} fixed resizable>
            <HeaderCell>البريد الألكترونى</HeaderCell>
            <Cell>
                {(rowData, rowIndex) => {
                    console.log(rowData , rowIndex)
                    return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>;
                }}
            </Cell>
        </Column>
        <Column width={300} align="center" sortable={true} fixed resizable>
            <HeaderCell>العنوان</HeaderCell>
            <Cell dataKey="address" />
        </Column>

    </Table>
)
export default DTCTable;