const getters = {
  getListOfLicense: state => state.listOfLicense,
  getTotalCostOfSelectedPlan: state => {
    return state.license.numberOfLicenses * state.license.price;
  }
};
export default getters;
