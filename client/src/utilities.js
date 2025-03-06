
export const formatGrades = (grades) => {
    if (grades.length === 0)
      return '';
    
  const sortedGrades = grades.sort((a, b) => {
    const numA = parseInt(a);
    const numB = parseInt(b);
    return numA - numB;
  });

  const ranges = [];
  let start = sortedGrades[0];
  let end = sortedGrades[0];
  for (let i = 1; i < sortedGrades.length; i++) {
    const currGrade = sortedGrades[i];
    const num = parseInt(currGrade);
    if (num - parseInt(end) === 1) {
      end = currGrade;
    } else {
      if (start === end) {
        ranges.push(start);
      } else {
        ranges.push(`${start}-${end}`);
      }
      start = currGrade;
      end = currGrade;
    }
  }
  if (start === end) {
    ranges.push(start);
  } else {
    ranges.push(`${start}-${end}`);
  }
  return ranges.join('-');
  };

