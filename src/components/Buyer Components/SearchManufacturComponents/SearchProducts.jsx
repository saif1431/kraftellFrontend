import React, { useState, useEffect } from "react";
import FilterProducts from "./FilterProducts";
import ManufacturerSearchResults from "./ManufacturerSearchResults";
import axios from "axios";
import BASE_URL from "../../../config";

function SearchProducts() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    productTypes: [],
    processes: [],
    location: "",
  });
  const [results, setResults] = useState([]);

  // Fetch manufacturers
  const fetchManufacturers = async () => {
    try {
      const params = {
        productType: filters.productTypes.join(","),
        process: filters.processes.join(","),
        location: filters.location,
      };
      const token = localStorage.getItem("token"); // if using JWT

      const { data } = await axios.get(`${BASE_URL}/api/search/discover`, {
        headers: { Authorization: `Bearer ${token}` },
        params,
      });

      setResults(data);
    } catch (err) {
      console.error("Error fetching manufacturers:", err);
    }
  };

  useEffect(() => {
    fetchManufacturers();
  }, [filters]);

  return (
    <div>
      <div className="bg-white p-4 rounded-lg">
        <input
          className="text-lg w-full border-none outline-none"
          type="text"
          placeholder="Search Here............"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-6 mt-12">
        <div className="bg-white rounded-lg lg:w-[20%] w-full">
          <FilterProducts onFilterChange={setFilters} />
        </div>
        <div className="flex-1 rounded-lg">
          <ManufacturerSearchResults manufacturers={results} />
        </div>
      </div>
    </div>
  );
}

export default SearchProducts;
