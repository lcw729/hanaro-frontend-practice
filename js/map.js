const hong = {id: 1, name: 'Hong', dept: 1};
const map = new Map([[1,11],[2,22]]);
console.log(map);

map.set('three', 333);
map.set('four', [1,2,3,4]);
map.set(hong.name, hong);
map.set(hong, hong.name);
console.log(map.get(hong));

map.delete(hong);
console.log(map.has(hong));
console.log(map.has(hong.name));
// console.log(map.clear());

const map2 = new Map([...map]);
console.log(map2);
const map3 = new Map([...map, ...map2]);
console.log(map3);

const hrTeam = {id: 1, dname: '인사팀'};
const devTeam = {id: 2, dname: '개발팀'};
const depts = [ hrTeam, devTeam ];
// const hong = {id: 1, name: 'Hong', dept: 1};
const kim = {id: 2, name: 'Kim', dept: 2};
const emps = [ hong, kim, {id:3, name: 'Park', dept: 2}, {id: 4, name: 'Choi', dept: 2} ];

const deptMap = new Map(depts.map(dept => [dept.id, dept]));
const empDept = new Map(emps.map(emp => [emp.id, emp]));

// depts.map((value, idx, arr) => {
//     deptMap.set(value.id, value);
// });
console.log(deptMap)

// emps.map((value, idx, arr) => {
//     empDept.set(value.id, value);
// });
console.log(empDept);


const xx = emps.map(emp => [emp, deptMap.get(emp.dept)]);
console.log('xx :', xx);

const yy = emps.map(({id, name, dept}) => [{id, name}, deptMap.get(emp.dept)]);
console.log('yy :', yy);