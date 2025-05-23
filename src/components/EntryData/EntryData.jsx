import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import * as SC from "./EntryDataStyled";

import submitIcon from "../../assets/images/icon-arrow.svg";

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

const EntryData = ({ handleData }) => {
  return (
    <Formik
      initialValues={{ day: "", months: "", year: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleData(values); // This line sends data back to parent
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <SC.DataConCustom>
            <div>
              <label
                style={errors.day && touched.day ? { color: "red" } : {}}
                htmlFor="day"
              >
                day
              </label>
              <SC.FieldCustom
                type="day"
                name="day"
                style={
                  errors.day && touched.day ? { border: "1px solid red" } : {}
                }
                placeholder="DD"
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="day"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label
                style={errors.months && touched.months ? { color: "red" } : {}}
                htmlFor="months"
              >
                month
              </label>
              <SC.FieldCustom
                type="months"
                name="months"
                style={
                  errors.months && touched.months
                    ? { border: "1px solid red" }
                    : {}
                }
                placeholder="MM"
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="months"
                component="div"
                className="error"
              />
            </div>

            <div>
              <label
                style={errors.year && touched.year ? { color: "red" } : {}}
                htmlFor="year"
              >
                year
              </label>
              <SC.FieldCustom
                type="year"
                name="year"
                style={
                  errors.year && touched.year ? { border: "1px solid red" } : {}
                }
                placeholder="YY"
              />
              <ErrorMessage
                style={{ color: "red" }}
                name="year"
                component="div"
                className="error"
              />
            </div>
          </SC.DataConCustom>
          <SC.ButtonConCustom>
            <SC.ButtonCustom type="submit" disabled={isSubmitting}>
              <img src={submitIcon} alt="submit" />
            </SC.ButtonCustom>
          </SC.ButtonConCustom>
        </Form>
      )}
    </Formik>
  );
};

export default EntryData;
