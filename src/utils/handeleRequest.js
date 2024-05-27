const handleError = (error, onLogout, redirection) => {
  if (error.response && error.response.status === 401) {
    alert(
      '로그인 시간이 만료되었습니다. 다시 로그인 해 주세요.',
    );
    onLogout();
    redirection('/');
  } else if (
    error.response &&
    error.response.status === 400
  ) {
    // 400 에러에 대한 내용..
  } else if (
    error.response &&
    error.response.status === 403
  ) {
    // 403 에러에 대한 내용...
  }
};
// 커밋확인

const handleRequest = async (
  requestFunc,
  onSuccess,
  onError,
) => {
  try {
    const res = await requestFunc();
    if (res.status === 200) {
      onSuccess(res.data);
    }
  } catch (error) {
    console.log(error);
    if (onError) {
      onError(error);
    } else {
      alert('알 수 없는 에러 발생. 다시 시도해 주세요.');
    }
  }
};

export default handleRequest;
