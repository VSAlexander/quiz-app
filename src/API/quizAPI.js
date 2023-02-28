import axios from 'axios';

export const quizAPI = axios.create({
  baseURL: `https://opentdb.com/`,
});

// export const fetchSportsQA = async () => {
//   const { data } = await quizAPI.get('/api.php?', {
//     params: {
//       category: 21,
//       amount: 10,
//       difficulty: 'medium',
//     },
//   });
//   console.log(data.results);
//   return data.results;
// };

// fetchSportsQA();

// const fetchJS = async () => {
//   try {
//     const response = await axios.get(
//       `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=Linux`
//     );
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };
