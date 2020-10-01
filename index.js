class PromotionTimer {
  constructor({ targetDate, selector }) {
    this.targetDate = targetDate.getTime();
    this.selector = document.querySelector(selector);
    this.spanDay = document.querySelector('[data-value="days"]');
    this.spanHours = document.querySelector('[data-value="hours"]');
    this.spanMins = document.querySelector('[data-value="mins"]');
    this.spanSecond = document.querySelector('[data-value="secs"]');
  }
  expirationDate() {
    setInterval(() => {
      let currentTime = new Date().getTime();
      let distance = this.targetDate - currentTime;
      let day = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.spanDay.textContent = `${day}`;
      this.spanHours.textContent = `${hours}`;
      this.spanMins.textContent = `${minutes}`;
      this.spanSecond.textContent = `${seconds}`;
      if (distance < 0) {
        clearInterval(this.expirationDate);
        this.spanDay.textContent = "00";
        this.spanHours.textContent = "00";
        this.spanMins.textContent = "00";
        this.spanSecond.textContent = "00";
      }
    }, 1000);
  }
  init() {
    this.expirationDate();
  }
}

new PromotionTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 02, 2020, 07:00"),
}).init();
