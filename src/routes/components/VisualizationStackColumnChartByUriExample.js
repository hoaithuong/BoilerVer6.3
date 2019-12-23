import React, { Component } from "react";
import "@gooddata/react-components/styles/css/main.css";
import { Visualization } from "@gooddata/react-components";

import { projectId, columnVisualizationUri, backendUrlForInfo } from "../utils/fixtures";
const DOWNLOADER_ID = "downloader";
export class VisualizationColumnChartByIdentifierExample extends Component {
    constructor(props) {
        super(props);
        this.doExport = this.doExport.bind(this);
        this.onExportReady = this.onExportReady.bind(this);
    }
    onExportReady(exportResult) {
        this.exportResult = exportResult;
    }

    async doExport() {
        try {
            const result = await this.exportResult({
                format: "xlsx",
                includeFilterContext: true,
                mergeHeaders: true,
                title: "CustomTitle",
            });
            this.downloadFile(result.uri);
            console.log("Export successfully: ", result.uri);
        } catch (error) {
            console.log("Export error: ", error);
        }
    }
    downloadFile = uri => {
        let anchor = document.getElementById(DOWNLOADER_ID);
        if (!anchor) {
            anchor = document.createElement("a");
            anchor.id = DOWNLOADER_ID;
            document.body.appendChild(anchor);
        }
        anchor.href = backendUrlForInfo + uri;
        anchor.download = uri;
        anchor.click();
    };
    render() {
        return (
            <div style={{ height: 400 }} className="s-visualization-chart">
                <Visualization
                    projectId={projectId}
                    uri={columnVisualizationUri}
                    onExportReady={this.onExportReady}
                />
                <button className="button button-secondary" onClick={this.doExport}>
                    Export
                </button>
            </div>
        );
    }
}

export default VisualizationColumnChartByIdentifierExample;
