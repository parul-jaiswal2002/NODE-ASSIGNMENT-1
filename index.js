const fs = require('fs');
const { resolve } = require('path');

const myFileWriter = async (fileName, fileContent) => {
	return new Promise((resolve, reject) => {
	  fs.writeFile(fileName, fileContent, (err) => {
		if (err) {
		  reject(err);
		}
		resolve();
	  });
	});
  }; 


const myFileReader = async (fileName) => {
	return new Promise((resolve, reject) => {
		 fs.readFile(fileName, "html", (err,data) => {
			if(data){
				return data
			}
		})
    }
    )}
	



const myFileUpdater = async (fileName, fileContent) => {
	return new Promise((resolve, reject) => {
		fs.appendFile(fileName, fileContent , (err) => {
			if(err){
				reject(err)
			}
			resolve()
		})
	})

}

const myFileDeleter = async (fileName) => {
	return new Promise((resolve, reject) => {
		fs.unlink(fileName , (err) => {
			if(err){
				reject(err)
			}
			resolve()
		})
	})
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
console.log(myFileWriter("read.txt","hello"))
console.log(myFileUpdater("read.txt"," world"))
console.log(myFileReader("index.html").then(resp => console.log(resp)) )
console.log(myFileWriter("index.html","<h1>Hello world </h1>"))
console.log(myFileWriter("index.html", " <h1> Hello Parul</h1>"))


// const read = (path, type) => new Promise((resolve, reject) => {
// 	fs.readFile(path, type, (err, file) => {
// 	  if (err) reject(err)
// 	  resolve(file)
// 	})
//   })
//   read('file.txt', 'utf8')
//     .then((file) => console.log('your file is '+file))
//     .catch((err) => console.log('error reading file '+err))


// // const args = process.argv.slice(2);
// // console.log(`Received command line arguments: ${args}`);
// const envVar = process.env.myname;
// console.log(`Received environment variable: ${envVar}`);



  