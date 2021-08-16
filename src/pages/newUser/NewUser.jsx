import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Blog</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Title</label>
          <input type="text" placeholder="Web dev" />
        </div>
        <div className="newUserItem">
          <label>Author</label>
          <input type="text" placeholder="Ahmed hasni" />
        </div>
        <div className="newUserItem">
          <label>Link</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newUserItem">
          <label>Blog description</label>
          <input type="text" placeholder="web dev is ....." />
        </div>
        
       
        
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
