const fs = require('fs');
const path=require("path")
const replacethis="akash"
const replacewith="sharma"
const preview=false
const folder=__dirname

try {
  const data = fs.readdir(folder,(err,data)=>{
    console.log(data);
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      let oldfile=path.join(folder,item)
      let newfile=path.join(folder,item.replaceAll(replacethis,replacewith))
      if(!preview){
      fs.rename(oldfile,newfile,()=>{
        console.log("file rename sucessfully")
      
      })
    }
    else{
      if(("./"+item) !== (newfile) ){
        console.log("./"+item+" will be nename to "+newfile)
      }
    }
    }
  });
} catch (err) {
  console.error(err);
}
