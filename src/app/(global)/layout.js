import Header from "../../components/Header";
import ClubFooter from "../../components/Footer";
const GlobalLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <ClubFooter />
    </div>
  );
};

export default GlobalLayout;
