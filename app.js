const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
 

const anyRouter = require('./routes/any');
const mrblueRouter = require('./routes/mrblue');
const ridiRouter = require('./routes/ridi'); 
const naverRouter = require('./routes/naver');
const kakaoPageRouter = require('./routes/kakaopage');
const kakaowebtoonRouter = require('./routes/kakaowebtoon');

const userRouter = require('./endpoints/user');
const reviewRouter = require('./endpoints/review');
const workRouter = require('./endpoints/work');
const likeRouter = require('./endpoints/like');

const app = express();
const port = 3000;

app.use(cors({
  origin: '*', // 모든 출처 허용 옵션. true 를 써도 된다.
}));



// body-parser를 사용하여 JSON 형식의 요청 본문 파싱
app.use(bodyParser.json());

// any.js의 라우터를 등록
app.use('/any', anyRouter);

// mrblue.js의 라우터를 등록
app.use('/mrblue', mrblueRouter);

// ridi.js의 라우터를 등록
app.use('/ridi', ridiRouter)

// naver.js의 라우터를 등록
app.use('/naver', naverRouter);

// kakaopage.js의 라우터를 등록
app.use('/kakaopage', kakaoPageRouter);

// naver.js의 라우터를 등록
app.use('/kakaowebtoon', kakaowebtoonRouter);

// user.js의 라우터를 등록
app.use('/user', userRouter);

// review.js의 라우터를 등록
app.use('/review', reviewRouter);

// like.js의 라우터를 등록
app.use('/like', likeRouter);

// work.js의 라우터를 등록
app.use('/toon', workRouter);

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
