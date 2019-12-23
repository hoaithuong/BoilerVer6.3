import React, { Component } from "react";
import { AttributeFilter, Model, ErrorComponent, PivotTable } from "@gooddata/react-components";
import ExampleWithExport from "./utils/ExampleWithExport";
import "@gooddata/react-components/styles/css/main.css";

import {
    locationResortIdentifier,
    locationResortUri,
    projectId,
    quarterDateIdentifier,
    monthDateIdentifier,
    locationStateDisplayFormIdentifier,
    locationNameDisplayFormIdentifier,
    franchiseFeesIdentifier,
    franchiseFeesAdRoyaltyIdentifier,
    franchiseFeesInitialFranchiseFeeIdentifier,
    franchiseFeesIdentifierOngoingRoyalty,
    menuCategoryAttributeDFIdentifier,
} from "../utils/fixtures";

export class AttributeFilterPivotTableExample extends Component {
    constructor(props) {
        super(props);

        this.onApply = this.onApply.bind(this);
        this.state = {
            filters: [],
            error: null,
        };
    }

    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        console.info("AttributeFilterPivotTableExample onLoadingChanged", ...params);
    }

    onApply(filter) {
        // eslint-disable-next-line no-console
        console.log("AttributeFilterPivotTableExample onApply", filter);
        this.setState({ filters: [], error: null });
        if (filter.in) {
            this.filterPositiveAttribute(filter);
        } else {
            this.filterNegativeAttribute(filter);
        }
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        console.info("AttributeFilterPivotTableExample onLoadingChanged", ...params);
    }

    filterPositiveAttribute(filter) {
        let filters;
        if (filter.in.length !== 0) {
            filters = [
                {
                    positiveAttributeFilter: {
                        displayForm: {
                            identifier: filter.id,
                        },
                        in: filter.in.map(element => `${locationResortUri}/elements?id=${element}`),
                    },
                },
            ];
        } else {
            this.setState({
                error: "The filter must have at least one item selected",
            });
        }
        this.setState({ filters });
    }

    filterNegativeAttribute(filter) {
        let filters;
        if (filter.notIn.length !== 0) {
            filters = [
                {
                    negativeAttributeFilter: {
                        displayForm: {
                            identifier: filter.id,
                        },
                        notIn: filter.notIn.map(element => `${locationResortUri}/elements?id=${element}`),
                    },
                },
            ];
        }
        this.setState({ filters });
    }

    render() {
        const { filters, error } = this.state;

        const measures = [
            Model.measure(franchiseFeesIdentifier)
                .format("#,##0")
                .localIdentifier("franchiseFeesIdentifier"),
            Model.measure(franchiseFeesAdRoyaltyIdentifier)
                .format("#,##0")
                .localIdentifier("franchiseFeesAdRoyaltyIdentifier"),
            Model.measure(franchiseFeesInitialFranchiseFeeIdentifier)
                .format("#,##0")
                .localIdentifier("franchiseFeesInitialFranchiseFeeIdentifier")
                .format(
                    "[>=30000000][color=2190c0]█████ #,##0; [>=25000000][color=2190c0]████░ #,##0; [>=10000000][color=2190c0]███░░ #,##0; [>=9000000][color=2190c0]██░░░ #,##0; [>=0][color=2190c0]█░░░░ #,##0; [=Null] No data;",
                ),
            Model.measure(franchiseFeesIdentifierOngoingRoyalty)
                .format("#,##0")
                .localIdentifier("franchiseFeesIdentifierOngoingRoyalty")
                .format(
                    "[>=100000][color=2190c0] #,##0.##$; [>=50000][color=A7BC0A] #,##0.##$; [>=20000][color=A7BC0A] #,##0.##$; [>=10000][color=EF3333] #,##0.##$; [>=0][color=c02190] #,##0.##$; [=Null] No data;",
                ),
        ];

        const attributes = [
            Model.attribute(locationStateDisplayFormIdentifier).localIdentifier("state"),
            Model.attribute(locationNameDisplayFormIdentifier),
            Model.attribute(menuCategoryAttributeDFIdentifier),
        ];

        const columns = [Model.attribute(quarterDateIdentifier), Model.attribute(monthDateIdentifier)];

        return (
            <ExampleWithExport>
                {onExportReady => (
                    <div className="s-attribute-filter">
                        <AttributeFilter
                            identifier={locationResortIdentifier}
                            projectId={projectId}
                            fullscreenOnMobile={false}
                            onApply={this.onApply}
                        />
                        <div style={{ height: 300 }} className="s-line-chart">
                            {error ? (
                                <ErrorComponent message={error} />
                            ) : (
                                <PivotTable
                                    projectId={projectId}
                                    measures={measures}
                                    columns={columns}
                                    rows={attributes}
                                    filters={filters}
                                    onExportReady={onExportReady}
                                    onLoadingChanged={this.onLoadingChanged}
                                    onError={this.onError}
                                />
                            )}
                        </div>
                    </div>
                )}
            </ExampleWithExport>
        );
    }
}

export default AttributeFilterPivotTableExample;
