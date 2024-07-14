export const getReview = async (storeId, query) => {
    const {reviewId, size = 3} = query;
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, storeId));
}
// size가 입력되지 않았다면 디폴트 값으로 3
export const getMissions = async(storeId, query) => {
    const {missionId, size = 3} = query;
    return completeMissionDTO(await getCompleteMission(missionId, size, storeId));
}