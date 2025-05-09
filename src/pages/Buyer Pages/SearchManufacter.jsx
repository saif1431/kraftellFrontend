import React from "react";
import DashBoardNavbar from "../../components/Reuseable Component/DashBoardNavbar";
import SearchProducts from "../../components/Buyer Components/SearchManufacturComponents/SearchProducts";
import Footer from "../../components/Reuseable Component/Footer";
import ProductRequestForm from "../../components/Buyer Components/ProductRequestForm";

function SearchManufacter() {
  return (
    <div className="bg-primary h-fit">
      <DashBoardNavbar />
      <div className="lg:px-18 px-8 py-16">
        <SearchProducts />
        {/* <ProductRequestForm/> */}
      </div>
      <Footer />
    </div>
  );
}

export default SearchManufacter;
