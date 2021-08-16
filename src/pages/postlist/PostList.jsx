import "./postlist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { postRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PostList() {
  const [data, setData] = useState(postRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "post title",
      headerName: "post title",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="postListItem">
            <img className="postListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "description", headerName: "description", width: 200 },
    {
      field: "link",
      headerName: "link",
      width: 120,
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/post/" + params.row.id}>
              <button className="postListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="postListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="postList">
       <Link to="/newPost">
          <button className="userAddButton">Create</button>
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
