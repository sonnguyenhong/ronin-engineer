exam = {
  id,
  type,
  numerical_order,
  total_question,
  limit_time,
  original_content,
  translation_content,
  img,
};

question = {
  id,
  original_content,
  translation_content,
  img,
};

option = {
  id,
  question_id,
  is_correct,
  original_content,
  translation_content,
  img,
};

exam_question = {
  exam_id,
  question_id,
};

ID,
Topic No.,
Topic Name,
Q.No,
Question,
Q.Image,
A,
A.Image,
B ,
B.Image,
C,
C.Image,
D,
D.Image,
Answer

1,1,Alertness,1,What should you do before making a U-turn?,No,Give an arm signal as well as using your indicators,No,Check road markings to see that U-turns are permitted,No,Look over your shoulder for a final check,No,Select a higher gear than normal,No,C

INSERT INTO exam (type, total_question, original_content)
VALUES ('topic', alertnessData.length, row[2]); 

INSERT INTO question (id, original_content, img) 
VALUES (row[0], row[4], row[5] === 'No' ? null : ...);

INSERT INTO option (question_id, is_correct, original_content, img)
VALUES (row[0], row[14], row[6, 8, 10, 12], row[7, 9, 11, 13] ? )



