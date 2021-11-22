import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import './home.css';

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="home-container">
          <Sidebar />
          <Feed />
          <Rightbar />
      </div>
    </>
  );
};

export default Home;
