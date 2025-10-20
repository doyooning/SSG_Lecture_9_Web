function myWork(work) {
  return new Promise((resolve, reject) => {
    if (work === 'done') {
      resolve('roll game!');
    } else {
      reject(new Error('working!'));
    }
  });
}
myWork('done').then(
  function (value) {
    // 애매하게 then을 사용하면 에러 발생시 확인해야 할 곳이 많아진다
    console.log(value);
  },
  function (err) {
    console.log(err);
  }
);

// Good Code
myWork('done')
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.error(err);
  }); // catch를 사용해서 확실하게 눈에 띄도록 한다
