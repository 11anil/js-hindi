function calculateAge(birthDate) {
    const currentDate = new Date();
    const birthDateTime = birthDate.getTime();
    const currentTime = currentDate.getTime();
  
    const timeDifference = currentTime - birthDateTime;
  
    const msInDay = 24 * 60 * 60 * 1000;
    const msInYear = msInDay * 365;
  
    const years = Math.floor(timeDifference / msInYear);
    const months = Math.floor((timeDifference % msInYear) / (msInDay * 30));
    const days = Math.floor((timeDifference % (msInDay * 30)) / msInDay);
  
    return {
      years: years,
      months: months,
      days: days
    };
  }
  
  // Replace this with the actual birth date
  const birthDate = new Date('1990-08-24');
  
  const age = calculateAge(birthDate);
  console.log(`Age: ${age.years} years, ${age.months} months, ${age.days} days`);
  