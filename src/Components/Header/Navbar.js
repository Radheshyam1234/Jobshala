import { SearchBar } from "./SearchBar";
import { useStateProvider } from "../../Context/StateContext/StateProvider";
import { Link } from "react-router-dom";
import "./Styles.css";

export const Navbar = () => {
  const {
    state: { appliedJobs, savedJobs }
  } = useStateProvider();
  return (
    <div className="navbar">
      <Link to="/">
        <h2 class="nav-title">Job Shala </h2>{" "}
      </Link>
      <div className="searchField">
        <SearchBar />
      </div>

      <div className="nav-sub-section">
        <div>
          <Link to="/appliedjobs">
            <h4>
              Applied Jobs{" "}
              <sup style={{ color: "brown" }}>{appliedJobs.length}</sup>
            </h4>
          </Link>
        </div>
        <Link to="/savedjobs">
          <h4>
            Saved Jobs <sup style={{ color: "brown" }}>{savedJobs.length}</sup>
          </h4>
        </Link>
      </div>
    </div>
  );
};
