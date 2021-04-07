function cityRecord(name, population, treasury) {
    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applygrowth(percent) {
            this.population += Math.floor(this.population * percent / 100);
        },
        applyRecession(percent) { 
            this.treasury -= Math.ceil(this.population * percent / 100);
        },
    };

    return city;
}