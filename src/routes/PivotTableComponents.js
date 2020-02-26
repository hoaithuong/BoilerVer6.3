import React from "react";
import Page from "../components/Page";
import PivotTableTotalsExample from "./components/PivotTableTotalsExample";

const PivotTableComponents = () => {
    return (
        <Page>
            <h2>Pivot Table</h2>
            <div>
                <h3>Example of Pivot Table with Totals</h3>
                <PivotTableTotalsExample />
                <br />
            </div>
        </Page>
    );
};

export default PivotTableComponents;
