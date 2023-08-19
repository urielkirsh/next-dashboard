import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useDemoData } from "@mui/x-data-grid-generator";

const Data = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 500,
    maxColumns: 15,
  });
  console.log(data)
//   const a = {
//     "field": "test",
//     "headerName": "Test",
//     "width": 110,
//     generateData: () => 'My Test'
//     }
// const rows = [
//         {
//             "id": "66ed5edb-60d9-5a60-9653-167f9affd804",
//             "test": "D-3629",
//         }
//     ]
// const data = { columns: a, rows }
  return (
    <>
      <h1>Data</h1>
      <p>
        The bestest of data available here at your finger tips in table form.
        This could be a whole section of data that is available for users to
        deep dive further into the numbers/stats.
      </p>
      <div style={{ height: "900px", width: "100%" }}>
        <DataGrid
          slots={{
            loadingOverlay: LinearProgress,
          }}
          loading={!data}
          {...data}
        />
      </div>
    </>
  );
};

export default Data;