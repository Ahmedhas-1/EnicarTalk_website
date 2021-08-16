import "./newteam.css";

export default function NewTeam() {
  return (
    <div className="newteam">
      <h1 className="addteamTitle">New team member</h1>
      <form className="addteamForm">
        <div className="addteamItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addteamItem">
          <label>Name</label>
          <input type="text" placeholder="Ahmed hasni" />
        </div>
        <div className="addteamItem">
          <label>Post</label>
          <input type="text" placeholder="lead" />
        </div>
        
        <button className="addteamButton">Create</button>
      </form>
    </div>
  );
}
