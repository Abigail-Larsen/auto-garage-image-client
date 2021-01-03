export const readFile = (file) => {
    return new Promise((resolve, reject) => {
        let myReader = new FileReader();
        myReader.onloadend = function (e) {
            resolve(myReader.result);
        };
        return myReader.readAsDataURL(file);
    }).then(res => {
        return res
     })
};
