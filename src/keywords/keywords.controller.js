import { deleteKeywordByCompositeKey } from '../keywords/keywords.service.js';

export const deleteKeyword = async (req, res) => {
    const { user_id, ppt_id, script_id } = req.query; // Use query parameters for composite keys

    if (!user_id || !ppt_id || !script_id) {
        return res.status(400).json({ message: 'Missing required parameters: user_id, ppt_id, script_id' });
    }

    try {
        await deleteKeywordByCompositeKey(user_id, ppt_id, script_id);
        res.status(200).json({ message: 'Keyword deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
