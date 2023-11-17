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
  
  let isWeekend: (day: WeekDays) => void;
  
  isWeekend = (day: WeekDays) => {
    if (day === WeekDays.SATURDAY || day === WeekDays.SUNDAY) {
      return weekend(true);
    } else {
      return weekend(false);
      
    }
  };
  
  let weekend: (isWeekend: boolean) => void; 
  
  weekend = (isWeekend: boolean) => {
    if (isWeekend === true) {
      console.log('Weekend')
  
    } else {
      console.log('Work day')
    }
  };
  
  isWeekend(WeekDays.MONDAY);
