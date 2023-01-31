// Grades program
function finalGrade(gr1, gr2, gr3) {
    // initialize Grade
    let avgGrade = 0;
function avgGrade(){
        return avgGrade(gr1 + gr2 + gr3);
        }
    // for (let i = 0; i < finalGrade.length; i++){
    //   avgGrade += finalGrade;
    //   let avgGrade = (avgGrade/finalGrade.length);
    // }
    console.log("Average grade " + (avgGrade/finalGrade.length));
    if (avgGrade < 0 || avgGrade > 100 || avgGrade < 0 || avgGrade > 100 || avgGrade < 0 || avgGrade > 100){
  return 'You have entered an invalid grade.'
    }
  else if(avgGrade < 59){
    return 'Grade: F';
  }
    else if(avgGrade < 69){
        return 'Grade: D';
    }
    else if(avgGrade < 79){
        return 'Grade: C';
    }
    else if(avgGrade < 89){
        return 'Grade: B';
    }
    else if(avgGrade <= 100){
        return 'Grade: A';
    }
  }

    // console.log(finalGrade(99, 92, 95)/3) // Should print 'A'
