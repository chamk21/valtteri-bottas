const db = firebase.firestore();

db.collection('PersonalInfo2').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAccount(doc);
    })
})
const accountList = document.querySelector('#tbl_account_list');

function renderAccount(doc) {
    var user = firebase.auth().currentUser;
    if (user != null) {
        let tr = document.createElement('tr');
        let td_age = document.createElement('td');
        let td_full_name = document.createElement('td');
        let td_address = document.createElement('td');
        let td_aboutme = document.createElement('td');
        let td_dob = document.createElement('td');
        let td_phoneNumber = document.createElement('td');
        let td_personalID = document.createElement('td');

        tr.setAttribute('data-id', doc.id);
        td_age.textContent = doc.data().age;
        td_full_name.textContent = doc.data().fullname;
        td_address.textContent = doc.data().address;
        td_aboutme.textContent = doc.data().aboutme;
        td_dob.textContent = doc.data().dob;
        td_phoneNumber.textContent = doc.data().phonenumber;
        td_personalID.textContent = doc.data().personalid;

        tr.appendChild(td_age);
        tr.appendChild(td_full_name);
        tr.appendChild(td_address);
        tr.appendChild(td_aboutme);
        tr.appendChild(td_dob);
        tr.appendChild(td_phoneNumber);
        tr.appendChild(td_personalID);

        accountList.appendChild(tr);
    } else {
        return null
    }


}