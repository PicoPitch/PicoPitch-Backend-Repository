// controllers/presentationController.js
import { getPresentationsList } from './presentations.service.js';


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



