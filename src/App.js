import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import PostList from "./pages/postlist/PostList";
import Post from "./pages/post/Post";
import NewPost from "./pages/newPost/NewPost";
import Events from "./pages/events/Events"
import EventList from "./pages/eventlist/EventList";
import NewEvent from "./pages/newevent/NewEvent";
import TeamList from "./pages/team/TeamList"
import NewTeam from "./pages/newteam/NewTeam";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/posts">
            <PostList />
          </Route>
          <Route path="/post/:postId">
            <Post />
          </Route>
          <Route path="/newPost">
            <NewPost />
          </Route>
          <Route path="/events">
            <EventList />
          </Route>
          <Route path="/event/:eventsId">
            <Events />
          </Route>
          <Route path="/newevent">
            <NewEvent />
          </Route>
          <Route path="/team">
            <TeamList />
          </Route>
          <Route path="/newteam">
            <NewTeam />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
