import React from 'react'
import { UsersType } from './Users'
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { columns } from '../constants';

type Props = {
    Users: UsersType[] | null
}

const UsersTable = ({ Users }: Props) => {
    if (!Users) {
        return null
    }
    return (
        <Box sx={{ height: 500, width: '100%', p: 4 }}>
            <DataGrid
                rows={Users}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                // checkboxSelection
                disableRowSelectionOnClick
            />
        </Box >
    )
}

export default UsersTable