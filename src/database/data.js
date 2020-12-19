// 데이터 저장
export const stations = [
  '교대',
  '강남',
  '역삼',
  '남부터미널',
  '양재',
  '양재시민의숲',
  '매봉',
];

export const lines = ['2호선', '3호선', '신분당선'];

export const sections = {
  '2호선': ['교대', '강남', '역삼'],
  '3호선': ['교대', '남부터미널', '양재', '매봉'],
  신분당선: ['강남', '양재', '양재시민의숲'],
};

export const distances = {
  '2호선': [2, 2],
  '3호선': [3, 6, 1],
  신분당선: [2, 10],
};

export const times = {
  '2호선': [3, 3],
  '3호선': [2, 5, 1],
  신분당선: [8, 3],
};