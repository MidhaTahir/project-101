import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import { TextField, Button, Grid, Container, Typography } from "@mui/material";
import { validateAuthUser } from "../../global/validations";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const EditFormWithFormik = () => {
  const authUser = useSelector((state: RootState) => state.auth.user);
  console.log(authUser);

  const handleSubmit = (values: FormikValues) => {
    
    console.log("Form submitted with values:", values);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Edit User
      </Typography>
      <Formik
        initialValues={authUser as FormikValues}
        validate={validateAuthUser}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Field
                  as={TextField}
                  fullWidth
                  label="First Name"
                  name="firstName"
                />
                <ErrorMessage name="firstName" component="div" />
              </Grid>
              <Grid item xs={6}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Last Name"
                  name="lastName"
                />
                <ErrorMessage name="lastName" component="div" />
              </Grid>
              <Grid item xs={6}>
                <Field
                  as={TextField}
                  fullWidth
                  label="Username"
                  name="username"
                />
                <ErrorMessage name="username" component="div" />
              </Grid>
              <Grid item xs={6}>
                <Field as={TextField} fullWidth label="Email" name="email" />
                <ErrorMessage name="email" component="div" />
              </Grid>
              <Grid item xs={6}>
                <Field as={TextField} fullWidth label="Phone" name="phone" />
                <ErrorMessage name="phone" component="div" />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: 20 }}
            >
              Save Changes
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default EditFormWithFormik;
