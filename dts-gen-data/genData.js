const fs = require("fs");
const { parse } = require("csv-parse");

const data = [];
const topicColumn = 2;
const topics = [
  "Alertness",
  "Attitude",
  "Safety and your vehicle",
  "Safety Margins",
  "Hazard Awareness",
  " Vulnerable road users",
  "Other types of vehicle",
  "Vehicle handling",
  "Motorway rules",
  "Rules of the road",
  "Road and traffic signs",
  "Essential Documents",
  "Incidents, accidents and emergencies",
  "Vehicle Loading",
];

fs.createReadStream("./questionsData.csv")
  .pipe(parse({ delimiter: ",", from_line: 2 }))
  .on("data", function (row) {
    data.push(row);
  })
  .on("end", function () {
    const alertnessData = data.filter((row) => row[topicColumn] === topics[0]);
    const attitudeData = data.filter((row) => row[topicColumn] === topics[1]);
    const safetyAndYourVehicleData = data.filter(
      (row) => row[topicColumn] === topics[2]
    );
    const safetyMarginsData = data.filter(
      (row) => row[topicColumn] === topics[3]
    );
    const hazardAwarenessData = data.filter(
      (row) => row[topicColumn] === topics[4]
    );
    const vulerableRoadUsersData = data.filter(
      (row) => row[topicColumn] === topics[5]
    );
    const otherTypesOfVehicleData = data.filter(
      (row) => row[topicColumn] === topics[6]
    );
    const vehicleHandlingData = data.filter(
      (row) => row[topicColumn] === topics[7]
    );
    const motorwayRulesData = data.filter(
      (row) => row[topicColumn] === topics[8]
    );
    const rulesOfTheRoadData = data.filter(
      (row) => row[topicColumn] === topics[9]
    );
    const roadAndTrafficSignsData = data.filter(
      (row) => row[topicColumn] === topics[10]
    );
    const essentialDocumentsData = data.filter(
      (row) => row[topicColumn] === topics[11]
    );
    const incidentsData = data.filter((row) => row[topicColumn] === topics[12]);
    const vehicleLoadingData = data.filter(
      (row) => row[topicColumn] === topics[13]
    );
    console.log(alertnessData.length);
    console.log(attitudeData.length);
    console.log(safetyAndYourVehicleData.length);
    console.log(safetyMarginsData.length);
    console.log(hazardAwarenessData.length);
    console.log(vulerableRoadUsersData.length);
    console.log(otherTypesOfVehicleData.length);
    console.log(vehicleHandlingData.length);
    console.log(motorwayRulesData.length);
    console.log(rulesOfTheRoadData.length);
    console.log(roadAndTrafficSignsData.length);
    console.log(essentialDocumentsData.length);
    console.log(incidentsData.length);
    console.log(vehicleLoadingData.length);

    console.log(alertnessData[0]);
  });
