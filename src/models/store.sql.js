// store.sql.js

export const getReviewByReviewId = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE r.restaurant_id = ? AND r.review_id < ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"

export const getReviewByReviewIdAtFirst = 
"SELECT u.user_name, u.user_id, r.review_id, r.rate, r.review_content, r.created_at "
+ "FROM review r JOIN user u on r.user_id = u.user_id "
+ "WHERE r.restaurant_id = ? "
+ "ORDER BY r.review_id DESC LIMIT ? ;"


export const getMissionByCompletedMissionId =
"SELECT m.mission_id, m.mission_name, m.completed_at, m.store_id"
+ "from mission m"
+ "where m.store_id = ? AND m.is_completed = TRUE AND m.completed_at  < (SELECT completed_at FROM mission WHERE mission_id = ?)"
+ "order by m.completed_at desc limit ? ;"
// first와 동일
//주어진 mission_id보다 완료 시간이 이전인 미션들을 제한된 수 만큼 가져옴
export const getMissionByCompletedAtFirst = 
"SELECT m.mission_id, m.mission_name, m.completed_at, m.store_id"
+ "from mission m"
+ "where m.store_id = ? AND m.is_completed = TRUE "
+ "order by m.completed_at desc limit ? ;"
// 특정 store_id에 대해서 완료된 미션(is_complete가 true)인 completed_at 기준으로 내림차순 정렬, 제한된 수만큼 가져옴