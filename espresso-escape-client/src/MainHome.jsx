import Banner from "./Banner";
import CoffeesHome from "./CoffeesHome";
import InstaHome from "./InstaHome";
import Intro from "./Intro";

const MainHome = () => {
  return (
    <div>
      <Banner></Banner>
      <Intro></Intro>

      <CoffeesHome></CoffeesHome>

      <InstaHome></InstaHome>
    </div>
  );
};

export default MainHome;
