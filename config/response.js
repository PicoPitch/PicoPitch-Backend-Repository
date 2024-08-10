//어떤 식으로 보여줄 지에 대한 형식이 들어감 : DTO
export const response = ({isSuccess, code, message}, result) => {
    return {
        isSuccess: isSuccess,
        code: code,
        message: message,
        result: result
    };
};