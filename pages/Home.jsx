// Import the React library
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setUsername, updateUserPlace } from "../src/features/user/userSlice";

// Define the Home component as a functional component
const Home = () => {
  const { username, place, dob, university, experience } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();

  const handleUserNameUpdate = () => {
    dispatch(setUsername("Mr Momoh"));
  };

  const handleUserPlaceUpdate = () => {
    dispatch(updateUserPlace("Lagos"));
  };

  return (
    <div>
      <Link to="/about" className="text-lg font-extrabold">
        About
      </Link>
      <h1>Welcome {username}</h1>
      <h1>I stay in {place}</h1>
      <h2> Date of birth{dob}</h2>
      <h3>I went to {university}</h3>
      <h4>I have {experience} experience</h4>
      <p>This is our home page</p>
      <button onClick={handleUserPlaceUpdate}>Update Userplace</button> <br />
      <button onClick={handleUserNameUpdate}>Update Username</button>
    </div>
  );
};

// Export the Home component to be used in other parts of the application
export default Home;
