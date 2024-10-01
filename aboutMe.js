const myName = (callback) => {
    setTimeout(() => {
        console.log('My name is Dagna.');
        callback();
    }, 2000);
};

const myAge = (callback) => {
    setTimeout(() => {
        console.log('I am 34 years old, but still feel like 18.');
        callback();
    }, 2000);
};

const myPlace = (callback) => {
    setTimeout(() => {
        console.log('My home is now in Göteborg, but it used to be in Warsaw.');
        callback();
    }, 2000);
};

const myHobbies = () => {
    setTimeout(() => {
        console.log('My hobbies are: powerlifting, photography and creating Design Systems.');
    }, 2000);
};

const aboutMe = () => {
    myName(() => {
        myAge(() => {
            myPlace(() => {
                myHobbies();
            })
        })
    });
};

aboutMe();
