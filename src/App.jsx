import { useState, useEffect } from "react";
import Card from "./components/Card";
import Skeleton from "./components/Skeleton";
import CardOne from "./components/CardOne";
import CardTwo from "./components/CardTwo";
import CardThree from "./components/CardThree";
import CardFour from "./components/CardFour";
import UserProfileCard from "./components/UserProfileCard";

function App() {
  /*
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  */
  return (
    /*
    <div className="flex justify-center items-center h-screen">
      {loading ? <Skeleton /> : <Card />}
    </div>
      <CardOne />
      <CardTwo />
      <CardThree />
    */
    <>
      <UserProfileCard />
    </>
  );
}

export default App;
