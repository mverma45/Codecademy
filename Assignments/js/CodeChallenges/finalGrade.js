    function finalGrade(midterm, final, homework) {

        if (
            midterm < 0 ||
            final < 0 ||
            homework < 0
          ) {
            return "You have entered an invalid grade.";
          }

    let avgGrade = (midterm + final + homework) / 3;

    if(avgGrade < 60) {
        return 'Grade: F';
    }
        else if(avgGrade < 70){
            return 'Grade: D';
        }
        else if(avgGrade < 80){
            return 'Grade: C';
        }
        else if(avgGrade < 90){
            return 'Grade: B';
        }
        else if(avgGrade < 100){
            return 'Grade: A';
        }
        else if(avgGrade > 100) {
            return 'You got extra credit, Grade: A+';
        }
    }