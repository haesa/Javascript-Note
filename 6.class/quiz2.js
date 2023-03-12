// 정직원과과 파트타임 직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한 달 근무 시간
// 매달 직원들의 정보를 이용해서 한 달 월급을 계산할 수 있다
// 정직원은 시간당 10,000원
// 파트타임 직원은 시간당 8,000원
class Employee {
  #name;
  #department;
  #hoursPerMonth;
  #payRate;
  constructor(name, department, hoursPerMonth, payRate) {
    this.#name = name;
    this.#department = department;
    this.#hoursPerMonth = hoursPerMonth;
    this.#payRate = payRate;
  }
  get pay() {
    return this.#payRate * this.#hoursPerMonth;
  }
}

class FullTimeEmplyoee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmplyoee.PAY_RATE);
  }
}
class PartimeEmplyoee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartimeEmplyoee.PAY_RATE);
  }
}

const full = new FullTimeEmplyoee('haesa', 'IT', '50');
const part = new PartimeEmplyoee('elie', 'IT', '30');

console.log(full.pay);
console.log(part.pay);
