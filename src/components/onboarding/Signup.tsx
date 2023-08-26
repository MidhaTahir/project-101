import { FormikHelpers, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import PhoneInput from "react-phone-input-2";
import {
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";

import { OnboardingStyled, PhoneInputStyled } from "./styled";
import { UserRole } from "../../global/types/userRoles";
import { RoutePaths } from "../../global/types/routeTypes";
import axios, { AxiosError } from "axios";
import ENDPOINTS from "../../global/constants/endpoints";
import { validateAuthUser } from "../../global/validations";

const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  phone: "",
  password: "",
  userType: UserRole,
};

export default function Signup() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (
    values: typeof initialValues,
    { resetForm }: FormikHelpers<typeof initialValues>
  ) => {
    console.log(values);
    const dataToSend = {
      firstName: values.firstName,
      lastName: values.lastName,
      username: values.username,
      email: values.email,
      password: values.password,
      phone: values.phone,
      userType: values.userType.toLowerCase(),
    };
    console.log(dataToSend);

    try {
      const response = await axios.post(`${ENDPOINTS.SIGNUP}`, dataToSend);
      console.log(response);
      navigate(RoutePaths.LOGIN);
      resetForm();
    } catch (err) {
      console.log(err);
      const errMessage =
        err instanceof AxiosError && err.response
          ? err.response.data.message
          : "Some error occurred!";

      enqueueSnackbar(errMessage, {
        variant: "error",
      });

      return;
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate: validateAuthUser,
  });

  return (
    <OnboardingStyled>
      <div className="main-form-class">
        <Typography
          fontWeight={500}
          fontSize="22px"
          lineHeight="25px"
          className="green"
          style={{ textAlign: "center" }}
        >
          Create an Account
        </Typography>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          style={{
            marginTop: "40px",
          }}
          defaultValue={UserRole.CUSTOMER}
          name="userType"
          value={formik.values.userType.toString()}
          onChange={(event) => {
            formik.setFieldValue("userType", event.currentTarget.value);
          }}
        >
          <FormControlLabel
            control={<Radio />}
            label="SuperAdmin"
            value={UserRole.SUPERADMIN}
          />
          <FormControlLabel
            control={<Radio />}
            label="Admin"
            value={UserRole.ADMIN}
          />
          <FormControlLabel
            control={<Radio />}
            label="Customer"
            value={UserRole.CUSTOMER}
          />
        </RadioGroup>
        <>
          <Grid item xs={12}>
            <p>
              First Name <span className="green">*</span>
            </p>
            <TextField
              className="round-input"
              fullWidth
              name="firstName"
              id="firstName"
              placeholder="abc"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12}>
            <p>
              Last Name <span className="green">*</span>
            </p>
            <TextField
              className="round-input"
              fullWidth
              name="lastName"
              id="lastName"
              placeholder="abc"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12}>
            <p>
              Username <span className="green">*</span>
            </p>
            <TextField
              className="round-input"
              fullWidth
              name="username"
              id="username"
              placeholder="abc"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Grid>
          <Grid item xs={12}>
            <p>
              Email <span className="green">*</span>
            </p>
            <TextField
              className="round-input"
              fullWidth
              name="email"
              id="email"
              placeholder="abc@gmail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <p>
              Phone Number <span className="green">*</span>
            </p>
            <PhoneInputStyled
              isInvalid={formik.touched.phone && Boolean(formik.errors.phone)}
            >
              <PhoneInput
                specialLabel={""}
                country={"us"}
                // name="phone"
                // id="phone"
                containerClass="phone-container"
                inputClass="input-container"
                dropdownClass="dropdown-container"
                countryCodeEditable={false}
                value={formik.values.phone}
                onChange={(e) => formik.setFieldValue("phone", e)}
                onBlur={formik.handleBlur}
              />
              <div className="error">
                {(formik.touched.phone && formik.errors.phone) || ""}
              </div>
            </PhoneInputStyled>
          </Grid>

          <Grid item xs={12}>
            <p>
              Password <span className="green">*</span>
            </p>
            <TextField
              className="round-input"
              fullWidth
              id="password"
              name="password"
              placeholder="**********"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
        </>

        <Button
          style={{ textTransform: "capitalize" }}
          className="complete-btn"
          variant="contained"
          onClick={() => formik.handleSubmit()}
        >
          Create Account
        </Button>
      </div>
    </OnboardingStyled>
  );
}
