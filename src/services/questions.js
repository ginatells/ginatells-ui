import apiUrls from './apiUrls';

const QuestionsService = {
    get: () => fetch(
        apiUrls.QUESTIONS,
        {
            options: {},
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            }
        })
};

export default QuestionsService;