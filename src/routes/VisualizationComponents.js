import React from "react";
import Page from "../components/Page";
import VisualizationStackColumnChartByUriExample from "./components/VisualizationStackColumnChartByUriExample";

const VisualizationComponents = () => {
    return (
        <Page>
            <h1>Visualization by URI</h1>
            <p>
                These are the examples of the generic Visualization component that uses URI to identify
                insights.
            </p>
            <div>
                <h3>Column Chart</h3>
                <VisualizationStackColumnChartByUriExample />
                <br />
            </div>
        </Page>
    );
};

export default VisualizationComponents;
