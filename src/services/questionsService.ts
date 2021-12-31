import axiosConfig from "../axiosConfig"

async function postAnswer(p?: any) {
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
  try {
    const response = await axiosConfig.post('/Answer', bodyMock);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

const questionsService = {
  postAnswer: (p: any) => postAnswer(p)
}

export default questionsService
