import Header from "../../components/Header";
import ClubFooter from "../../components/Footer";
const GlobalLayout = ({ children }) => {
  return (
    <div>
      <div className="md:mx-[60px] mx-[16px]">
        <Header />
      </div>
      {children}

      <ClubFooter />
    </div>
  );
};

export default GlobalLayout;
