STUDENT MANAGEMENT REFACTOR

RUN THE APPLICATION

From this folder:

npm start

RUN THE TESTS

npm test

MODULE RESPONSIBILITIES

src/data/students.js stores the initial sample records.
src/utils/studentValidation.js validates names and grades.
src/services/studentService.js adds records, displays records, and calculates averages.
src/index.js coordinates the application and handles user-facing errors.
test/studentService.test.js verifies the required activity cases.

DESIGN DECISION

Plain objects are sufficient for this small application because records only contain data and the required behavior is already isolated in service functions. A Student class could be useful in a larger domain model if each student needed related behavior, identity rules, or lifecycle state.

SESSION 10: GIT AND GITHUB

StudentProfile.jsx is a standalone component containing fictional student data for the name, student ID, and program fields. It does not require a React application to review its JSX structure.

Git workflow:

1. Initialize or clone the repository and run `git status`.
2. Create the feature branch with `git switch -c feature/student-profile`.
3. Commit the component with `git commit -m "Add student profile component"`.
4. Commit this README update with `git commit -m "Document student profile component"`.
5. Complete a third focused commit after code review.
6. Push with `git push -u origin feature/student-profile` and create a pull request from that branch to `main`.
