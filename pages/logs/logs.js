const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  var k = i;
  if (0 <= i && i <= 9) {
    k = "0" + (i);
  } else {
    k = (i);
  }
  months.push(k)
}

for (let i = 1; i <= 31; i++) {
  var k = i;
  if (0 <= i && i <= 9) {
    k = "0" + (i);
  } else {
    k = (i);
  }
  days.push(k)
}

Page({
  data: {
    DialogTitle: "日期",
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    value: [9999, 1, 1],
  },
  _text: function() {
    var that = this
    that.dialog.showDialog();
  },
  _cancelEvent(e) {
    this.dialog.hideDialog();
  },
  _cancelEvents(e) {
    console.log(e)
  },
  onReady: function() {
    this.dialog = this.selectComponent("#dialog");
  },

})