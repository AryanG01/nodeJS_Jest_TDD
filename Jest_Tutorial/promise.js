function fetchPromise(x) {
    return new Promise((resolve, reject) => {

        // The producing code (this may take some time)

        if (x == 0) {
            resolve("peanut butter");
        } else {
            reject(new Error("error"));
        }
    });
}


module.exports = fetchPromise;