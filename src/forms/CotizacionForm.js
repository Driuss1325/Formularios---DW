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
  FormHelperText,
} from "@mui/material";
import useCollapse from "react-collapsed";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import DateTimePicker from "../components/DateTimePicker";
import SelectField from "../components/SelectField";
import { Cars } from "../constants/cars";
import { useState } from "react";
import { useEffect } from "react";
const validationSchema = yup.object({
  nombre1: yup
    .string("Ingrese su primer nombre")
    .required("Primer nombre es requerido"),
  nombre2: yup
    .string("Ingrese su segundo nombre")
    .required("Segundo nombre es requerido"),
  apellido1: yup
    .string("Ingrese su primer apellido")
    .required("Primer apellido es requerido"),
  apellido2: yup
    .string("Ingrese su segundo apellido")
    .required("Segundo apellido es requerido"),
  dpi: yup
    .string("Ingrese un número de DPI valido")
    .min(13, "Número de DPI debe tener al menos 13 dígitos")
    .required("Se requiere registrar un numero de DPI"),
  telefono: yup
    .string("Ingrese un número de teléfono válido")
    .min(8, "Número de teléfono debe tener al menos 8 dígitos")
    .required("Teléfono es requerido"),
  direccion: yup
    .string("Ingrese su dirección")
    .required("Dirección es requerida"),
  marca: yup.string("Ingrese una marca").required("Marca es requerida"),
  modelo: yup.string("Ingrese un modelo").required("Modelo es requerido"),
  ano: yup.string("Ingrese un año").required("Año es requerido"),
  cilindrada: yup
    .string("Ingrese una cilindrada")
    .required("Cilindrada es requerida"),
  cantidad_puertas: yup
    .string("Ingrese una cantidad de puertas")
    .required("Cantidad de puertas es requerida"),
  uso: yup.string("Ingrese un uso").required("Uso es requerido"),
});

const CotizacionForm = () => {
  const formik = useFormik({
    initialValues: {
      nombre1: "",
      nombre2: "",
      apellido1: "",
      apellido2: "",
      apellido3: "",
      dpi: "",
      telefono: "",
      direccion: "",
      marca: "",
      modelo: "",
      ano: "",
      cilindrada: "",
      cantidad_puertas: "",
      uso: "",
      observaciones: "",
      datetime: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div
      style={{
        marginTop: "1%",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <DatosPersonales formik={formik}></DatosPersonales>
        <DatosVehiculo formik={formik}></DatosVehiculo>
        <div
          style={{
            marginTop: "1%",
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: "row",
            marginBottom: "1%",
          }}
        >
          <Button color="primary" variant="contained" type="submit">
            Insertar
          </Button>
        </div>
      </form>
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
      <Paper
        style={{
          padding: 15,
          width: isXS ? "400px" : isSM ? "600px" : isMD ? "800px" : "1000px",
          marginBottom: "2%",
          backgroundColor: "#EAEAEA",
        }}
      >
        <div {...getToggleProps()}>
          <Typography variant="h4" style={{ marginBottom: "1%" }}>
            Datos del cliente
          </Typography>
        </div>
        <div {...getCollapseProps()}>
          <Grid container spacing={2} style={{ minHeight: "290px" }}>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                id="nombre1"
                name="nombre1"
                label="Primer Nombre"
                value={formik.values.nombre1}
                onChange={formik.handleChange}
                error={formik.touched.nombre1 && Boolean(formik.errors.nombre1)}
                helperText={formik.touched.nombre1 && formik.errors.nombre1}
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
                error={formik.touched.nombre2 && Boolean(formik.errors.nombre2)}
                helperText={formik.touched.nombre2 && formik.errors.nombre2}
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
                error={
                  formik.touched.apellido1 && Boolean(formik.errors.apellido1)
                }
                helperText={formik.touched.apellido1 && formik.errors.apellido1}
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
                error={
                  formik.touched.apellido2 && Boolean(formik.errors.apellido2)
                }
                helperText={formik.touched.apellido2 && formik.errors.apellido2}
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
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                fullWidth
                id="dpi"
                name="dpi"
                label="DPI"
                value={formik.values.dpi}
                onChange={formik.handleChange}
                error={formik.touched.dpi && Boolean(formik.errors.dpi)}
                helperText={formik.touched.dpi && formik.errors.dpi}
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
                error={
                  formik.touched.telefono && Boolean(formik.errors.telefono)
                }
                helperText={formik.touched.telefono && formik.errors.telefono}
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
                error={
                  formik.touched.direccion && Boolean(formik.errors.direccion)
                }
                helperText={formik.touched.direccion && formik.errors.direccion}
              />
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};

const DatosVehiculo = ({ formik }) => {
  const [marca, setMarca] = useState([]);
  const [modelo, setModelo] = useState([]);

  const config = {
    defaultExpanded: true,
  };
  const { getCollapseProps, getToggleProps } = useCollapse(config);

  const theme = useTheme();

  const isMD = useMediaQuery(theme.breakpoints.down("md"));
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  const isXS = useMediaQuery(theme.breakpoints.down("xs"));

  useEffect(() => {
    let data = [];
    for (let i = 0; i < Cars.length; i++) {
      data.push(Cars[i].brand);
    }
    setMarca(data);
  }, []);

  const handleSelectChange = async (e) => {
    let data = { [e.target.name]: e.target.value };
    formik.setValues({ ...formik.initialValues, ...data });
    let modelo = [];

    for (let i = 0; i < Cars.length; i++) {
      if (Cars[i].brand === data.marca) {
        modelo.push(...Cars[i].models);
      }
    }
    setModelo(modelo);
  };

  return (
    <div>
      <Paper
        style={{
          padding: 15,
          width: isXS ? "400px" : isSM ? "600px" : isMD ? "800px" : "1000px",
          marginBottom: "2%",
          backgroundColor: "#EAEAEA",
        }}
      >
        <div {...getToggleProps()}>
          <Typography variant="h4" style={{ marginBottom: "1%" }}>
            Datos del vehiculo
          </Typography>
        </div>
        <div {...getCollapseProps()}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <SelectField
                id="marca"
                name="marca"
                onChange={handleSelectChange}
                variant="outlined"
                label="Marca"
                opciones={marca}
                value={formik.values.marca}
                error={formik.touched.marca && Boolean(formik.errors.marca)}
                helperText={formik.touched.marca && formik.errors.marca}
              ></SelectField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectField
                id="modelo"
                name="modelo"
                onChange={formik.handleChange}
                variant="outlined"
                label="Modelo"
                opciones={modelo}
                value={formik.values.modelo}
                error={formik.touched.modelo && Boolean(formik.errors.modelo)}
                helperText={formik.touched.modelo && formik.errors.modelo}
              ></SelectField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <DateTimePicker
                id="ano"
                name="ano"
                onChange={formik.handleChange}
                label="Año"
                value={formik.values.ano}
                error={formik.touched.ano && Boolean(formik.errors.ano)}
                helperText={formik.touched.ano && formik.errors.ano}
              ></DateTimePicker>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl
                fullWidth
                error={formik.touched.uso && Boolean(formik.errors.uso)}
              >
                <InputLabel id="demo-simple-select-label">Uso</InputLabel>
                <Select
                  id="uso"
                  name="uso"
                  value={formik.values.uso}
                  label="Uso"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={"Particular"}>Particular</MenuItem>
                  <MenuItem value={"Trabajo"}>Trabajo</MenuItem>
                  <MenuItem value={"Particular y trabajo"}>
                    Particular y trabajo
                  </MenuItem>
                </Select>
                <FormHelperText>
                  {formik.touched.uso && formik.errors.uso}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="caracteristicas"
                name="caracteristicas"
                label="Caracteristidas del vehículo"
                multiline={true}
                rows={3}
                value={formik.values.nombre1}
                onChange={formik.handleChange}
                error={formik.touched.nombre1 && Boolean(formik.errors.nombre1)}
                helperText={formik.touched.nombre1 && formik.errors.nombre1}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="observaciones"
                name="observaciones"
                label="Observaciones"
                multiline={true}
                rows={3}
                value={formik.values.observaciones}
                onChange={formik.handleChange}
                error={
                  formik.touched.observaciones &&
                  Boolean(formik.errors.observaciones)
                }
                helperText={
                  formik.touched.observaciones && formik.errors.observaciones
                }
              />
            </Grid>
          </Grid>
        </div>
      </Paper>
    </div>
  );
};
export default CotizacionForm;
