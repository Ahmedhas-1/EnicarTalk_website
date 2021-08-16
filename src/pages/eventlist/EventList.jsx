import "./eventlist.css"
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { eventRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function EventList() {
  const [data, setData] = useState(eventRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "event",
      headerName: "Event",
      width: 200,
       renderCell: (params) => {
         return (
           <div className="EventListUser">
             {params.row.event}
           </div>
         );
      },
    },
    { field: "link", headerName: "Link", width: 200 },
    
    {
      field: "description",
      headerName: "Description",
      width: 170,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/event/" + params.row.id}>
              <button className="EventListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="EventListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="EventList">
      <Link to="/newevent">
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