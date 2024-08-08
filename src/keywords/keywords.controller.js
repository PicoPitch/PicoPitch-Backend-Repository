import { deleteKeywordByCompositeKey, addNewKeyword, updateExistingKeyword } from '../keywords/keywords.service.js';

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

export const addKeyword = async (req, res) => {
    const { user_id, ppt_id, script_id, keyword } = req.body; // Assuming keyword data comes in request body

    if (!user_id || !ppt_id || !script_id || !keyword) {
        return res.status(400).json({ message: 'Missing required fields: user_id, ppt_id, script_id, keyword' });
    }

    try {
        await addNewKeyword(user_id, ppt_id, script_id, keyword);
        res.status(201).json({ message: 'Keyword added successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateKeyword = async (req, res) => {
    const { user_id, ppt_id, script_id, keyword } = req.body; // Assuming updated keyword data comes in request body

    if (!user_id || !ppt_id || !script_id || !keyword) {
        return res.status(400).json({ message: 'Missing required fields: user_id, ppt_id, script_id, keyword' });
    }

    try {
        await updateExistingKeyword(user_id, ppt_id, script_id, keyword);
        res.status(200).json({ message: 'Keyword updated successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};