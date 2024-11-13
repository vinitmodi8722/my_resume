import Aboutdata from "./components/Aboutdata";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium ">
        <p>
          I am currently pursuing B.Tech Degree(3rd year) In Computer Science
          Engineering From Sal Institute Of Technology & Engineering Research. I
          Have 6 Month Of Experience In Web Development and I Worked With Many
          Live Projects.
        </p>
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-500"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">what i offer</h6>
        <div className="grid gap-6 lg:grid-cols-2">
          <Aboutdata />
        </div>
      </div>
    </div>
  );
}
