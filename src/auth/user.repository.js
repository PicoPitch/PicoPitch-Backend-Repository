// let users = []; // 메모리에 사용자 저장 (실제 사용시 데이터베이스 사용)

// // 사용자를 찾거나 생성하는 함수
// exports.findOrCreate = async (userData) => {
//     let user = users.find(u => u.id === userData.id);

//     if (!user) {
//         user = { ...userData, id: users.length + 1 };
//         users.push(user);
//     }

//     return user;
// };