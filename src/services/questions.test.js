import fetchMock from 'fetch-mock';
import apiUrls from './apiUrls';
import questionsjson from './questions.json';
import QuestionsService from './questions';

describe('Questions service', () => {

  describe('get', () => {
    it('returns data successfully', () => {
      const response = {
        body: questionsjson,
        status: 200
      };
      fetchMock.getOnce(apiUrls.QUESTIONS, response);

      return QuestionsService.get().then(response => {
        expect(response.status).toBe(200);
      });
    });

  });
});