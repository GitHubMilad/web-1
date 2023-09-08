import Navbar from "../../camponents/navbar/Navbar";
import Header from "../../camponents/header/Header";
import Featured from "../../camponents/featured/Featured";
import PropertyList from "../../camponents/propertyList/PropertyList";
import "./home.css";
import FeayuerdProperties from "../../camponents/feayuerdProperties/FeayuerdProperties";
import MailList from "../../camponents/mailList/MailList";
import Footer from "../../camponents/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeayuerdProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
