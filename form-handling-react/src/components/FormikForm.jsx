// src/components/FormikForm.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        // Simulate API call
        console.log("Registering with Formik:", values);
        alert("Formik: User registered!");
        resetForm();
      }}
    >
      {() => (
        <Form className="space-y-4">
          <div>
            <label>Username:</label>
            <Field name="username" className="border p-2 w-full" />
            <ErrorMessage name="username" component="p" className="text-red-500" />
          </div>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" className="border p-2 w-full" />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" className="border p-2 w-full" />
            <ErrorMessage name="password" component="p" className="text-red-500" />
          </div>
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Register with Formik
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
