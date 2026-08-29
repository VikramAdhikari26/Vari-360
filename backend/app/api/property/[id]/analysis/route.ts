import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const supabase = getSupabase();

    const { data: property, error } = await supabase
      .from("properties")
      .select("*")
      .eq("property_id", id)
      .single();

    if (error || !property) {
      return NextResponse.json(
        {
          success: false,
          message: "Property not found",
        },
        { status: 404 }
      );
    }

    const previousTax = Number(property.previous_tax ?? 0);
    const currentTax = Number(property.current_tax ?? 0);
    const previousArea = Number(property.previous_area ?? 0);
    const currentArea = Number(property.current_area ?? 0);

    const taxDifference = currentTax - previousTax;
    const taxPercentageChange = previousTax > 0 ? (taxDifference / previousTax) * 100 : 0;
    const areaDifference = currentArea - previousArea;
    const areaPercentageChange = previousArea > 0 ? (areaDifference / previousArea) * 100 : 0;

    let status = "Stable";
    let primaryReason = "No significant assessment change detected.";

    if (taxPercentageChange > 10) {
      status = "Attention";

      if (areaPercentageChange > 5) {
        primaryReason =
          "The tax increase is primarily associated with an increase in assessed built-up area.";
      } else {
        primaryReason =
          "The current assessment shows a significant increase in property tax.";
      }
    } else if (taxPercentageChange < -10) {
      status = "Reduced";
      primaryReason = "The current assessment shows a reduction in property tax.";
    }

    return NextResponse.json({
      success: true,
      data: {
        propertyId: property.property_id,
        assessment: {
          previousYear: property.previous_year,
          currentYear: property.current_year,
        },
        tax: {
          previous: previousTax,
          current: currentTax,
          difference: taxDifference,
          percentageChange: Number(taxPercentageChange.toFixed(2)),
        },
        area: {
          previous: previousArea,
          current: currentArea,
          difference: areaDifference,
          percentageChange: Number(areaPercentageChange.toFixed(2)),
        },
        status,
        primaryReason,
      },
    });
  } catch (error) {
    console.error("Tax analysis error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to analyse property tax",
      },
      { status: 500 }
    );
  }
}
