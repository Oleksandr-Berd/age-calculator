import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import * as SC from "./EntryDataStyled";

import submitIcon from "../../assets/images/icon-arrow.svg";
import Line from "../../utils/line";

const today = new Date();

const validationSchema = Yup.object()
  .shape({
    day: Yup.number()
      .typeError("Day must be a number")
      .required("Day is required")
      .min(1, "Day must be at least 1")
      .max(31, "There is no such day"),

    months: Yup.number()
      .typeError("Month must be a number")
      .required("Month is required")
      .min(1, "Month must be at least 1")
      .max(12, "There is no such month"),

    year: Yup.number()
      .typeError("Year must be a number")
      .required("Year is required")
      .min(1, "Year must be at least 1"),
  })
  .test(
    "is-valid-past-date",
    "The date must be valid and earlier than today",
    function (values) {
      const { day, months, year } = values;
      if (!day || !months || !year) return false;

      const inputDate = new Date(year, months - 1, day);

      if (isNaN(inputDate.getTime())) return false;

      // Normalize times for accurate date-only comparison
      inputDate.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      return inputDate < today;
    }
  );

const EntryData = () => {
  return (
    <Formik
      initialValues={{ day: "", months: "", year: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <SC.DataConCustom>
            <div>
              <label htmlFor="day">day</label>
              <SC.FieldCustom type="day" name="day" />
              <ErrorMessage style={{ color: 'red' }} name="day" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="months">month</label>
              <SC.FieldCustom type="months" name="month" />
              <ErrorMessage style={{ color: 'red' }} name="months" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="year">year</label>
              <SC.FieldCustom type="year" name="year" />
              <ErrorMessage style={{ color: 'red' }} name="year" component="div" className="error" />
            </div>
          </SC.DataConCustom>
          <div>
            <SC.ButtonCustom type="submit" disabled={isSubmitting}>
              <img src={submitIcon} alt="submit" />
            </SC.ButtonCustom>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EntryData;
