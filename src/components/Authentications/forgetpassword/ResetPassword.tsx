// ForgetPassword.tsx

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { X } from "lucide-react";
import {ResetPasswordData} from '../../data/data';
import React,{ useState } from "react";
//import toast from "react-hot-toast";
import toast, { Toaster } from 'react-hot-toast';
import Loading from "../../loaders/Loading";


interface FormValues {
  password: string; // Define type for 'password'
  confirmPassword: string;
}

const ResetPassword: React.FC<{ setShowResetPassword: (show: boolean) => void }> = ({ setShowResetPassword }) => {
const [loading, setLoading] = useState<boolean>(false);



const initialValues: FormValues = {
    password: "", // Set initial value for 'password'
    confirmPassword: "",
};

const validationSchema = Yup.object().shape({
    password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
    
});

  const onSubmit = async (values: FormValues) => {
    console.log('isclicked');
    try {
      setLoading(true);
      console.log("Form submitted with values:", values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Password Reset Successfully!");
      toast.success("Proceed to sign in!");
      setShowResetPassword(false);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <Toaster
  position="top-center"
  reverseOrder={false}
/>
      <div className="w-full max-w-md mx-10 bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2>
            Reset Password
          </h2>

          <button onClick={() => setShowResetPassword(false)}>
            <X size={24} />
          </button>
        </div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            {Object.keys(ResetPasswordData).map((key) => (
              <div key={key} className="w-full flex flex-col gap-1">
                <label htmlFor={key} className="tracking-wider text-base font-sans font-bold">
                  {ResetPasswordData[key as keyof typeof ResetPasswordData].label}
                </label>
                <Field type={ResetPasswordData[key as keyof typeof ResetPasswordData].type} id={key} name={key} className="p-2 rounded-lg border-2" />
                <ErrorMessage name={key} component="div" className="text-red-600" />
              </div>
            ))}
            <button type="submit" disabled={loading} className="w-full grid place-items-center mt-4 bg-blue-600 text-white rounded-md py-2 px-4">
              {loading ? <Loading/> : "Submit"}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
