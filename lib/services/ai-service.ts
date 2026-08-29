import { alerts, insights } from "../mock-data";

export async function getInsights(propertyId: string) {
  void propertyId;
  return insights;
}

export async function getAlerts(propertyId: string) {
  void propertyId;
  return alerts;
}

export async function askVari(message: string) {
  const lower = message.toLowerCase();

  if (lower.includes("why")) {
    return {
      answer:
        "Your property tax increased mainly because the assessed built-up area changed from 1,200 sq.ft to 1,450 sq.ft, and the revised annual value and zone rate were also updated for the latest assessment year.",
      source: "Assessment summary",
    };
  }

  if (lower.includes("correct") || lower.includes("assessment")) {
    return {
      answer:
        "The assessment appears mostly consistent. The only area requiring review is the built-up area increase, which differs from the previous assessment and should be cross-checked against the approved plan.",
      source: "Validation report",
    };
  }

  if (lower.includes("grievance") || lower.includes("complaint")) {
    return {
      answer:
        "You can use the Grievance Assistant to identify the issue, check the required documents and generate a grievance description.",
      source: "Grievance guidance",
    };
  }

  if (lower.includes("explain") || lower.includes("tax")) {
    return {
      answer:
        "Your tax is calculated from the property's built-up area, annual rental value, zone rate and applicable civic charges. Open Tax Breakdown to see how each component contributes to the total.",
      source: "Tax breakdown",
    };
  }

  if (lower.includes("document") || lower.includes("need")) {
    return {
      answer:
        "You should keep the latest property tax notice, approved building plan, ownership proof, and any updated address or occupancy documents ready for review.",
      source: "Document checklist",
    };
  }

  return {
    answer:
      "I reviewed the current property record and the increase is linked to reassessed built-up area and updated tax rate. You can compare the documents and submit a grievance if the assessment does not match the approved records.",
    source: "Property analysis",
  };
}

export async function sendChatMessage(message: string) {
  // Keep response generation behind one async boundary so an API can replace the MVP later.
  return askVari(message);
}
