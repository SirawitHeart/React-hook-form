import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  let salary = formData.salary;
  let salaryOfYear = salary * 12;
  let taxRate = salaryOfYear * (10 / 100);
  let income = salaryOfYear - taxRate;

  return (
    <div>
      <h1>Result</h1>
      <p>
        <strong>ชื่อ: {formData.name} </strong>
      </p>
      <p>
        <strong>งาน: {formData.job} </strong>
      </p>
      <p>
        <strong>เงินเดือน: {formData.salary} บาท</strong>
      </p>
    </div>
  );
};
export default Results;
