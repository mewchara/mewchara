function calculateTimePassed(dateString) {
  const startDate = new Date(dateString);
  const currentDate = new Date();

  let years = currentDate.getFullYear() - startDate.getFullYear();
  let months = currentDate.getMonth() - startDate.getMonth();
  let days = currentDate.getDate() - startDate.getDate();
  let hours = currentDate.getHours() - startDate.getHours();
  let minutes = currentDate.getMinutes() - startDate.getMinutes();
  let seconds = currentDate.getSeconds() - startDate.getSeconds();

  if (seconds < 0) {
      seconds += 60;
      minutes--;
  }

  if (minutes < 0) {
      minutes += 60;
      hours--;
  }

  if (hours < 0) {
      hours += 24;
      days--;
  }

  if (days < 0) {
      const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
      days += previousMonth;
      months--;
  }

  if (months < 0) {
      months += 12;
      years--;
  }

  return {
      years: years,
      months: months,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
  };
}

function updateDisplay() {
  const result = calculateTimePassed('2022-07-26T12:39:17');
  document.getElementById('output1').innerText =`${result.years} years,`;
  document.getElementById('output2').innerText =`${result.months} months,`;
  document.getElementById('output3').innerText =`${result.days} days,`;
  document.getElementById('output4').innerText =`${result.hours} hours,`;
  document.getElementById('output5').innerText =`${result.minutes} minutes &`;
  document.getElementById('output6').innerText =`${result.seconds} seconds`;
}

window.onload = function() {
  updateDisplay();
  setInterval(updateDisplay, 1000);
};