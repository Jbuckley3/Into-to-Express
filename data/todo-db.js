
  // data/student-db.js
const students = [
    { id: 1, name: 'John Doe', grade: 'A' },
    { id: 2, name: 'Jane Smith', grade: 'B' },
  ];
  
  module.exports = {
    getAll: function() {
      return students;
    },
  };
  