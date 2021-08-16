import "./teamlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { teamRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TeamList() {
  const [data, setData] = useState(teamRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="teamListteam">
            <img className="teamListImg" src={params.row.avatar} alt="" />
            {params.row.teamname}
          </div>
        );
      },
    },
    { field:"image", headerName: "image", width: 200 },
    {
      field: "post",
      headerName: "post",
      width: 160,
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/team/" + params.row.id}>
              <button className="teamListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="teamListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="teamList">
      <Link to="/newteam">
          <button className="teamAddButton">Create</button>
      </Link>
      
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
