import axiosConfig from "../axiosConfig"

async function postAnswer(keywordsData?: any) {
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
