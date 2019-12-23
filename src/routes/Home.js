import React from "react";
import Page from "../components/Page";
import KPIExample from "./components/KPIExample";
import ColumnChartExample from "./components/ColumnChartExample";
import BarChartExample from "./components/BarChartExample";
import LineChartExample from "./components/LineChartExample";
import AreaChartExample from "./components/AreaChartExample";
import StackedAreaChartExample from "./components/StackAreaChartExample";
import PieChartExample from "./components/PieChartExample";
import DonutChartExample from "./components/DonutChartExample";
import ComboChartExample from "./components/ComboChartExample";
import HeadlineExample from "./components/HeadlineExample";
import {
    ColumnChart,
    Model,
    LineChart,
    AreaChart,
    ComboChart,
    BarChart,
    ScatterPlot,
    Heatmap,
    PivotTable,
} from "@gooddata/react-components";

const Home = () => {
    return (
        <Page>
            <h2>Basic Components</h2>
            <p>
                The following components accept measures and attributes, perform the execution, and render
                data as a chart, table or KPI.
            </p>
            <div>
                <h3>KPI</h3>
                <KPIExample />
            </div>
            <div>
                <h3>Column Chart</h3>
                <ColumnChartExample></ColumnChartExample>
            </div>
            <div>
                <h3>Bar Chart</h3>
                <BarChartExample></BarChartExample>
            </div>
            <div>
                <h3>Line chart with custom colors</h3>
                <LineChartExample></LineChartExample>
            </div>

            <div>
                <h3>Area chart</h3>
                <AreaChartExample></AreaChartExample>
            </div>
            <div>
                <h3>Stacked Area chart</h3>
                <StackedAreaChartExample></StackedAreaChartExample>
            </div>
            <div>
                <h3>Pie chart</h3>
                <PieChartExample></PieChartExample>
            </div>
            <div>
                <h3>Donut chart</h3>
                <DonutChartExample></DonutChartExample>
            </div>
            <div>
                <h3>Combo chart</h3>
                <ComboChartExample></ComboChartExample>
            </div>
            <div>
                <h3>Headline</h3>
                <HeadlineExample></HeadlineExample>
            </div>
            <br />
            <div className="column-chart" style={{ height: 400 }}>
                <h3>Column chart has format measure</h3>
                <ColumnChart
                    measures={[
                        Model.measure("aaEGaXAEgB7U")
                            .localIdentifier("m_0")
                            .format(
                                "[>=100000][color=2190c0] #,##0.##$; [>=50000][color=A7BC0A] #,##0.##$; [>=20000][color=A7BC0A] #,##0.##$; [>=10000][color=EF3333] #,##0.##$; [>=0][color=c02190] #,##0.##$; [=Null] No data;",
                            ),
                    ]}
                    viewBy={[
                        Model.attribute("label.restaurantlocation.locationresort").localIdentifier("va_0"),
                    ]}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                />
            </div>
            <div className="line-chart" style={{ height: 400 }}>
                <h3>Line chart has 3 measures, 1 segmentBy</h3>
                <LineChart
                    measures={[
                        Model.measure("aa7ulGyKhIE5").localIdentifier("m_0"),
                        Model.measure("aaEGaXAEgB7U").localIdentifier("m_2"),
                        Model.measure("aaEGaXAEgB7U").localIdentifier("m_5"),
                    ]}
                    segmentBy={Model.attribute("label.menuitem.menucategory").localIdentifier("va_6")}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                />
            </div>
            <div className="Area-chart" style={{ height: 400 }}>
                <h3>Area chart has 3 measures, 1 segmentBy</h3>
                <AreaChart
                    measures={[Model.measure("aaQHncjzfrtR")]}
                    viewBy={Model.attribute("date.abm81lMifn6q")}
                    stackBy={Model.attribute("label.restaurantlocation.locationresort")}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                />
            </div>
            <div style={{ height: 400 }}>
                <h3>Old ComboChart 1</h3>
                <ComboChart
                    columnMeasures={[
                        Model.measure("aa7ulGyKhIE5").localIdentifier("m_0"),
                        Model.measure("aaEGaXAEgB7U").localIdentifier("m_2"),
                        Model.measure("aaEGaXAEgB7U").localIdentifier("m_5"),
                    ]}
                    lineMeasures={[
                        Model.measure("aa5JBkFDa7sJ").localIdentifier("m_1"),
                        Model.measure("aagJGHg1bxap").localIdentifier("m_3"),
                        Model.measure("aaMF7AZGbALB").localIdentifier("m_4"),
                    ]}
                    viewBy={[
                        Model.attribute("label.restaurantlocation.locationstate").localIdentifier("va_0"),
                    ]}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                />
            </div>
            <div style={{ height: 400 }}>
                <h3>Old ComboChart 2</h3>
                <ComboChart
                    columnMeasures={[
                        Model.measure("aa7ulGyKhIE5").localIdentifier("m_0"),
                        Model.measure("aaEGaXAEgB7U").localIdentifier("m_5"),
                        Model.measure("aclF4oDIe5hP").localIdentifier("m_9"),
                    ]}
                    areaMeasures={[
                        Model.measure("aagmnMHvfJNM").localIdentifier("m_8"),
                        Model.measure("agGujhRmcjQD").localIdentifier("m_10"),
                    ]}
                    viewBy={[
                        Model.attribute("label.restaurantlocation.locationresort").localIdentifier("va_7"),
                    ]}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                />
            </div>
            <div style={{ height: 400 }}>
                <h3>New ComboChart 1</h3>
                <ComboChart
                    primaryMeasures={[
                        Model.measure("aa7ulGyKhIE5").localIdentifier("m_0"),
                        Model.measure("aaEGaXAEgB7U").localIdentifier("m_5"),
                        Model.measure("aclF4oDIe5hP").localIdentifier("m_9"),
                    ]}
                    secondaryMeasures={[Model.measure("aagmnMHvfJNM").localIdentifier("m_8")]}
                    viewBy={[
                        Model.attribute("label.restaurantlocation.locationresort").localIdentifier("va_7"),
                    ]}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                    config={{
                        primaryChartType: "column",
                        secondaryChartType: "area",
                    }}
                />
            </div>
            <div style={{ height: 400 }}>
                <h3>New ComboChart 2</h3>
                <ComboChart
                    primaryMeasures={[
                        Model.measure("aa7ulGyKhIE5")
                            .localIdentifier("m_0")
                            .format(
                                "[>=1000000000]$#,,,.0 B;[>=1000000]$#,,.0 M;[>=1000]$#,.0 K;[>=0]$#,##0;[<=-1000000000]-$#,,,.0 B;[<=-1000000]-$#,,.0 M;[<=-1000]-$#,.0 K;[<0]-$#,##0",
                            ),
                        Model.measure("aaEGaXAEgB7U")
                            .localIdentifier("m_5")
                            .format("[<0][red]$#,#.##;[<1000][blue]$#,#.##;[>=1000][green]$#,#.##"),
                        Model.measure("aclF4oDIe5hP")
                            .localIdentifier("m_9")
                            .format(
                                "[>=9][color=2190c0]██████████;[>=8][color=2190c0]█████████░;[>=7][color=2190c0]████████░░;[>=6][color=2190c0]███████░░░;[>=5][color=2190c0]██████░░░░;[>=4][color=2190c0]█████░░░░░;[>=3][color=2190c0]████░░░░░░;[>=2][color=2190c0]███░░░░░░░;[>=1][color=2190c0]██░░░░░░░░;[color=2190c0]█░░░░░░░░░",
                            ),
                    ]}
                    secondaryMeasures={[Model.measure("aagmnMHvfJNM").localIdentifier("m_8")]}
                    viewBy={[
                        Model.attribute("label.restaurantlocation.locationresort").localIdentifier("va_7"),
                    ]}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                    config={{
                        primaryChartType: "line",
                        secondaryChartType: "area",
                        dualAxis: false,
                        colors: ["rgb(195, 49, 73)", "rgb(168, 194, 86)"],
                        colorPalette: [
                            {
                                guid: "01",
                                fill: {
                                    r: 195,
                                    g: 49,
                                    b: 73,
                                },
                            },
                            {
                                guid: "02",
                                fill: {
                                    r: 168,
                                    g: 194,
                                    b: 86,
                                },
                            },
                        ],
                        colorMapping: [
                            {
                                predicate: headerItem => {
                                    return (
                                        headerItem.measureHeaderItem &&
                                        headerItem.measureHeaderItem.localIdentifier === "m_0"
                                    );
                                },
                                color: {
                                    type: "guid",
                                    value: "02",
                                },
                            },
                        ],
                        xaxis: {
                            visible: true,
                            labelsEnabled: true,
                            rotation: "auto",
                        },
                        legend: {
                            enabled: true,
                            position: "top",
                        },
                        dataLabels: {
                            visible: "auto",
                        },
                        grid: {
                            enabled: true,
                        },
                        separators: {
                            thousand: ",",
                            decimal: ".",
                        },
                    }}
                />
            </div>
            <div className="head-line" style={{ height: 400 }}>
                <h3>StackColumn Chart</h3>
                <ColumnChart
                    measures={[Model.measure("aaEGaXAEgB7U").localIdentifier("m_3")]}
                    viewBy={[
                        Model.attribute("label.restaurantlocation.locationstate").localIdentifier("va_1"),
                    ]}
                    stackBy={Model.attribute("label.restaurantlocation.locationname").localIdentifier("va_5")}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                />
            </div>
            <div className="head-line" style={{ height: 400 }}>
                <h3>StackBar Chart</h3>
                <BarChart
                    measures={[Model.measure("aaEGaXAEgB7U").localIdentifier("m_3")]}
                    viewBy={[
                        Model.attribute("label.restaurantlocation.locationname").localIdentifier("va_5"),
                    ]}
                    stackBy={Model.attribute("label.restaurantlocation.locationname").localIdentifier("va_5")}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                />
            </div>
            <div className="head-line" style={{ height: 400 }}>
                <h3>ScatterPlot Chart</h3>
                <ScatterPlot
                    xAxisMeasure={Model.measure("aaEGaXAEgB7U").localIdentifier("m_3")}
                    yAxisMeasure={Model.measure("aaAwXH5UfVBx").localIdentifier("m_5")}
                    attribute={Model.attribute("label.restaurantlocation.locationstate").localIdentifier(
                        "va_8",
                    )}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                />
            </div>
            <div className="head-line" style={{ height: 400 }}>
                <h3>Heatmap Chart</h3>
                <Heatmap
                    measure={Model.measure("aaEGaXAEgB7U").localIdentifier("m_3")}
                    rows={Model.attribute("label.restaurantlocation.locationname").localIdentifier("va_9")}
                    columns={Model.attribute("label.restaurantlocation.locationresort").localIdentifier(
                        "va_10",
                    )}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                />
            </div>
            <div className="head-line" style={{ height: 400 }}>
                <h3>Pivot Table</h3>
                <PivotTable
                    measures={[
                        Model.measure("aaEGaXAEgB7U").localIdentifier("m_3"),
                        Model.measure("acMCYQZbbwJg").localIdentifier("m_6"),
                        Model.measure("aagmnMHvfJNM").localIdentifier("m_7"),
                    ]}
                    rows={[
                        Model.attribute("label.restaurantlocation.locationstate").localIdentifier("va_14"),
                        Model.attribute("label.restaurantlocation.locationname").localIdentifier("va_15"),
                    ]}
                    columns={[Model.attribute("date.aag81lMifn6q").localIdentifier("va_13")]}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                />
            </div>
            <div style={{ height: 400 }}>
                <ComboChart
                    primaryMeasures={[Model.measure("aaEGaXAEgB7U").localIdentifier("m_0")]}
                    secondaryMeasures={[Model.measure("agGujhRmcjQD").localIdentifier("m_1")]}
                    viewBy={[
                        Model.attribute("label.restaurantlocation.locationresort").localIdentifier("va_0"),
                    ]}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                    config={{
                        primaryChartType: "line",
                        secondaryChartType: "column",
                    }}
                />
            </div>
            <div style={{ height: 400 }}>
                <ComboChart
                    primaryMeasures={[
                        Model.measure("acEvQdUMiEAd").localIdentifier("m_3"),
                        Model.measure("acEvQdUMiEAd").localIdentifier("m_4"),
                        Model.measure("aaAHkMhRgp7S").localIdentifier("m_5"),
                    ]}
                    secondaryMeasures={[Model.measure("aclJxvAlhCp0").localIdentifier("m_6")]}
                    projectId="ht3owbpk6h0yfjtkcsgva3osu3z7paol"
                    config={{
                        dualAxis: false,
                    }}
                />
            </div>
        </Page>
    );
};

export default Home;
