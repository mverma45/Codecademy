    // Grades program
    function finalGrade(midterm, final, homework) {
        // initialize Grade
        if ( midterm < 0 ||
            midterm > 100 ||
            final < 0 ||
            final > 100 ||
            homework < 0 ||
            homework > 100);
    {
        return 'you have entered an invalid grade.';
    }

    let avgGrade = (midterm + final + homework) / 3;

    if(avgGrade < 60){
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
        else if (avgGrade < 100){
            return 'Grade: A';
        }
    }

    // console.log(finalGrade(99, 92, 95)/3) // Should print 'A'
