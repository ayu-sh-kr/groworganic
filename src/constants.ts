import { GridColDef } from "@mui/x-data-grid";

export const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    editable: true,
  },
  {
    field: "username",
    headerName: "Username",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "street",
    headerName: "Street",
    width: 200,
    editable: true,
    valueGetter: (_, row) => row.address.street,
  },
  {
    field: "city",
    headerName: "City",
    width: 150,
    editable: true,
    valueGetter: (_, row) => row.address.city,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
    editable: true,
  },
  {
    field: "website",
    headerName: "Website",
    width: 200,
    editable: true,
  },
  {
    field: "companyName",
    headerName: "Company",
    width: 200,
    editable: true,
    valueGetter: (_, row) => row.company.name,
  },
];
