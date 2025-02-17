import { useSelector } from "react-redux";
const Favourites = () => {
  const favouriteJobs = useSelector();
  return (
    <ul>
      {favouriteJobs.map((job, index) => (
        <li key={`job-${index}`}>{job}</li>
      ))}
    </ul>
  );
};
export default Favourites;
