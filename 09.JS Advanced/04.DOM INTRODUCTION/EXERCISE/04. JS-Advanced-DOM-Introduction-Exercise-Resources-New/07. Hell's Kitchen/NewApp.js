function solve() {
    document.querySelector('#btnSend').addEventListener('click', () => {
        const textAreaContent = JSON.parse(document.querySelector('textarea').value);

        const restaurants = {};

        for (const restInfo of textAreaContent) {
            let [restName, workersInfo] = restInfo.split(' - ').filter(x => x).map(x => x.trim());
            if (restaurants[restName] == undefined) {
                restaurants[restName] = {
                    workers: []
                };
            }
            const workersArray = workersInfo.split(', ');

            for (const workerInfo of workersArray) {
                let [name, salary] = workerInfo.split(' ').filter(x => x).map(x => x.trim());
                salary = Number(salary);
                const worker = {
                    name,
                    salary,
                };

                restaurants[restName].workers.push(worker);
            }

             restaurants[restName].avgSalary = restaurants[restName].workers.reduce((acc, worker, i, workers) => {
                 return acc + worker.salary / workers.length
             }, 0);

             restaurants[restName].workers.sort((a, b) => b.salary - a.salary);
             restaurants[restName].bestSalary = restaurants[restName].workers[0].salary;
        }

        const bestrestaurant =  [...Object.entries(restaurants)].sort(([aKay, aValue], [bkay, bValue]) => bValue.avgSalary - aValue.avgSalary).splice(0, 1);

    })
}