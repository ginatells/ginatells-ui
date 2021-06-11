import axiosConfig from "../axiosConfig"

async function postAnswer() {
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
  postAnswer: (p) => postAnswer(p)
}

export default questionsService