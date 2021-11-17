class Company{
    constructor(){
        this.departments  = {};
    }

    addEmployee(...params){
        if ((params.some(x => x === undefined || x === '' || x === null))) {
            throw new Error('Invalid input!');
        }

        let [username, salary, position, department] = params;

        if (!Number(salary) ||  salary < 0) {
            throw new Error('Invalid input!');
        }

        salary = Number(salary);

        if (!this.departments[department]) {
            this.departments[department] = [{username, salary, position}];
        }else{
            this.departments[department].push({username, salary, position});
        }

        this.departments[department].sort((a, b) => a.salary - b.salary).sort((a, b) => a.username.localeCompare(b.username));
 
        return `New employee is hired. Name: ${username}. Position: ${position}`
    }

    bestDepartment(){
        let bestDepname = '';
        let avgmaxsalary = 0

        
        Object.entries(this.departments).forEach(department => {
            const [key, value] = department;
            let sum = 0;
            value.forEach(element => {
                sum += element.salary
            });

            const avg = sum / value.length
            if (avg > avgmaxsalary) {
                avgmaxsalary = avg;
                bestDepname = key;
            }
        });

        return `Best Department is: ${bestDepname}\n
        Average salary: ${avgmaxsalary}\n
        ${this.departments[bestDepname].map(x => `${x.username} ${x.salary.toFixed(2)} ${x.position}`).join('\n')}`
    }

}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
