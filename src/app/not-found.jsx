import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>NotFound</h2>
      <p>Sorry baby</p>
      <Link href={"/"}>return home</Link>
    </div>
  );
};

export default NotFound;
