import { useFormik } from "formik";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { OnboardingStyled } from "./styled";
import { RoutePaths } from "../../global/types/routeTypes";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";
import ENDPOINTS from "../../global/constants/endpoints";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUserData, setUserType } from "../../redux/authSlice";

const initialValues = {
  email: "",
  password: "",
};

const validate = (values) => {
  type Error = {
    email?: string;
    password?: string;
  };
  const errors: Error = {};
  if (!values.password) {
    errors.password = "⋆Required";
  }
  if (!values.email) {
    errors.email = "⋆Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email format";
  }
  return errors;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = async (values, { resetForm }) => {
    const dataToSend = {
      username: values.email,
      password: values.password,
    };
    console.log(dataToSend);

    try {
      const response = await axios.post(`${ENDPOINTS.LOGIN}`, dataToSend);
      console.log(response);
      dispatch(setToken(response.data.payload.token));
      dispatch(setUserType(response.data.payload.user.userType));
      console.log(response.data.payload.user);
      dispatch(setUserData(response.data.payload.user));
      resetForm();
      navigate(RoutePaths.DETAILS);
    } catch (err) {
      console.log(err);
      enqueueSnackbar(err?.response?.data?.message || "Some error occurred!", {
        variant: "error",
      });
      return;
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
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
          Login to your Account
        </Typography>
        <>
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
          Login
        </Button>
      </div>
    </OnboardingStyled>
  );
};

export default Login;
