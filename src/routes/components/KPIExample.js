import React from "react";
import { Kpi } from "@gooddata/react-components";
import {
    projectId,
    totalSalesIdentifier,
  } from "../utils/fixtures";

const KPIExample = () => {
    return <div className="kpi">
                <style>{`
                    .kpi {
                        margin: 10px 0;
                        font-size: 50px;
                        white-space: nowrap;
                        vertical-align: bottom;
                        text-align: center;
                        min-width: 300px;
                        line-height: 1.2em;
                        font-weight: 700;
                        width: 300px;
                    }
                `}</style>
                <Kpi projectId={projectId} measure={totalSalesIdentifier} />
            </div>
};

export default KPIExample;
