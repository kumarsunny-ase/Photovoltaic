import { observer } from "mobx-react-lite";
import { Segment, Grid, Icon, Header, Label, Button } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { format } from "date-fns";
import { equal } from "assert";
import { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import PrintableDetails from "./PrintableDetails";

interface Props {
  activity: Activity;
}

export default observer(function ActivityDetailedInfo({ activity }: Props) {
  const productDetailsRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => document.getElementById("printableProduct"),
  });

  function generateReport() {
    console.log(document.getElementById("printableProduct"));
  }

  return (
    <>
      <PrintableDetails activity={activity} />
      <Button onClick={handlePrint} color="teal" floated="right">
        Report Generate
      </Button>
    </>
  );
});
