const fs = require("fs");
const { stringify } = require("csv-stringify");

const columns = [
  "ID",
  "Topic No.",
  "Topic Name",
  "Q.No",
  "Question",
  "Q.Image",
  "A",
  "A.Image",
  "B",
  "B.Image",
  "C",
  "C.Image",
  "D",
  "D.Image",
  "Answer",
];

const questionColumns = ["Question", "Q.Image"];
const optionColumns = ["Option", "QuestionId", "Option Image", "IsCorrect"];
const examQuestionColumns = ["ExamId", "QuestionId"];

const stringifier = stringify({ header: true, columns: columns });

const stringifierQuestion = stringify({
  header: true,
  columns: questionColumns,
});

const stringifierOption = stringify({
  header: true,
  columns: optionColumns,
});

const stringifierExamQuestion = stringify({
  header: true,
  columns: examQuestionColumns,
});

const writeCSV = (filename, data) => {
  const writableStream = fs.createWriteStream(filename);
  for (const row of data) {
    stringifier.write(row);
  }
  stringifier.pipe(writableStream);
  console.log("Finished writing data");
};

const writeQuestionCSV = (filename, data) => {
  const s3Url =
    "https://dts-resources.s3.ap-southeast-1.amazonaws.com/question-images/";
  const questionNumCol = 0;
  const questionContentCol = 4;
  const questionImageCol = 5;
  const isImage = "no";
  const writableStream = fs.createWriteStream(filename);
  for (const row of data) {
    const questionNum = row[questionNumCol];
    let image = null;
    if (row[questionImageCol].toLowerCase() !== isImage) {
      image = s3Url + `${questionNum}.Q.png`;
    }
    stringifierQuestion.write([row[questionContentCol], image]);
  }
  stringifierQuestion.pipe(writableStream);
  console.log("Finished writing question data");
};

const writeOptionCSV = (filename, data) => {
  const s3Url =
    "https://dts-resources.s3.ap-southeast-1.amazonaws.com/question-images/";
  const questionNumCol = 0;
  const optionAContentCol = 6;
  const optionAImageCol = 7;
  const optionBContentCol = 8;
  const optionBImageCol = 9;
  const optionCContentCol = 10;
  const optionCImageCol = 11;
  const optionDContentCol = 12;
  const optionDImageCol = 13;
  const correctAnswerCol = 14;
  const isImage = "no";

  const writableStream = fs.createWriteStream(filename);
  for (const row of data) {
    const questionNum = parseInt(row[questionNumCol]);
    let imageA = null;
    let imageB = null;
    let imageC = null;
    let imageD = null;
    const correctOpt = row[correctAnswerCol].toLowerCase();

    if (row[optionAImageCol].toLowerCase() !== isImage) {
      imageA = s3Url + `${questionNum}.A.png`;
    }
    if (row[optionBImageCol].toLowerCase() !== isImage) {
      imageB = s3Url + `${questionNum}.B.png`;
    }
    if (row[optionCImageCol].toLowerCase() !== isImage) {
      imageC = s3Url + `${questionNum}.C.png`;
    }
    if (row[optionDImageCol].toLowerCase() !== isImage) {
      imageD = s3Url + `${questionNum}.D.png`;
    }
    stringifierOption.write([
      `'${row[optionAContentCol]}'`,
      questionNum,
      imageA ? `'${imageA}'` : "null",
      correctOpt === "a" ? true : false,
    ]);
    stringifierOption.write([
      `'${row[optionBContentCol]}'`,
      questionNum,
      imageB ? `'${imageB}'` : "null",
      correctOpt === "b" ? true : false,
    ]);
    stringifierOption.write([
      `'${row[optionCContentCol]}'`,
      questionNum,
      imageC ? `'${imageC}'` : "null",
      correctOpt === "c" ? true : false,
    ]);
    stringifierOption.write([
      `'${row[optionDContentCol]}'`,
      questionNum,
      imageD ? `'${imageD}'` : "null",
      correctOpt === "d" ? true : false,
    ]);
  }
  stringifierOption.pipe(writableStream);
  console.log("Finished writing option data");
};

const writeExamQuestionCSV = (filename, dataLength) => {
  const examIds = [];
  for (let i = 1; i <= 14; i++) {
    examIds.push(i);
  }
  const data = [];
  let count = 0;
  let tmpCount = count;
  for (const examId of examIds) {
    console.log(dataLength[examId - 1]);
    for (let i = count + 1; i <= tmpCount + dataLength[examId - 1]; i++) {
      data.push([examId, i]);
      count++;
    }
    tmpCount = count;
  }
  console.log(data);

  const writableStream = fs.createWriteStream(filename);
  for (const row of data) {
    stringifierExamQuestion.write(row);
  }
  stringifierExamQuestion.pipe(writableStream);
  console.log("Finished writing exam question data");
};

module.exports = {
  writeCSV,
  writeQuestionCSV,
  writeOptionCSV,
  writeExamQuestionCSV,
};
