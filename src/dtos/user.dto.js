/**
 * 요청한 값을 어떤 모양으로 전달.
 * 리뷰의 내용
 */
export const signinResponseDTO = (user,store,review) =>{
    return{
        "Comment": review.article
    };
}