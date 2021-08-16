import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./events.css";
  
  export default function Events() {
    return (
      <div className="event">
        <div className="eventTitleContainer">
          <h1 className="eventTitle">Edit event</h1>
          
        </div>
        <div className="eventContainer">
          <div className="eventShow">
            <div className="eventShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="eventShowImg"
              />
              <div className="eventShowTopTitle">
                <span className="eventShoweventname">PITCH FOR CHANGE</span>
              </div>
            </div>
            <div className="eventShowBottom">
              <span className="eventShowTitle">link</span>
              <div className="eventShowInfo">
                <MailOutline className="eventShowIcon" />
                <span className="eventShowInfoTitle">https://code.tutsplus.com/series/code-your-first-api-with-nodejs-and-express--cms-1291</span>
              </div>
              <span className="eventShowTitle">description</span>
              <div className="eventShowInfo">
            
                <span className="eventShowInfoTitle">event description</span>
              </div>
            </div>
          </div>
          <div className="eventUpdate">
            <span className="eventUpdateTitle">Edit</span>
            <form className="eventUpdateForm">
              <div className="eventUpdateLeft">
                <div className="eventUpdateItem">
                  <label>event title</label>
                  <input
                    type="text"
                    placeholder="PITCH FOR CHANGE"
                    className="eventUpdateInput"
                  />
                </div>
                <div className="eventUpdateItem">
                  <label>Link</label>
                  <input
                    type="text"
                    placeholder=""
                    className="eventUpdateInput"
                  />
                </div>

                <div className="eventUpdateItem">
                  <label>event description</label>
                  <input
                    type="text"
                    placeholder=""
                    className="eventUpdateInput"
                  />
                </div>
                
              </div>
              <div className="eventUpdateRight">
                <div className="eventUpdateUpload">
                  <img
                    className="eventUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="eventUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="eventUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  
  