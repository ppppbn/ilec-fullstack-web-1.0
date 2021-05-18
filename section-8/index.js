var fs = require('fs');

fs.readFile('./student.json', 'utf8', function(error, data) {
  if (error) {
    throw error;
  }

  let student = JSON.parse(data);
  student.email = 'vuhuyanh@gmail.com';

  fs.writeFile('./student2.json', JSON.stringify(student), function(error) {
    if (!error) {
      console.log('DONE!!!!');
    }
  });
});


