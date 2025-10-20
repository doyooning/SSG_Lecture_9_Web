// Promise 객체는 자바스크립트에서 비동기 실행을 동기화하는 구문으로 사용
// 약속 = 이행, 거절, 대기
// 이 코드는 미래의 어느 시점에 실행할 것이다, 3가지 상태를 가진다.

const DB = [];

function saveDB(user) {
  const oldDBSize = DB.length;
  DB.push(user);
  console.log(`save ${user.name} to DB`);
  return new Promise((resolve, reject) => {
    if (DB.length > oldDBSize) {
      resolve(user);
    } // 성공시 사용자 객체를 반환
    else {
      reject(new Error('SaveDB Fail !'));
    }
  });
}

function sendEmail(user) {
  console.log(`email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve, reject) => {
    resolve(`success register ${user.name}`);
  });
}

function registerByPromise(user) {
  const result = saveDB(user).then(sendEmail).then(getResult);
  console.log(result);
  return result;
}

const myUser = { email: '신세계@test.com', name: '신세계' };
const result = registerByPromise(myUser);
result.then(console.log);
