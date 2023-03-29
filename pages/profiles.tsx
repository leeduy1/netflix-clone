import { NextPageContext } from "next";

export async function getServerSideProps(context: NextPageContext) {}

const Profiles = () => {
  return (
    <div>
      <p className="text-white text-4xl">Profiles</p>
    </div>
  );
};

export default Profiles;
