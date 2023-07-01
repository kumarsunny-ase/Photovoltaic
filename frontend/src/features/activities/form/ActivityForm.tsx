import {
  Button,
  Dropdown,
  DropdownProps,
  Header,
  Segment,
} from "semantic-ui-react";
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../app/ stores/store";
import { observer } from "mobx-react-lite";
import { Activity } from "../../../app/models/activity";
import { Link, useNavigate, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { v4 as uuid } from "uuid";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyDateInput from "../../../app/common/form/MyDateInput";

type ActivityOptions = {
  key: string;
  value: string;
  text: string;
};
export default observer(function ActivityMyTextInput() {
  const { activityStore } = useStore();
  const {
    selectedActivity,
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    loadActivities,
    loadingInitial,
    activities,
  } = activityStore;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [activity, setActivity] = useState<Activity>({
    id: "",
    productName: "",
    powerPeak: "",
    orientation: "",
    inclination: 0,
    area: 0,
    longitude: 0,
    latitude: 0,
    date: null,
  });
  const [activityOptions, setActivityOptions] = useState<ActivityOptions[]>([]);

  // const productOptions = [
  //   { key: "First Solar", value: "First Solar", text: "First Solar" },
  //   { key: "Jinko Solar", value: "Jinko Solar", text: "Jinko Solar" },
  //   { key: "Q-Cells", value: "Q-Cells", text: "Q-Cells" },
  // ];

  const validationSchema = Yup.object({
    powerPeak: Yup.number().required("Power Peak value is required").nullable(),
    orientation: Yup.string().required("Oriwntation value is required"),
    inclination: Yup.number()
      .required("Inclination value is required")
      .nullable(),
    area: Yup.number().required("Area is required").nullable(),
    longitude: Yup.number().required("Longitude is required").nullable(),
    latitude: Yup.number().required("Latitude is required").nullable(),
    date: Yup.string().required("dateis a required field").nullable(),
  });

  useEffect(() => {
    if (id) {
      loadActivity(id).then((activity) => setActivity(activity!));
    }

    if (!activities.length) {
      loadActivities();
    } else {
      setActivityOptions(
        activities.map((activity) => ({
          key: activity.id,
          value: JSON.stringify(activity),
          text: activity.productName,
        }))
      );
    }
  }, [id, loadActivity, activities]);

  function handleFormSubmit(values: Activity) {
    // Get product name from state
    values.productName = activity.productName;

    if (!values.id) {
      values.id = uuid();
      createActivity(values).then(() => navigate(`/projects/${values.id}`));
    } else {
      updateActivity(values).then(() => navigate(`/projects/${values.id}`));
    }
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  function onProductSelect(
    _: React.SyntheticEvent<HTMLElement>,
    data: DropdownProps
  ) {
    if (data.value) {
      const options = JSON.parse(data.value.toString());
      setActivity(options);
    }
  }

  if (loadingInitial) return <LoadingComponent content="Loading activity..." />;

  return (
    <Segment clearing>
      <Header content="Product Details" sub color="teal" />
      <Formik
        validationSchema={validationSchema}
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ handleSubmit, isValid, isSubmitting, dirty }) => (
          <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
            {/* <MyTextInput name="productName" placeholder="Product Name" /> */}
            {/* <Dropdown.Item as={Link} to={`/profile/${user?.username}`} text='My Profile' icon='user' /> */}
            <Dropdown
              placeholder="Select Product :"
              fluid
              selection
              options={activityOptions}
              onChange={onProductSelect}
            />
            <MyTextInput
              label="Power peak : "
              name="powerPeak"
              placeholder="Power Peak"
            />
            <MyTextInput label="Area :" name="area" placeholder="Area" />
            {/* <MyTextArea rows={3} placeholder='Details' name='details' />  */}
            <MyDateInput
              placeholderText="Date"
              name="date"
              showTimeSelect
              timeCaption="time"
              dateFormat={"MMMM d, yyyy h:mm aa"}
            />
            <Header content="Direction Details" sub color="teal" />
            <MyTextInput
              label="Orientation"
              placeholder="Orientation"
              name="orientation"
            />
            <MyTextInput
              label="Inclination"
              placeholder="Inclination"
              name="inclination"
            />

            <Header content="Location Details" sub color="teal" />
            <MyTextInput
              label="Longitude"
              placeholder="Longitude"
              name="longitude"
            />
            <MyTextInput
              label="Latitude"
              placeholder="Latitude"
              name="latitude"
            />
            <Button
              disabled={isSubmitting || !dirty || !isValid}
              loading={loading}
              floated="right"
              positive
              type="submit"
              content="Submit"
            />
            <Button
              as={Link}
              to={`/projects`}
              floated="right"
              positive
              type="button"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
});
