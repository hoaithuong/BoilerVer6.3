import React from "react";
import { Table, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

import {
    projectId,
    locationStateDisplayFormIdentifier,
    locationNameDisplayFormIdentifier,
    franchiseFeesIdentifier,
    franchiseFeesAdRoyaltyIdentifier,
    franchiseFeesInitialFranchiseFeeIdentifier,
    franchiseFeesIdentifierOngoingRoyalty,
    menuCategoryAttributeDFIdentifier,
    backendUrlForInfo,
} from "../utils/fixtures";
const DOWNLOADER_ID = "downloader";
const measures = [
    Model.measure(franchiseFeesIdentifier)
        .format("#,##0")
        .localIdentifier("franchiseFeesIdentifier"),
    Model.measure(franchiseFeesAdRoyaltyIdentifier)
        .format("#,##0")
        .localIdentifier("franchiseFeesAdRoyaltyIdentifier"),
    Model.measure(franchiseFeesInitialFranchiseFeeIdentifier)
        .format("#,##0")
        .localIdentifier("franchiseFeesInitialFranchiseFeeIdentifier"),
    Model.measure(franchiseFeesIdentifierOngoingRoyalty)
        .format("#,##0")
        .localIdentifier("franchiseFeesIdentifierOngoingRoyalty"),
];

const attributes = [
    Model.attribute(locationStateDisplayFormIdentifier).localIdentifier("state"),
    Model.attribute(locationNameDisplayFormIdentifier).localIdentifier("name"),
    Model.attribute(menuCategoryAttributeDFIdentifier).localIdentifier("menu"),
];
export class ExportTableExample extends React.Component {
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
            <div style={{ height: 367 }}>
                <Table
                    projectId={projectId}
                    measures={measures}
                    attributes={attributes}
                    filters={[
                        Model.attributeFilter("label.restaurantlocation.locationresort").notIn(
                            "Highland Village",
                            "Irving",
                        ),
                    ]}
                    onExportReady={this.onExportReady}
                />
                <button className="button button-secondary" onClick={this.doExport}>
                    Export
                </button>
            </div>
        );
    }
}

export default ExportTableExample;
