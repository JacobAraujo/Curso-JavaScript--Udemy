const fs = require('fs').promises; // call file systems module for manipulatation of files
const path = require('path');      // path module

async function readdir(rootDir) {                   // async function for get all the files of a directory
    rootDir = rootDir || path.resolve(__dirname);   
    const items = await fs.readdir(rootDir);        // read a dir and get the files
    walk(items, rootDir);                           // calls a function for "walk" in the items
}

async function walk(items, rootDir){
    for(let item of items){                                // go through the items
        const itemFullPath = path.resolve(rootDir, item);  // get the full path of the item
        const stats = await fs.stat(itemFullPath);         // get the stats 
        
        if(/\.git/g.test(itemFullPath)) continue;          // ignores the gitignore regex
        if(/node_modules/g.test(itemFullPath)) continue;   // ignores the node_modules regex

        if(stats.isDirectory()){
            readdir(itemFullPath);                         // if is a directory respets listing the items inside 
            continue;
        }

        console.log(itemFullPath)                          // show the files
    }
}

readdir('C:/Users/jacob/OneDrive/Documentos/GitHub/Curso-JavaScript-Udemy')