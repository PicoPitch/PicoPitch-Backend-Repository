// services/presentationService.js
import { getPresentationsList as getPresentationsListRepo } from '../presentations/presentations.repository.js';

export const getPresentationsList = async (order) => {
    try {
        // 정렬 기준에 따라 쿼리 호출
        const results = await getPresentationsListRepo(order);
        return results;
    } catch (error) {
        console.error('Service error:', error);
        throw error; // 에러를 던져 상위 호출 스택으로 전달
    }
};




