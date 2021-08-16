import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.css";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit Blog</h1>
        
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Web dev</span>
              <span className="userShowUserTitle">Ahmed hasni</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Blog Details</span>
           
           
            <span className="userShowTitle">link</span>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">https://code.tutsplus.com/series/code-your-first-api-with-nodejs-and-express--cms-1291</span>
            </div>
            <span className="userShowTitle">description</span>
            <div className="userShowInfo">
          
              <span className="userShowInfoTitle">Blog description</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Blog title</label>
                <input
                  type="text"
                  placeholder="Web dev"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>author</label>
                <input
                  type="text"
                  placeholder="Ahmed hasni"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>blog link</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>blog description</label>
                <input
                  type="text"
                  placeholder=""
                  className="userUpdateInput"
                />
              </div>
              
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
