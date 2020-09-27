const db = firebase.firestore();
var input = document.getElementById("myInput");
var filter = input.value;
const accountList = document.querySelector('#tbl_account_list');
db.collection('Treatments').doc(filter).collection('Individual Treatments').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAccount(doc);
    })
})

function renderAccount(doc) {
    let tr = document.createElement('tr');
    let td_patientName = document.createElement('td');
    let td_treatName = document.createElement('td');
    let td_device = document.createElement('td');
    let td_dosage = document.createElement('td');
    let td_duration = document.createElement('td');
    tr.setAttribute('data-id', doc.id);
    td_patientName.textContent = doc.data().Username;
    td_treatName.textContent = doc.data().Treatment_name;
    td_device.textContent = doc.data().Treatment_device;
    td_dosage.textContent = doc.data().Treatment_dosage;
    td_duration.textContent = doc.data().Treatment_Duration;
    tr.appendChild(td_patientName);
    tr.appendChild(td_treatName);
    tr.appendChild(td_device);
    tr.appendChild(td_dosage);
    tr.appendChild(td_duration);
    accountList.appendChild(tr);
}