const db = firebase.firestore();
var input = document.getElementById("myInput");
var filter = input.value;
db.collection('Asthma attacks').doc(filter).collection('Record Asthma attacks').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAccount(doc);
    })
})

const accountList = document.querySelector('#tbl_account_list');

function renderAccount(doc) {
    let tr = document.createElement('tr');
    let td_action = document.createElement('td');
    let td_time = document.createElement('td');

    tr.setAttribute('data-id', doc.id);
    td_action.textContent = doc.data().action;
    td_time.textContent = doc.data().time;

    tr.appendChild(td_action);
    tr.appendChild(td_time);
    accountList.appendChild(tr);

}