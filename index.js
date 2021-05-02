const fs = require('fs')

//write to a file
//fs.writeFile('result/file.json', JSON.stringify('This is my first file content'), (err) =>{
    //if(err) throw err
//}) //creates a new file

//read from a file
fs.readFile('result/file.json', 'utf8', (err, content) => {
   if(err) throw err
   console.log(content)
})


//append a file
//fs.appendFile('result/file.json', JSON.stringify(['This is the second content']), (err) => {
// if(err) throw err
//})

//JSON file with an array to append to an existing file
//fs.readFile('result/file.json', 'utf8', (err, content) => {
  //  if(err) throw err

 //   let data = JSON.parse(content)

  //  data.push("This is my second content");

//    fs.writeFile('result/file.json', JSON.stringify(data), (err) => {
     //   if(err) throw err
// })
//})
