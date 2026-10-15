function StudentProfile() {
  const student = {
    name: "Maria Santos",
    studentId: "2026-001",
    program: "BS Information Technology"
  };

  return (
    <section>
      <h2>Student Profile</h2>
      <p>Name: {student.name}</p>
      <p>Student ID: {student.studentId}</p>
      <p>Program: {student.program}</p>
    </section>
  );
}

export default StudentProfile;
