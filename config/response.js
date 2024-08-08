export const response = ({ isSuccess, code, message }, result = null) => {
    return {
        isSuccess: isSuccess,
        code: code,
        message: message,
        result: result
    };
};

// export const response = (status, result = null) => {
//     // status는 상태 코드와 관련된 정보를 담고 있는 객체여야 함
//     // 하지만 상태 코드는 숫자 형태여야 함
//     return {
//         isSuccess: status.isSuccess,
//         code: status.code,
//         message: status.message,
//         result: result
//     };
// };