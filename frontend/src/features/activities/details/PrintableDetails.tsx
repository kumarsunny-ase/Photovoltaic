import { observer } from "mobx-react-lite";
import { Segment, Grid, Icon, Header, Label, Button } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { format } from "date-fns";
import { MutableRefObject } from "react";

interface Props {
  activity: Activity;
}

export default observer(function PrintableDetails({ activity }: Props) {
  return (
    <div id="printableProduct">
      <h1 className="text-center">{activity.productName}</h1>
      <Segment.Group>
        <Segment attached="top">
          <Grid>
            <Grid.Column textAlign="center" width={1}>
              <Label pointing="right">UV Index</Label>
            </Grid.Column>
            <Grid.Column textAlign="center" width={15}>
              <span>{activity.powerPeak}</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid>
            <Grid.Column textAlign="center" width={1}>
              <Label pointing="right">Date</Label>
            </Grid.Column>
            <Grid.Column textAlign="center" width={15}>
              <span>{format(activity.date!, "dd MMM yyyy h:mm aa")}</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid>
            <Grid.Column textAlign="center" width={1}>
              <Label pointing="right">Longitude</Label>
            </Grid.Column>
            <Grid.Column textAlign="center" width={15}>
              <span>{activity.longitude}</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column textAlign="center" width={1}>
              <Label pointing="right">Latitude</Label>
            </Grid.Column>
            <Grid.Column textAlign="center" width={15}>
              <span>{activity.latitude}</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column textAlign="center" width={1}>
              <Label pointing="right">Orientation</Label>
            </Grid.Column>
            <Grid.Column textAlign="center" width={15}>
              <span>{activity.orientation}</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column textAlign="center" width={1}>
              <Label pointing="right">Inclination</Label>
            </Grid.Column>
            <Grid.Column textAlign="center" width={15}>
              <span>{activity.inclination}</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column textAlign="center" width={1}>
              <Label color="grey" pointing="right">
                Total Electricity
              </Label>
            </Grid.Column>
            <Grid.Column textAlign="center" width={15}>
              <span>2 kWh</span>
            </Grid.Column>
          </Grid>
        </Segment>
      </Segment.Group>
    </div>
  );
});
