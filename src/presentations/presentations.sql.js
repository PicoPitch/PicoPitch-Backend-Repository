// 여기에 쿼리문 쓰면 되는듯
// 이런식으로
// export const insertUserSql = "INSERT INTO user (email, user_name, gender, birth, user_address, user_spec_address, user_phone) VALUES (?, ?, ?, ?, ?, ?, ?);";
// export const getUserID = "SELECT * FROM user WHERE user_id = ?";
// export const connectFoodCategory = "INSERT INTO user_favor_category (f_category_id, user_id) VALUES (?, ?);";

// 만들어진 순으로 발표 보여주는 쿼리
export const getRecentList = "select * from PPTs where user_id = ? order by created_date"

// 발표 날짜 가까운 순으로 보여주는 쿼리
export const getUpcomingList = "select * from PPTs where user_id = ? order by presentation_date"

//일단은 이정도?