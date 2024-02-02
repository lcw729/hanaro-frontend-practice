const d1 = new Date();
d1.setFullYear(1970);
d1.setMonth(0);
d1.setDate(1);
console.log('d1:', d1);

const d2 = new Date();
d1.setFullYear(1970);
d1.setMonth(0);
d1.setDate(2);
console.log('d2:', d2);

console.log(Math.floor(d2.getTime() - d1.getTime() / 1000));

const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());

const lastDate = new Date();
lastDate.setDate(1);
lastDate.setDate(lastDate.getMonth() + 1);
lastDate.setDate(-1);
console.log('lastDate:',lastDate, lastDate.getDate());

const dates = Array(5)
    .fill(0)
    .map(() => rand(1, lastDate.getDate()))
    .map(day => {
        const tmpDate = new Date();
        tmpDate.setDate(day);
        return tmpDate;
    });
console.log('dates:',
    dates.sort((a, b) => (a > b ? -1 : 1))
);


const weekNames = '일월화수목금토';
const nextYearToday = new Date();
nextYearToday.setFullYear(nextYearToday.getFullYear() + 1);
console.log('next year today week>>', weekNames[nextYearToday.getDay()]);

const now = new Date();
now.setDate(+100);
console.log(now);

const getCalender = (day) => { // 2024-02-02
    const date = new Date(day);
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month, 0).getDate();
    const first_day = new Date(year, month);
    console.log(`${year}년 ${month}월`);

    for (let i = 1; i < days + 1; i += 1) {
        if (i % 7 === 0)
            console.log(first_day)
    }
}

getCalender('2024-02-02');