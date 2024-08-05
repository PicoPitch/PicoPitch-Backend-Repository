// controllers/presentationController.js
import {
    getPresentationsList, deletePresentation, updatePresentationTitle,
    createPresentation
} from './presentations.service.js';


export const getPresentationsListController = async (req, res, next) => {
    try {
        const userId = req.params.userId;   // url 파라미터에서 userId 읽어오기
        const order = req.query.order || 'recent';    //쿼리 파라미터에서 정렬 기준 읽어오기 - 기본값은 최신순

        //서비스로 정렬 기준 전달?
        const results = await getPresentationsList(userId, order);
        res.status(200).json({ presentations: results });
    } catch (error) {
        console.error('Error fetching presentations:', error);
        next({ status: 500, message: 'Database error', error });
    }
};

export const deletePresentationController = async (req, res, next) => {
    try {
        const pptId = req.params.pptId;

        await deletePresentation(pptId);
        res.status(200).json({ message: 'Presentation deleted successfully.' });
    } catch (error) {
        console.error('Error deleting presentation:', error);
        next({ status: 500, message: 'Database error', error });
    }
};

export const updatePresentationTitleController = async (req, res, next) => {
    try {
        const pptId = req.params.pptId;
        const { title } = req.body; //request body로부터 새로운 제목 받기

        if (!title) {
            return res.status(400).json({ message: 'Title is required.' });
        }

        await updatePresentationTitle(pptId, title);
        res.status(200).json({ message: 'Presentation title updated successfully.' });

    } catch (error) {
        console.error('Error updating presentation title:', error);
        next({ status: 500, message: 'Database error', error });
    }

};

export const createPresentationController = async (req, res, next) => {
    try {
        const { filename, title, presentation_date, userId, keywords } = req.body; // 요청 본문에서 데이터 추출

        // 필수 입력 데이터 확인
        if (!filename || !title || !presentation_date || !userId) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // 서비스 계층으로 데이터 전달
        await createPresentation({ filename, title, presentation_date, userId, keywords });
        res.status(201).json({ message: 'Presentation created successfully.' });
    } catch (error) {
        console.error('Error creating presentation:', error);
        next({ status: 500, message: 'Database error', error });
    }
};



