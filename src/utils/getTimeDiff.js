export function calcDate(date) {
    var today = new Date()
    var prevousDate = new Date(date);
    var diff = Math.floor(today.getTime() - prevousDate.getTime());
    var day = 1000 * 60 * 60 * 24;
    var message

    var days = Math.floor(diff/day);
    if(days > 30){
      var months = Math.floor(days/31);
      if(months > 12){
        var years = Math.floor(months/12);
        message = years + " years"
      }else{
        message = months + " months"
      }
    }else{
      message = days + " days"
    }

    return message
}