import { useState } from "react";

const Form = () => {
  const [activeTab, setActiveTab] = useState("personal-tab-section");
  const [formData, setFormData] = useState({});
  const [showWhatDisability, setShowWhatDisability] = useState(false);
  const [showWhatCountry, setShowWhatCountry] = useState(false);
  const [showTemporaryAddress, setShowTemporaryAddress] = useState(false);

  const handleInputChange = (tab, field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [tab]: {
        ...prevFormData[tab],
        [field]: value,
      },
    }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can perform further actions with the form data here
  };

  const renderInputField = (tab, field) => {
    const fieldLabel = field.split("@")[0].split("*")[0].split("(")[0].trim();
    const isRequired = field.includes("*");
    let fieldType = field.includes("!") ? "checkbox" : "text";
    const dropdownValues = field.split("@")[1]?.split(",") || [];
    fieldType = field === "Date of Birth" ? "date" : fieldType;

    const handleChange = (e) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      handleInputChange(tab, field, value);

      if (field === "Are you specially abled?!") {
        setShowWhatDisability(value);
      } else if (field === "Are you an NRI or Foreigner?!") {
        setShowWhatCountry(value);
      } else if (field === "Is permanent address outside bangalore?!") {
        setShowTemporaryAddress(value);
      }
    };

    return (
      <div key={field} className="my-4">
        <label htmlFor={field}>{fieldLabel}</label>
        {dropdownValues.length > 0 ? (
          <select
            id={field}
            name={field}
            className="border border-gray-300 rounded p-2 w-full"
            required={isRequired}
            value={formData[tab]?.[field] || ""}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            {dropdownValues.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={fieldType}
            id={field}
            name={field}
            className="border border-gray-300 rounded p-2 w-full"
            required={isRequired}
            value={formData[tab]?.[field] || ""}
            onChange={handleChange}
          />
        )}
      </div>
    );
  };

  const renderSubmitButton = () => {
    if (activeTab === "course-details") {
      return (
        <div className="  flex justify-center">
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      );
    }
    return null;
  };

  const handlePrevious = () => {
    const tabs = [
      "personal-tab-section",
      "contact-info-section",
      "parents-details",
      "education-details",
      "course-details",
    ];
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    const tabs = [
      "personal-tab-section",
      "contact-info-section",
      "parents-details",
      "education-details",
      "course-details",
    ];
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  return (
    <div className="px-4 lg:px-24 bg-gradient-to-b from-gray-900 to-gray-600 r ">
      <div className="container mx-auto py-8">
        <div className="flex justify-center mb-4">
          <button
            className={`py-2 px-2 mx-1 rounded-2xl lg:mx-2 ${
              activeTab === "personal-tab-section"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("personal-tab-section")}
          >
            Personal
          </button>
          <button
            className={`py-2 px-2 mx-1 rounded-2xl lg:mx-2 ${
              activeTab === "contact-info-section"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("contact-info-section")}
          >
            Contact
          </button>
          <button
            className={`py-2 px-2 mx-1 rounded-2xl lg:mx-2 ${
              activeTab === "parents-details"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("parents-details")}
          >
            Parents
          </button>
          <button
            className={`py-2 px-2 mx-1 rounded-2xl lg:mx-2 ${
              activeTab === "education-details"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("education-details")}
          >
            Education
          </button>
          <button
            className={`py-2 px-2 mx-1 rounded-2xl lg:mx-2 ${
              activeTab === "course-details"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => handleTabChange("course-details")}
          >
            Course
          </button>
        </div>

        <form onSubmit={handleSubmit} className="text-white">
          <div
            className={`${
              activeTab === "personal-tab-section" ? "block" : "hidden"
            }`}
          >
            {[
              "Student name",
              "Date of Birth",
              "Place of Birth",
              "Gender@Male,Female,Other",
              "Blood group",
              "Nationality",
              "Aadhar Number",
              "Religion",
              "Caste",
              "Subcaste",
              "Are you specially abled?!",
              showWhatDisability && "if yes, specify type*",
              "Are you an NRI or Foreigner?!",
              showWhatCountry && "Country*",
            ]
              .filter(Boolean)
              .map((field) => renderInputField("personal-tab-section", field))}
          </div>

          <div
            className={`${
              activeTab === "contact-info-section" ? "block" : "hidden"
            }`}
          >
            {[
              "Student phone number",
              "Student email address",
              "Permanent address",
              "Is permanent address outside bangalore?!",
              showTemporaryAddress && "Temporary address*",
            ]
              .filter(Boolean)
              .map((field) => renderInputField("contact-info-section", field))}
          </div>

          <div
            className={`${
              activeTab === "parents-details" ? "block" : "hidden"
            }`}
          >
            {[
              "Father's Name",
              "Father's Phone number",
              "Father's Occupation",
              "Mother's Name",
              "Mother's Phone number",
              "Mother's Occupation",
              "Guadian's Name*",
              "Guardian's Phone number*",
              "Annual household income",
            ].map((field) => renderInputField("parents-details", field))}
          </div>

          <div
            className={`${
              activeTab === "education-details" ? "block" : "hidden"
            }`}
          >
            {[
              "Name of previous college",
              "Place of previous college",
              "Year and month of passing",
              "Previous Register number",
              "Board@CBSE,ICSE,SSC",
              "extracurriculer-activities",

              "total marks",
              "percent/cgpa",
            ].map((field) => renderInputField("education-details", field))}
          </div>
          {activeTab === "education-details" && (
            <div className="">
              <p>Enter marks obtained</p>
              <div className="lg:mx-48">
                <table cellPadding={2} cellSpacing={2}>
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Marks obtained</th>
                      <th>Max marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      "languauge1",
                      "language2",
                      "core1",
                      "core2",
                      "core3",
                      "core4",
                      "core5",
                    ].map((field) => (
                      <tr key={field}>
                        <td>
                          <input type="text" className="w-30"></input>
                        </td>
                        <td className="w-6">
                          <input type="number" size={6}></input>
                        </td>
                        <td className="w-8">
                          <input type="number" size={6}></input>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          <div
            className={`${activeTab === "course-details" ? "block" : "hidden"}`}
          >
            {[
              "course@BCOM, BA - Journalism and Political science, BA-Journalism and Psychology ",
              "second-language@Hindi,Kannada,Addition English",
            ].map((field) => renderInputField("course-details", field))}
          </div>

          <div className="mt-8 flex justify-between">
            {activeTab !== "personal-tab-section" && (
              <button
                type="button"
                className="py-2 px-4 bg-blue-500 text-white rounded"
                onClick={handlePrevious}
              >
                Previous
              </button>
            )}
            {renderSubmitButton()}
            {activeTab !== "course-details" && (
              <button
                type="button"
                className="py-2 px-4 bg-blue-500 text-white rounded"
                onClick={handleNext}
              >
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
