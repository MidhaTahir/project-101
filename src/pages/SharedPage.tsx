import Sidebar from "../components/sidebar/Sidebar";

import BarChartComponent from "../components/charts/BarChartComponent";
import PieChartComponent from "../components/charts/PieChartComponent";
import { Grid } from "@mui/material";
import { CardBar } from "../components/card/CardBar";
import { CardSummary } from "../components/card/CardSummary";

const SharedPage = () => {
  return (
    <div>
      <Sidebar>
        <Grid>
          <Grid container spacing={3}>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <CardSummary
                title="Problems completed today"
                value={5}
                footer={<div> 24% increase from yesterday </div>}
              />
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <CardSummary
                title="Total Work completed"
                value={`98/130`}
                footer={<div> 8% increase from yesterday </div>}
              />
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <CardSummary
                title="Count"
                value={`78%`}
                footer={<div> 5% decrease from last week </div>}
              />
            </Grid>
            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
              <CardSummary
                title="Total Points"
                value={900}
                footer={<div> 20% increase from last week </div>}
              />
            </Grid>
            <Grid item xl={8} lg={8} md={12} sm={12} xs={12}>
              <CardBar title="Activity" chart={<BarChartComponent />} />
            </Grid>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
              <CardBar title="Stat" chart={<PieChartComponent />} />
            </Grid>
          </Grid>
        </Grid>
      </Sidebar>
    </div>
  );
};

export default SharedPage;
