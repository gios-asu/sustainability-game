CompanyBuilder = class CompanyBuilder extends Builder {
  constructor() {
    super();

    this.options = {};
    this.options.name = 'Default Name';
    this.options.capital = 10000000;
    this.options.industry = {}; // TODO a real default
    this.options.goal = {}; // TODO a real default
    this.options.marketPenetration = 0.001;
    this.options.numberOfFactories = 1;
    this.options.averageFactoryEfficiency = 0.8;
    this.options.programCosts = 0;
    this.options.companySatisfaction = 0.5;
    this.options.customerSatisfaction = 0.5;
  }

  setName(name) {
    this.options.name = name;
  }

  setCapital(capital) {
    this.options.capital = capital;
  }

  setIndustry(industry) {
    // TODO check typeof industry
    this.options.industry = industry;
  }

  setGoal(goal) {
    // TODO check typeof goal
    this.options.goal = goal;
  }

  setMarketPenetration(marketPenetration) {
    this.options.marketPenetration;
  }

  setNumberOfFactories(numberOfFactories) {
    this.options.numberOfFactories = numberOfFactories;
  }

  setAverageFactoryEfficiency(averageFactoryEfficiency) {
    this.options.averageFactoryEfficiency = averageFactoryEfficiency;
  }

  setProgramCosts(programCosts) {
    this.options.programCosts = programCosts;
  }

  setCompanySatisfaction(companySatisfaction) {
    this.options.companySatisfaction = companySatisfaction;
  }

  setCustomerSatisfaction(customerSatisfaction) {
    this.options.customerSatisfaction = customerSatisfaction;
  }
  
  build() {
    return new Company(this.options);
  }
}