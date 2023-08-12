/* Object Challenge */

const library = [
   {
    title: "Programming",
    author: "Clinton L",
    status: {
        own: true,
        reading: false,
        read: false
    }
   }
   ,
   {
   title: "Linux tutorials",
   author: "Michael O",
   status: {
       own: true,
       reading: false,
       read: false
   }
   },
   {
    title: "Multithreading",
    author: "Andy S",
    status: {
        own: true,
        reading: false,
        read: false
    }
    }
];

for(let i = 0;i < library.length;i++) {
    library[i].status.read = true;
}

const { title: firstBook } = library[0];

const str = JSON.stringify(library);
console.log(str);