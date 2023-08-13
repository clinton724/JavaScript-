/* For Of loop */

const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'white',
    color4: 'orange'
}

for(const key in colorObj) {
    console.log(key, colorObj[key]);
}