import "./newevent.css";

export default function NewEvent() {
  return (
    <div className="newEvent">
      <h1 className="newEventTitle">New Eevnt</h1>
      <form className="newEventForm">
        <div className="newEventItem">
          <label>Title</label>
          <input type="text" placeholder="Web dev" />
        </div>
        <div className="newEventItem">
          <label>Author</label>
          <input type="text" placeholder="Ahmed hasni" />
        </div>
        <div className="newEventItem">
          <label>Link</label>
          <input type="text" placeholder="" />
        </div>
        <div className="newEventItem">
          <label>Blog description</label>
          <input type="text" placeholder="web dev is ....." />
        </div>
        
       
        
        <button className="newEventButton">Create</button>
      </form>
    </div>
  );
}
