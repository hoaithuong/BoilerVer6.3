import React from "react";
import Page from "../components/Page";
import AttributeFilterExample from "./components/AttributeFilterExample";
import AttributeElementsExample from "./components/AttributeElementsExample";
import AttributeFilterPivotTableExample from "./components/AttributeFilterPivotTableExample";
import ParentFilterExample from "./components/ParentFilterExample";
// import MeasureValueFilterDropdownExample from "./components/MeasureValueFilterDropdownExample";

const AttributeFilterComponents = () => {
    return (
        <Page>
            <h2>Attribute Filter Components</h2>
            <p>These examples show how to use the Attribute Filter components.</p>
            <div>
                <h3>Attribute Filter Example</h3>
                <p>This example shows how to add attribute filter component into a report.</p>
                <AttributeFilterExample />
                <br />
            </div>
            <div>
                <h3>Custom Attribute Filter using Attribute Elements component</h3>
                <p>
                    Pass a custom children function to this component to render the returned data using your
                    custom components.
                </p>
                <p>
                    The children function will receive isLoading state, possible error state, attribute
                    metadata, paging, attribute values and a loadMore function.
                </p>
                <AttributeElementsExample />
                <br />
            </div>
            <div>
                <h3>Attribute Filter Pivot Table</h3>
                <AttributeFilterPivotTableExample />
                <br />
            </div>
            <div>
                <h3>Attribute Filter Pivot Table</h3>
                <ParentFilterExample />
                <br />
            </div>
            <div>
                <h3>Measure value filter</h3>
                {/* <MeasureValueFilterDropdownExample></MeasureValueFilterDropdownExample> */}
            </div>
        </Page>
    );
};

export default AttributeFilterComponents;
