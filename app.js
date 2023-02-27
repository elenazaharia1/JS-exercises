var employees = [
  {
    id: 1,
    firstName: "Solly",
    lastName: "Coon",
    email: "scoon0@miitbeian.gov.cn",
    gender: "Male",
    salary: "293.27",
  },
  {
    id: 2,
    firstName: "Myron",
    lastName: "Clissold",
    email: "mclissold1@over-blog.com",
    gender: "Male",
    salary: "463.44",
  },
  {
    id: 3,
    firstName: "Perla",
    lastName: "Fauguel",
    email: "pfauguel2@discovery.com",
    gender: "Female",
    salary: "764.17",
  },
  {
    id: 4,
    firstName: "Aundrea",
    lastName: "Kegan",
    email: "akegan3@tripod.com",
    gender: "Female",
    salary: "574.63",
  },
  {
    id: 5,
    firstName: "Eadith",
    lastName: "Chene",
    email: "echene4@prnewswire.com",
    gender: "Female",
    salary: "417.37",
  },
  {
    id: 6,
    firstName: "Lorette",
    lastName: "Tuther",
    email: "ltuther5@admin.ch",
    gender: "Female",
    salary: "377.40",
  },
  {
    id: 7,
    firstName: "Robenia",
    lastName: "Robins",
    email: "rrobins6@networkadvertising.org",
    gender: "Female",
    salary: "206.26",
  },
  {
    id: 8,
    firstName: "Moe",
    lastName: "Bottoms",
    email: "mbottoms7@php.net",
    gender: "Male",
    salary: "425.70",
  },
  {
    id: 9,
    firstName: "Talia",
    lastName: "Cutsforth",
    email: "tcutsforth8@delicious.com",
    gender: "Female",
    salary: "711.72",
  },
  {
    id: 10,
    firstName: "Ives",
    lastName: "Crennan",
    email: "icrennan9@microsoft.com",
    gender: "Male",
    salary: "668.98",
  },
];

// 2. function that collects 1st name

/*
var firstNames = employees.map((employee) => employee.firstName);

*/

function collectFirstName(employees) {
  console.info("employees: ", employees);
  if (!employees) {
    console.info("no value provided");
  }
  return (firstNames = employees.map((employee) => {
    return employee.firstName;
  }));
}

console.log(collectFirstName(employees));

// 3. function that calculates average salary

// function calculateAverageSalary() {
//   const salarySum = employees.reduce(
//     (sum, employee) => sum + parseFloat(employee.salary),
//     0
//   );
//   return salarySum / employees.length;
// }
// console.log(calculateAverageSalary());

function calculateAverageSalary(employees) {
  var averageSalary = 0;
  employees.forEach((employee) => {
    averageSalary += parseFloat(employee.salary);
  });
  return averageSalary;
}

console.log(calculateAverageSalary(employees));

// 4. avg fem salary

function calculateAverageFemSalary(employees) {
  const femaleEmployees = employees.filter(
    (employee) => employee.gender === "Female"
  );
  console.table(femaleEmployees);

  const femaleSalaries = femaleEmployees.map((employee) =>
    parseFloat(employee.salary)
  );

  const sum = femaleSalaries.reduce((acc, salary) => acc + salary, 0);

  const avgSalary = sum / femaleSalaries.length;

  return avgSalary;
}
console.log(calculateAverageFemSalary(employees));

// function calculateAverageFemSalary(employees) {
//   var TotalSalaryFem = 0;
//   var averageFem = 0;

//   employees.forEach((employee) => {
//     if (employee.gender === "Female") {
//       TotalSalaryFem += parseFloat(employee.salary);
//       return TotalSalaryFem;
//     }

//     averageFem = TotalSalaryFem / employee.salary.length;
//     console.log(averageFem);
//   });
// }

// averageFem = calculateAverageFemSalary(employees);

//5. Function that creates 2 arrays based on gender

function splitEmployees(employees) {
  const femaleEmployees = employees.filter(
    (employee) => employee.gender === "Female"
  );

  const maleEmployees = employees.filter(
    (employee) => employee.gender === "Male"
  );

  return {
    maleEmployees: maleEmployees,
    femaleEmployees: femaleEmployees,
  };
}
console.log(splitEmployees(employees));

//6. convert employee array into object

/*
function convertAllEmployees(employees) {
  let convert = {};

  employees.forEach((employee) => {
    convert[employee.lastName] = employee;
  });
  return convert;
}
console.log(convertAllEmployees(employees));
*/

function convertAllEmployees(employees) {
  const employeesObj = employees.reduce((acc, employee) => {
    acc[employee.lastName] = employee;
    return acc;
  }, {});
  return employeesObj;
}
console.log(convertAllEmployees(employees));

const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1879,
    passed: 1955,
  },
  {
    first: "Isaac",
    last: "Newton",
    year: 1643,
    passed: 1727,
  },
  {
    first: "Galileo",
    last: "Galilei",
    year: 1564,
    passed: 1642,
  },
  {
    first: "Marie",
    last: "Curie",
    year: 1867,
    passed: 1934,
  },
  {
    first: "Johannes",
    last: "Kepler",
    year: 1571,
    passed: 1630,
  },
  {
    first: "Nicolaus",
    last: "Copernicus",
    year: 1473,
    passed: 1543,
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947,
  },
  {
    first: "Katherine",
    last: "Blodgett",
    year: 1898,
    passed: 1979,
  },
  {
    first: "Ada",
    last: "Lovelace",
    year: 1815,
    passed: 1852,
  },
  {
    first: "Sarah E.",
    last: "Goode",
    year: 1855,
    passed: 1905,
  },
  {
    first: "Lise",
    last: "Meitner",
    year: 1878,
    passed: 1968,
  },
  {
    first: "Hanna",
    last: "Hammarström",
    year: 1829,
    passed: 1909,
  },
];

//9. filter list of inventors for DOB in the 1500s

const dob = inventors.filter(
  (inventor) => inventor.year < 1600 && inventor.year >= 1500
);
console.table(dob);

//10. make an array for first and last names using .map

let fullName = inventors.map((inventor) => {
  return inventor.first + " " + inventor.last;
});

console.log(fullName);

//11. find Galileo .find

let findGalileo = inventors.find(({ first }) => first === "Galileo");
console.log(findGalileo);

//12. sum of years the inventors lived

let yearsLived = inventors.map((inventor, passed, year) => {
  return inventor.passed - inventor.year;
});
console.log(yearsLived);
let sumLivedYears = yearsLived.reduce((initial, sum) => {
  return initial + sum;
}, 0);
console.log(sumLivedYears);

//13. sort inventors by years lived

let sortedArray = inventors.sort((a, b) => {
  if (a.passed - a.year > b.passed - b.year) return 1;
  else if (b.passed - b.year > a.passed - a.year) return -1;
  else return 0;
});

console.table(sortedArray);
console.table(yearsLived);

// 15.

const friends = [
  {
    name: "Wes",
    year: 1988,
  },
  {
    name: "Kait",
    year: 1986,
  },
  {
    name: "Irv",
    year: 1970,
  },
  {
    name: "Lux",
    year: 2015,
  },
];
const comments = [
  {
    text: "Love this!",
    id: 523423,
  },
  {
    text: "Super good",
    id: 823423,
  },
  {
    text: "You are the best",
    id: 2039842,
  },
  {
    text: "Ramen is my fav food ever",
    id: 123523,
  },
  {
    text: "Nice Nice Nice!",
    id: 542328,
  },
];

//16. array .some is at least one person 19 or >19

let present = 2023;

let personAge = friends.some((friend) => {
  present - friend.year > 19;
  return true;
});
console.log(personAge);

//.17 is everyone older than 19 .every

let personAge2 = friends.every((friend) => {
  return present - friend.year > 19;
});
console.log(personAge2);

// 18. .find comment id 823423

let id = 823423;

let wantedID = comments.find((comment) => {
  if (comment.id === id) return true;
});
console.log(wantedID);

//19. .findIndex id 823423

let index = comments.findIndex((comment) => {
  return comment.id == id;
});
console.log(index);

let leftOver = comments.splice(index, 1);

console.table(leftOver);
console.table(comments);
