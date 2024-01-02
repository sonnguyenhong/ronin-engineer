//0. ID,
//1. Topic No.,
//2. Topic Name,
//3. Q.No,
//4. Question,
//5. Q.Image,
//6. A,
//7. A.Image,
//8. B,
//9. B.Image,
//10. C,
//11. C.Image,
//12. D,
//13. D.Image,
//14. Answer

const fs = require("fs");
const { parse } = require("csv-parse");
const {
  writeCSV,
  writeQuestionCSV,
  writeOptionCSV,
  writeExamQuestionCSV,
} = require("./utils/writeCSV");

const data = [];
const topicColumn = 2;
const topics = [
  "Alertness",
  "Attitude",
  "Safety and your vehicle",
  "Safety Margins",
  "Hazard Awareness",
  "Vulnerable road users",
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

    console.log("alertnessData: ", alertnessData.length);
    console.log("attitudeData: ", attitudeData.length);
    console.log("safetyAndYourVehicleData: ", safetyAndYourVehicleData.length);
    console.log("safetyMarginsData: ", safetyMarginsData.length);
    console.log("hazardAwarenessData: ", hazardAwarenessData.length);
    console.log("vulerableRoadUsersData: ", vulerableRoadUsersData.length);
    console.log("otherTypesOfVehicleData: ", otherTypesOfVehicleData.length);
    console.log("vehicleHandlingData: ", vehicleHandlingData.length);
    console.log("motorwayRulesData: ", motorwayRulesData.length);
    console.log("rulesOfTheRoadData: ", rulesOfTheRoadData.length);
    console.log("roadAndTrafficSignsData: ", roadAndTrafficSignsData.length);
    console.log("essentialDocumentsData: ", essentialDocumentsData.length);
    console.log("incidentsData: ", incidentsData.length);
    console.log("vehicleLoadingData: ", vehicleLoadingData.length);

    const dataLength = [
      alertnessData.length,
      attitudeData.length,
      safetyAndYourVehicleData.length,
      safetyMarginsData.length,
      hazardAwarenessData.length,
      vulerableRoadUsersData.length,
      otherTypesOfVehicleData.length,
      vehicleHandlingData.length,
      motorwayRulesData.length,
      rulesOfTheRoadData.length,
      roadAndTrafficSignsData.length,
      essentialDocumentsData.length,
      incidentsData.length,
      vehicleLoadingData.length,
    ];

    // writeCSV("csv/alertness.csv", alertnessData);
    // writeCSV("csv/attitude.csv", attitudeData);
    // writeCSV("csv/safetyAndYourVehicle.csv", safetyAndYourVehicleData);
    // writeCSV("csv/safetyMargins.csv", safetyMarginsData);
    // writeCSV("csv/hazardAwareness.csv", hazardAwarenessData);
    // writeCSV("csv/vulerableRoadUsers.csv", vulerableRoadUsersData);
    // writeCSV("csv/otherTypesOfVehicle.csv", otherTypesOfVehicleData);
    // writeCSV("csv/vehicleHandling.csv", vehicleHandlingData);
    // writeCSV("csv/motorwayRules.csv", motorwayRulesData);
    // writeCSV("csv/rulesOfTheRoad.csv", rulesOfTheRoadData);
    // writeCSV("csv/roadAndTrafficSigns.csv", roadAndTrafficSignsData);
    // writeCSV("csv/essentialDocuments.csv", essentialDocumentsData);
    // writeCSV("csv/incidents.csv", incidentsData);
    // writeCSV("csv/vehicleLoading.csv", vehicleLoadingData);
    // writeQuestionCSV("csv/questions/questions.csv", data);
    // writeOptionCSV("csv/options/options.csv", data);
    writeExamQuestionCSV("csv/exam-questions/exam-questions.csv", dataLength);
  });
