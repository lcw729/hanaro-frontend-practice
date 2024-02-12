console.log('DOM.js', div1);

const sbm = () => {
    console.log('SBM!!!');
    evt.preventDefault();
}
// form의 action이 비워져 있어서 자기 자신을 다시 부른다.
frm.addEventListener('submit', evt => {
    console.log('SBM!!!');
});

btnSubmit.addEventListener('click', evt => {
    // evt.preventDefault();
    console.log('Submit!!!');
});

div1.addEventListener('click', evt => {
    console.log('Div1');
}, false);

div2.addEventListener('click', evt => {
    console.log('Div2');
    // evt.stopPropagation(); // bubbling stop
}, {once: true});

btn.addEventListener('click', evt => {
    console.log('Button');
}, false);

/*
bubbling btn -> div2 -> div1 (default)
capturing div1 -> div2 -> btn
 */

const users = [

];

const COL_IDX = {id:0, name:1, tel:2, addr:3, btns: 4};
users.forEach(user => {
    const row = userTable.insertRow();
    const cells = Array(4);
    for (const [k, v] of Object.entries(user)) {
        cells[COL_IDX[k]] = v;
    }

    cells.forEach(val => (row.insertCell().innerText = val))
    // const btn = document.createElement('button');
    // btn.textContent = 'DEL';
    // btn.addEventListener('click', evt => {
    //     row.remove();
    // });
    // row.insertCell().append(btn);
})