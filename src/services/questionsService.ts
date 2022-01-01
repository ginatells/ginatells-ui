import axiosConfig from "../axiosConfig"

async function postAnswer(keywordsData?: any) {
  const bodyMock = {
    "keywords": [
      {
        "keyword": "universe",
        "weight": 2
      },
      {
        "keyword": "dog",
        "weight": 2
      }
    ]
  }
  const body = {keywords: keywordsData}
  try {
    const response = await axiosConfig.post('/Answer', body);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}

const questionsService = {
  postAnswer: (p: any) => postAnswer(p)
}

export default questionsService
