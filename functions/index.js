const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.newUserSignUp = functions.auth.user().onCreate(user => {
    // for background triggers you must return a value/promise
    return admin.firestore().collection('PersonalInfo3').doc(user.uid).set({
        about_me: 'Hi I am a new user',
        address: 'Enter your address',
        age: 20,
        dob: "DD/MM/YYYY",
        fullname: 'Enter your fullname',
        personalid: 'Enter your patient id',
        phonenumber: 'Enter your phone number',
        email: user.email
    });
});

// auth trigger (user deleted)
exports.userDeleted = functions.auth.user().onDelete(user => {
    const doc = admin.firestore().collection('users').doc(user.uid);
    return doc.delete();
});