class Lesson {
    subject: string;

    constructor(subject: string) {
        this.subject = subject;
    }
}

class OnlineLesson extends  Lesson {
    url: string;

    constructor(subject: string, url: string) {
        super(subject);
    }
}

class Animal {
    grades: number[] = [];
}

class Dog extends Animal { // 상속
    label ? : string
}
let doggy: Dog;

doggy = new Dog();
doggy = new Animal(); // dog는 선택적 속성만 추가하므로 Animal OK!

class GradeAnnouncer {
    message: string;

    constructor(grade: number) {
        this.message = grade >= 65 ? 'Maybe next time ...' : 'You Pass!'
    }
}

class PassingAnnouncer extends GradeAnnouncer {
    constructor() {
        super(100);
    }
}

class FailingAnnouncer extends GradeAnnouncer {
    // constructor() {} // 하위 클래스가 자체 생성자를 선언하면 super 키워드를 통해 기본 클래스 생성자를 호출해야함.
}

class User { // 싱글톤
    private static instance: User;
    id: number;
    name: string;

    private constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    static getInstance(id: number, name: string): User {
        if (!User.instance) {
            User.instance = new User(id, name);
        }
        return User.instance;
    }
}
// const hong = new User(1, 'Hong');