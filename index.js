document.getElementById("scrollBtn").addEventListener("click", () => {
  document.getElementById("bmiSection").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("calculateBtn").addEventListener("click", () => {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const gender = document.querySelector('input[name="gender"]:checked');
  const resultDiv = document.getElementById("result");
  const adviceDiv = document.getElementById("advice");
  const learnMore = document.getElementById("learnMore");

  if (!height || !weight || !gender) {
    resultDiv.textContent = "⚠️ Please fill all the fields."; 
    adviceDiv.textContent = "";
    learnMore.style.display = "none";
    return;
  }

  const bmi = (weight / (height * height)).toFixed(1);
  let status = "";
  let advice = "";
  let link = "";

  if (bmi < 18.5) {
    status = "Underweight";
    advice = "You are underweight. It’s important to eat a nutrient-rich diet with enough calories, proteins, and healthy fats. Add more eggs, milk, peanut butter, and balanced meals to your daily routine.";
    link = "https://www.healthline.com/nutrition/how-to-gain-weight";
  } else if (bmi < 25) {
    status = "Normal weight";
    advice = "Great job! You’re maintaining a healthy balance. Keep up your current habits, stay active, and eat a balanced diet rich in vegetables, whole grains, and lean proteins.";
    link = "https://www.who.int/news-room/fact-sheets/detail/healthy-diet";
  } else if (bmi < 30) {
    status = "Overweight";
    advice = "You’re slightly above the healthy range. Try cutting back on processed foods, sugary drinks, and increase your physical activity. Walking, swimming, or cycling regularly can make a big difference.";
    link = "https://www.anytimefitness.com/blog/weight-loss-plan-for-beginners";
  } else if (bmi < 35) {
    status = "Obese (Class I)";
    advice = "You are in the first stage of obesity. Consider professional guidance for your diet and workout plan. Focus on portion control and regular physical activities.";
    link = "https://www.medicalnewstoday.com/articles/323972";
  } else if (bmi < 40) {
    status = "Obese (Class II)";
    advice = "You are in obesity class II. The health risks increase significantly. Talk to a doctor or nutritionist to design a safe and structured plan for weight management.";
    link = "https://www.nhs.uk/live-well/healthy-weight/";
  } else {
    status = "Obese (Class III)";
    advice = "You are in the severe obesity range. It’s crucial to seek medical advice immediately. A doctor can help you create a plan involving nutrition, activity, and medical supervision.";
    link = "https://www.cdc.gov/obesity/adult/defining.html";
  }

  resultDiv.textContent = `Your BMI is ${bmi} — ${status}`;
  adviceDiv.textContent = advice;
  learnMore.href = link;
  learnMore.style.display = "inline-block";
});


