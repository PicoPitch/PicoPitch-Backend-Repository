// services/presentationService.js
import { getPresentationsList as getPresentationsListRepo, deletePresentation as deletePresentationRepo } from '../presentations/presentations.repository.js';

export const getPresentationsList = async (userId, order) => {
    try {
        // 정렬 기준에 따라 쿼리 호출
        const results = await getPresentationsListRepo(userId, order);  //userId와 order를 레포지토리에 전달
        return results;
    } catch (error) {
        console.error('Service error:', error);
        throw error; // 에러를 던져 상위 호출 스택으로 전달
    }
};

export const deletePresentation = async (pptId) => {
    try {
        await deletePresentationRepo(pptId);
    } catch (error) {
        console.error('Service error:', error);
        throw error;
    }
};




