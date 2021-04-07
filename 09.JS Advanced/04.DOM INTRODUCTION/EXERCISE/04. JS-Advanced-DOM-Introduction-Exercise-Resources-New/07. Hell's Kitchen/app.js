function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = JSON.parse(document.querySelector('#inputs textarea').value);
      const restaurants = [];

      for (const restaurantInfo of input) {
         const [name, workersInfo] = restaurantInfo.split(' - ');
         let restaurant = restaurants.find(x => x.name === name)
         if (restaurant === undefined) {
            restaurant = {
               name,
               workers: [],
               // avgSaray() {
               //    const sum = this.workers.reduce((a, b) => a.salary + b.salary)
               //    return  sum / this.workers.length;
               // },
               // bestSalary() {
               //    return this.workers[0].salary.toFixed(2);
               // }
            }
            restaurants.push(restaurant);
         }
         for (const workerInfo of workersInfo.split(', ') ){
            let [name, salary] = workerInfo.split(' ');
            salary = Number(salary);
            const worker = { name, salary };
            restaurant.workers.push(worker);
            restaurant.workers.sort((a, b) => b.salary - a.salary);
         }
         
      }
      const avg = restaurants[0].avgSaray();
      const bestRest = restaurants.sort((a,b) => a.avgSaray() - b.avgSaray());
      console.log(bestRest);
      console.log(avg);
   }
}