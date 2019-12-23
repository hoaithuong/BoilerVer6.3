import React, { Component } from "react";
import { Visualization } from "@gooddata/react-components";
import { projectId, columnVisualizationUri } from "../utils/fixtures";

import ExampleWithExport from "./utils/ExampleWithExport";

export class ExportVisualizationExample extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        console.info("ExportVisualizationExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        console.info("ExportVisualizationExample onLoadingChanged", ...params);
    }
    render() {
        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div style={{ height: 300 }} className="s-bar-chart">
                        <Visualization
                            projectId={projectId}
                            uri={columnVisualizationUri}
                            onExportReady={onExportReady}
                            onLoadingChanged={this.onLoadingChanged}
                            onError={this.onError}
                        />
                    </div>
                )}
            </ExampleWithExport>
        );
    }
}

export default ExportVisualizationExample;
