const post = {
    id: 1,
    title: 'Post one',
    body: 'This is the body'
};

// Convert JSON to string
const str = JSON.stringify(post);

// Parse JSON
const obj = JSON.parse(str);

console.log(obj);