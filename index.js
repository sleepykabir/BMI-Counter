// Scroll to form
document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("bmiSection").scrollIntoView({ behavior: "smooth" });
});

// Calculate BMI and show results
document.getElementById("bmiForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const gender = document.getElementById("gender").value;
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const resultDiv = document.getElementById("result");

  if (!height || !weight || !gender) {
    resultDiv.innerHTML = "⚠️ Please fill all fields correctly.";
    return;
  }

  const bmi = weight / (height * height);
  let status = "";
  let advice = "";
  let link = "";

  if (bmi < 18.5) {
    status = "Underweight";
    advice = "Your BMI indicates you are underweight. Focus on eating more calorie-dense, nutrient-rich foods such as nuts, avocados, eggs, and lean proteins. Strength training can also help build healthy muscle mass.";
    link = "https://www.healthline.com/nutrition/how-to-gain-weight";
  } else if (bmi < 25) {
    status = "Healthy";
    advice = "Congratulations! You are in a healthy BMI range. Maintain your balanced lifestyle with regular exercise, hydration, and a diet rich in vegetables, lean proteins, and whole grains.";
    link = "https://www.healthline.com/nutrition/healthy-eating-tips";
  } else if (bmi < 30) {
    status = "Overweight";
    advice = "Your BMI indicates that you are slightly overweight. Try incorporating more daily activity like walking or light jogging and reduce your intake of sugary or processed foods while increasing vegetables and protein.";
    link = "https://www.medicalnewstoday.com/articles/weight-loss-diet-plan";
  } else if (bmi < 35) {
    status = "Obese Class I";
    advice = "You fall into Obesity Class I. It’s advisable to follow a structured diet and workout plan. Reducing portion sizes, increasing fiber intake, and regular cardio can significantly help. Consult a dietitian if possible.";
    link = "https://www.nhs.uk/live-well/healthy-weight/start-the-nhs-weight-loss-plan/";
  } else if (bmi < 40) {
    status = "Obese Class II";
    advice = "Your BMI suggests a higher level of obesity. Consider seeking medical advice for a personalized nutrition plan. Focus on slow, steady weight loss through consistent physical activity and reduced calorie intake.";
    link = "https://www.cdc.gov/healthyweight/losing_weight/index.html";
  } else {
    status = "Obese Class III";
    advice = "This BMI level is associated with serious health risks. It’s important to consult a healthcare provider. Combining a medically supervised diet with gentle, consistent exercise can bring improvement over time.";
    link = "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight";
  }

  resultDiv.innerHTML = `
    <strong>Your BMI:</strong> ${bmi.toFixed(2)}<br>
    <strong>Status:</strong> ${status}<br><br>
    <strong>Advice:</strong> ${advice}<br><br>
    <a href="${link}" target="_blank" class="learn-more">Learn More</a>
  `;
});

// Simple cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
