// controllers/presentationController.js
import { getPresentationsList } from './presentations.service.js';


export const getPresentationsListController = async (req, res, next) => {
    try {
        //쿼리 파라미터에서 정렬 기준 읽어오기 - 기본값은 최신순
        const order = req.query.order || 'updated_date';
        //서비스로 정렬 기준 전달?
        const results = await getPresentationsList(order);
        res.status(200).json({ presentations: results });
    } catch (error) {
        console.error('Error fetching presentations:', error);
        next({ status: 500, message: 'Database error', error });
    }
};



