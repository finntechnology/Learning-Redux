import { useSelector } from "react-redux";

const About = () => {
  const { username } = useSelector((state) => state.user);
  return (
    <div>
      <h1>Welcome{username}</h1>
    </div>
  );
};

export default About;
