import "./newPost.css";

export default function NewPost() {
  return (
    <div className="newPost">
      <h1 className="addPostTitle">New Post</h1>
      <form className="addPostForm">
        <div className="addPostItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addPostItem">
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </div>
        <div className="addPostItem">
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </div>
        <div className="addPostItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="addPostButton">Create</button>
      </form>
    </div>
  );
}
