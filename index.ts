// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
interface iteacher {
  _classAttendence: number;
  WorkHours(hrs: number): void;
}
class iteacher implements iteacher {
  _classAttendence: number;
  public get classAttendences() {
    return this._classAttendence;
  }
  constructor(classAttendence: number) {
    this._classAttendence = classAttendence;
  }
  public WorkHours(hrs: number): void {
    this._classAttendence += hrs;
  }
}
let person1 = new iteacher(0);
console.log("attendance start  ", person1.classAttendences);
person1.WorkHours(10);
console.log("teacher attendance hrs", person1.classAttendences);
