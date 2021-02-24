
function commissionedEmployee(name, title) {
  let emp = Employee(name, title);
  let baseSalary = 0;
  let commissionRate = 0;
  emp.setBaseSalary = setBaseSalary;
  emp.setCommissionRate = setCommissionRate;
  emp.setSalesVolume = setSalesVolume;
  emp.getPay = getPay;
  return emp;

  function setBaseSalary(dollars) {
    baseSalary = dollars;
  }
  function setCommissionRate(rate) {
    commissionRate = rate;
  }
  function setSalesVolume(dollars) {
    salesVolume = dollars;
  }
  function getPay() {
    return baseSalary + (salesVolume * commissionRate);
  }
}

function salariedEmployee(name, title) {
  let emp = Employee(name, title);
  let salary = 0;
  emp.setSalary = setSalary;
  emp.getPay = getPay;
  return emp;

  function setSalary(salary) {
    setSalary = salary;
  }
  function getPay() {
    return salary;
  }
}