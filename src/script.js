
function calculateBMI() {

  let h; // 키
  let w; // 몸무게

  h = Number(document.querySelector("#height").value);
  w = Number(document.querySelector("#weight").value);

  h = h / 100; // cm -> m

  // BMI 계산
  let bmi;
  bmi = w / (h * h);

  // BMI 결과 출력
  document.querySelector("#result").textContent =
    "BMI: " + bmi.toFixed(2);

  // 비만도 판정
  if (bmi >= 25) {
    document.querySelector("#state").textContent = "비만";
  }
  else if (bmi >= 23) {
    document.querySelector("#state").textContent = "과체중";
  }
  else if (bmi >= 18.5) {
    document.querySelector("#state").textContent = "정상";
  }
  else {
    document.querySelector("#state").textContent = "저체중";
  }
}
