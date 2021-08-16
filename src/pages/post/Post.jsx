import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
  } from "@material-ui/icons";
  import { Link } from "react-router-dom";
  import "./post.css";
  
  export default function Post() {
    return (
      <div className="post">
        <div className="postTitleContainer">
          <h1 className="postTitle">Edit Post</h1>
          
        </div>
        <div className="postContainer">
          <div className="postShow">
            <div className="postShowTop">
              <img
                src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
                className="postShowImg"
              />
              <div className="postShowTopTitle">
                <span className="postShowpostname">PITCH FOR CHANGE</span>
              </div>
            </div>
            <div className="postShowBottom">
              <span className="postShowTitle">link</span>
              <div className="postShowInfo">
                <MailOutline className="postShowIcon" />
                <span className="postShowInfoTitle">https://code.tutsplus.com/series/code-your-first-api-with-nodejs-and-express--cms-1291</span>
              </div>
              <span className="postShowTitle">description</span>
              <div className="postShowInfo">
            
                <span className="postShowInfoTitle">event description</span>
              </div>
            </div>
          </div>
          <div className="postUpdate">
            <span className="postUpdateTitle">Edit</span>
            <form className="postUpdateForm">
              <div className="postUpdateLeft">
                <div className="postUpdateItem">
                  <label>post title</label>
                  <input
                    type="text"
                    placeholder="PITCH FOR CHANGE"
                    className="postUpdateInput"
                  />
                </div>
                <div className="postUpdateItem">
                  <label>post Link</label>
                  <input
                    type="text"
                    placeholder=""
                    className="postUpdateInput"
                  />
                </div>

                <div className="postUpdateItem">
                  <label>post description</label>
                  <input
                    type="text"
                    placeholder=""
                    className="postUpdateInput"
                  />
                </div>
                
              </div>
              <div className="postUpdateRight">
                <div className="postUpdateUpload">
                  <img
                    className="postUpdateImg"
                    src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                  />
                  <label htmlFor="file">
                    <Publish className="postUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="postUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  