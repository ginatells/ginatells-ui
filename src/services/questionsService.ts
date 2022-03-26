import axiosConfig from "../axiosConfig"

async function postAnswer(keywordsData?: any) {
  const body = {keywords: keywordsData}
  try {
    const response = await axiosConfig.post('/search', body);
    return response;
  } catch (err) {
    console.error(err);
  }
}

const questionsService = {
  postAnswer: (p: any) => postAnswer(p)
}

export default questionsService
