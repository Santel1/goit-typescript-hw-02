/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  MONDAY ,
  TUESDAY,
  WENDESDAY,
  THURSDAY ,
  FRIDAY,
  SATURDAY,
  SUNDAY,
  }
  


let isWeekend: (day: WeekDays) => boolean;

isWeekend = (day: WeekDays) => {
  return day === WeekDays.SATURDAY || day === WeekDays.SUNDAY;
};

  
  
  isWeekend(WeekDays.MONDAY);
