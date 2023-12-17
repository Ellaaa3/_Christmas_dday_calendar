// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "벌써 2023년도 마지막 달이야!" },
  { "number": 2, "message": "이 12월도 알차게 보내보자!" },
  { "number": 3, "message": "다 같이 즐겁게 보내는 24일, 행복 가득!" },
  { "number": 4, "message": "12월의 특별함을 모두와 함께 나누어요." },
  { "number": 5, "message": "올 한 해는 어땠어?" },
  { "number": 6, "message": "행복했던 2023년이었나요?." },
  { "number": 7, "message": "2023년 중, 어떤 일이 가장 기억에 남나요?." },
  { "number": 8, "message": "12월은 행복한 순간들이 가득한 달이에요." },
  { "number": 9, "message": "우리 모두에게 찾아온 특별한 행복의 계절!" },
  { "number": 10, "message": "매일 매일이 행복으로 가득찬 24일이 되길." },
  { "number": 11, "message": "12월, 행복이 가득한 당신과 나누는 소중한 시간." },
  { "number": 12, "message": "다 함께하는 24일, 행복이 여러 가지 모습으로 찾아올 거예요." },
  { "number": 13, "message": "올 한 해 나는 무엇을 이뤘나요? 한 번 되돌아봐요." },
  { "number": 14, "message": "12월, 각자의 작은 행복이 모여 큰 기쁨이 되길." },
  { "number": 15, "message": "모두에게 행복이 넘치는 24일을 기대해봐요." },
  { "number": 16, "message": "12월의 특별한 순간, 행복이 퍼져나가길." },
  { "number": 17, "message": "2023년으 되돌아보며 후회되는 일이 있나요?" },
  { "number": 18, "message": "12월, 행복이 가득찬 마음으로 채워져 있는 시간." },
  { "number": 19, "message": "올 연말은 가족과 함께, 행복한 시간을 보내봐요." },
  { "number": 20, "message": "12월, 당신과 나누는 특별한 행복의 순간들." },
  { "number": 21, "message": "모두에게 다가오는 24일, 행복이 함께하기를!" },
  { "number": 22, "message": "12월의 행복한 기운이 모두를 감싸네요." },
  { "number": 23, "message": "다가오는 2024년, 당신은 무엇을 계획하고 있나요?" },
  { "number": 24, "message": "오늘은 대망의 크리스마스 이브!!." }
];

