import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {
  Grid,
  Paper,
  Typography,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import useCollapse from "react-collapsed";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const MedicForm = () => {
  const formik = useFormik({
    initialValues: {
      nombre1: "",
      nombre2: "",
      apellido1: "",
      apellido2: "",
      apellido3: "",
      representante: "",
      telefono: "",
      direccion: "",
      antecedentes_prenatales: "",
      antecedentes_natales: "",
      antecedentes_patologicos: "",
      antecedentes_patologicos_familiares: "",
      complicaciones: "",
      tipo_sangre: "",
      factor_rh: "",
      historial_alimenticio: "",
      alergias: "",
      datetime: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div
      style={{
        marginTop: "5%",
        backgroundColor: "gray",
        height: '100vh',


      }}
    >
      <DatosPersonales formik={formik}></DatosPersonales>
      <AntecedentesPaciente formik={formik}></AntecedentesPaciente>
      <HistorialNutricional formik={formik}></HistorialNutricional>
      <div
        style={{
          marginTop: "1%",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <Button color="primary" variant="contained" type="submit">
          Insertar
        </Button>
      </div>
    </div>
  );
};

const DatosPersonales = ({ formik }) => {
  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps } = useCollapse(config);

  const theme = useTheme();

  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const isXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Paper
          style={{
            padding: 15,
            width: isXS ? "400px" : isSM ? "600px" : isMD ? "800px" : "1000px",
            marginBottom: "2%",
            backgroundColor: "gray",

          }}
        >
          <div {...getToggleProps()}>
            <Typography variant="h4" style={{ marginBottom: "1%" }}>
              Informacion personal
            </Typography>
          </div>
          <div {...getCollapseProps()}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  id="nombre1"
                  name="nombre1"
                  label="Primer Nombre"
                  value={formik.values.nombre1}
                  onChange={formik.handleChange}

                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  // helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  id="nombre2"
                  name="nombre2"
                  label="Segundo Nombre"
                  value={formik.values.nombre2}
                  onChange={formik.handleChange}
                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  // helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  id="apellido1"
                  name="apellido1"
                  label="Primer Apellido"
                  value={formik.values.apellido1}
                  onChange={formik.handleChange}
                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  // helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  id="apellido2"
                  name="apellido2"
                  label="Segundo Apellido"
                  value={formik.values.apellido2}
                  onChange={formik.handleChange}
                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  // helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  id="apellido3"
                  name="apellido3"
                  label="Tercer Apellido"
                  value={formik.values.apellido3}
                  onChange={formik.handleChange}
                  //   error={
                  //     formik.touched.password && Boolean(formik.errors.password)
                  //   }
                  //   helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  id="representante"
                  name="representante"
                  label="Representante"
                  value={formik.values.representante}
                  onChange={formik.handleChange}
                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  //   helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  id="telefono"
                  name="telefono"
                  label="Telefono"
                  type="number"
                  value={formik.values.telefono}
                  onChange={formik.handleChange}
                  //   error={
                  //     formik.touched.password && Boolean(formik.errors.password)
                  //   }
                  //   helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <TextField
                  fullWidth
                  id="direccion"
                  name="direccion"
                  label="Direccion"
                  value={formik.values.direccion}
                  onChange={formik.handleChange}
                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  //   helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
            </Grid>
          </div>
        </Paper>
      </form>
    </div>
  );
};

const AntecedentesPaciente = ({ formik }) => {
  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps } = useCollapse(config);

  const theme = useTheme();

  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const isXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Paper
          style={{
            padding: 15,
            width: isXS ? "400px" : isSM ? "600px" : isMD ? "800px" : "1000px",
            marginBottom: "2%",
            backgroundColor: "gray",


          }}
        >
          <div {...getToggleProps()}>
            <Typography variant="h4" style={{ marginBottom: "1%" }}>
              Antecedentes del paciente
            </Typography>
          </div>
          <div {...getCollapseProps()}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  multiline={true}
                  rows={3}
                  fullWidth
                  id="antecedentes_prenatales"
                  name="antecedentes_prenatales"
                  label="Antecedentes prenatales"
                  value={formik.values.antecedentes_prenatales}
                  onChange={formik.handleChange}
                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  // helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline={true}
                  rows={3}
                  fullWidth
                  id="antecedentes_natales"
                  name="antecedentes_natales"
                  label="Antecedentes natales"
                  value={formik.values.antecedentes_natales}
                  onChange={formik.handleChange}
                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  // helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline={true}
                  rows={3}
                  fullWidth
                  id="antecedentes_patologicos"
                  name="antecedentes_patologicos"
                  label="Antecedentes patologicos"
                  value={formik.values.antecedentes_patologicos}
                  onChange={formik.handleChange}
                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  // helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline={true}
                  rows={3}
                  fullWidth
                  id="antecedentes_patologicos_familiares"
                  name="antecedentes_patologicos_familiares"
                  label="Antecedentes patologicos familiares"
                  value={formik.values.antecedentes_patologicos_familiares}
                  onChange={formik.handleChange}
                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  // helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline={true}
                  rows={3}
                  fullWidth
                  id="complicaciones"
                  name="complicaciones"
                  label="Complicaciones"
                  value={formik.values.complicaciones}
                  onChange={formik.handleChange}
                  //   error={
                  //     formik.touched.password && Boolean(formik.errors.password)
                  //   }
                  //   helperText={formik.touched.password && formik.errors.password}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Tipo de sangre
                  </InputLabel>
                  <Select
                    id="tipo_sangre"
                    name="tipo_sangre"
                    value={formik.values.tipo_sangre}
                    label="Tipo de sangre"
                    onChange={formik.handleChange}
                  >
                    <MenuItem value={"A"}>A</MenuItem>
                    <MenuItem value={"B"}>B</MenuItem>
                    <MenuItem value={"O"}>O</MenuItem>
                    <MenuItem value={"AB"}>A</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Factor RH
                  </InputLabel>
                  <Select
                    id="factor_rh"
                    name="factor_rh"
                    value={formik.values.factor_rh}
                    label="Factor RH"
                    onChange={formik.handleChange}
                  >
                    <MenuItem value={"RH+"}>RH+</MenuItem>
                    <MenuItem value={"RH-"}>RH-</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </form>
    </div>
  );
};
const HistorialNutricional = ({ formik }) => {
  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps } = useCollapse(config);

  const theme = useTheme();

  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const isXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Paper
          style={{
            padding: 15,
            width: isXS ? "400px" : isSM ? "600px" : isMD ? "800px" : "1000px",
            marginBottom: "2%",
            backgroundColor: "gray",

          }}
        >
          <div {...getToggleProps()}>
            <Typography variant="h4" style={{ marginBottom: "1%" }}>
              Historial alimenticio y alegrias
            </Typography>
          </div>
          <div {...getCollapseProps()}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  multiline={true}
                  rows={3}
                  fullWidth
                  id="historial_alimenticio"
                  name="historial_alimenticio"
                  label="Historial alimenticio"
                  value={formik.values.historial_alimenticio}
                  onChange={formik.handleChange}
                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  // helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline={true}
                  rows={3}
                  fullWidth
                  id="alergias"
                  name="alergias"
                  label="Alergias"
                  value={formik.values.alergias}
                  onChange={formik.handleChange}
                  //   error={formik.touched.email && Boolean(formik.errors.email)}
                  // helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
             
            </Grid>
          </div>
        </Paper>
      </form>
    </div>
  );
};

export default MedicForm;
