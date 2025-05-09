import React, { useEffect, useState } from "react";

function FilterProducts({ onFilterChange }) {
  // Product types state
  const [productTypes, setProductTypes] = useState([
    { id: 1, name: "Electronics", checked: false },
    { id: 2, name: "Textiles", checked: false },
    { id: 3, name: "Books", checked: false },
    { id: 4, name: "Plastics", checked: false },
    { id: 5, name: "Other", checked: false },
  ]);
  const [manufacturingProcess, setManufacturingProcess] = useState([
    { id: 1, name: "3D Printing", checked: false },
    { id: 2, name: "Injection Molding", checked: false },
    { id: 3, name: "CNC Machining", checked: false },
    { id: 4, name: "Other", checked: false },
  ]);

  // Country selection state
  const [selectedCountry, setSelectedCountry] = useState("");

  // Update filters in parent when any value changes
  useEffect(() => {
    const selectedProductTypes = productTypes
      .filter((p) => p.checked)
      .map((p) => p.name);
    const selectedProcesses = manufacturingProcess
      .filter((p) => p.checked)
      .map((p) => p.name);
    onFilterChange({
      productTypes: selectedProductTypes,
      processes: selectedProcesses,
      location: selectedCountry,
    });
  }, [productTypes, manufacturingProcess, selectedCountry, onFilterChange]);

  // Handlers
  const handleProductTypeChange = (index) => {
    const updated = [...productTypes];
    updated[index].checked = !updated[index].checked;
    setProductTypes(updated);
  };

  const handleProcessChange = (index) => {
    const updated = [...manufacturingProcess];
    updated[index].checked = !updated[index].checked;
    setManufacturingProcess(updated);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div className="p-6">
      {/* Product Types */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Product Types</h2>
        {productTypes.map((type, idx) => (
          <label key={type.name} className="block mb-1">
            <input
              type="checkbox"
              checked={type.checked}
              onChange={() => handleProductTypeChange(idx)}
              className="mr-2"
            />
            {type.name}
          </label>
        ))}
      </div>

      {/* Manufacturing Processes */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Manufacturing Processes</h2>
        {manufacturingProcess.map((proc, idx) => (
          <label key={proc.name} className="block mb-1">
            <input
              type="checkbox"
              checked={proc.checked}
              onChange={() => handleProcessChange(idx)}
              className="mr-2"
            />
            {proc.name}
          </label>
        ))}
      </div>

      {/* Country Selection */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Location</h2>
        <select
          value={selectedCountry}
          onChange={handleCountryChange}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">All Countries</option>
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="China">China</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Vietnam">Vietnam</option>
          {/* Add more countries as needed */}
        </select>
      </div>
    </div>
  );
}

export default FilterProducts;
