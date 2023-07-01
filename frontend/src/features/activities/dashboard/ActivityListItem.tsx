import { Link } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { format } from "date-fns";
import { useStore } from "../../../app/ stores/store";
import { SyntheticEvent, useState } from "react";

interface Props {
    activity: Activity
}
export default function ActivityListItem({activity}: Props) {
  const {activityStore} = useStore();
  const {deleteActivity, loading} = activityStore;
  const [target, setTarget] = useState('');
  
  function handleActivityDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  
 }
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src="/assets/user.png" />
              <Item.Content>
                <Item.Header as={Link} to={`/projects/${activity.id}`}>
                  {activity.productName}
                </Item.Header>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />{" "}
            {format(activity.date!, "dd MMMM yyyy h:mm aa")}
            <Icon name="marker" /> {activity.powerPeak}
          </span>
          <span>
            <Icon name="marker" /> {activity.longitude}
            <Icon name="marker" /> {activity.latitude}
          </span>
        </Segment>
        <Segment secondary>
          <span>{activity.orientation}</span>
          <span>{activity.inclination}</span>
        </Segment>
        <Segment clearing>
          <span>{activity.area}</span>
          <Button
            as={Link}
            to={`/projects/${activity.id}`}
            color="teal"
            floated="right"
            content="View"
          />
          <Button
            name={activity.id}
            loading={loading && target === activity.id}
            onClick={(e) => handleActivityDelete(e, activity.id)}
            color="red"
            floated="right"
            content="Delete"
          />
        </Segment>
      </Segment.Group>
    );
}