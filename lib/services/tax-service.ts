import { property, taxComparison, taxHistory } from "../mock-data";

export async function getTaxHistory(propertyId: string) {
  void propertyId;
  return taxHistory;
}

export async function getTaxComparison(propertyId: string) {
  void propertyId;
  return taxComparison;
}

export async function getTaxSummary(propertyId: string) {
  void propertyId;
  return {
    currentTax: property.taxAmount,
    previousTax: property.previousTax,
    changePercent: 27.1,
    averageTax: 8425,
    highestIncrease: 2300,
  };
}
