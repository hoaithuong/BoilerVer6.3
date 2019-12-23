import React from "react";
import Page from "../components/Page";
import DrillWithExternalDataExample from "./components/DrillWithExternalDataExample";
import PivotTableDrillExample from "./components/PivotTableDrillExample";
const DrillingComponents = () => {
    return (
        <Page>
            <div className="example-wrapper">
            {/* language=CSS */}
            <style>{`
                .example-wrapper {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: stretch;
                    flex: 1 0 auto;
                }
            `}</style>
            <div>
                <h3>Drill With External Data</h3>
                <p>
                    Here is how you can use visualization drilling to display 3rd party content based on the
                    clicked item.
                </p>
                <p>
                    You can display a mock user profile by clicking on an employee name. An request is created
                    using the selected employee name and retrieves the mock employee information asynchroneously.
                </p>
            </div>

            <DrillWithExternalDataExample/>
            </div>
            <br/>
            <div className="pivot-table-drilling">
                {/* language=CSS */}
                <style>{`
                    .pivot-table-drilling {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: stretch;
                        flex: 1 0 auto;
                    }
                `}</style>
                <div>
                    <h3>Pivot Table Drilling</h3>
                    <PivotTableDrillExample/>
                </div>
            </div>
        </Page>
    )
};

export default DrillingComponents;
