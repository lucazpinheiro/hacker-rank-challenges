"""
problem: https://www.hackerrank.com/challenges/grading/problem
"""

sample_test = [73, 67, 38, 33]

def gradingStudents(grades):
    final_grades = []
    for original_grade in grades:
        next_mulple = None
        count = 1
        while next_mulple == None:
            if (original_grade + count) % 5 == 0:
                next_mulple = original_grade + count
            else:
                count = count + 1
        
        if count >= 3 or next_mulple < 40:
            final_grades.append(original_grade)
        else:
            final_grades.append(next_mulple)

    return final_grades

