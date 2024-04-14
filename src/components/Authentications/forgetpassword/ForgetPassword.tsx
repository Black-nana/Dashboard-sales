// ForgetPassword.tsx

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { X } from "lucide-react";
import { ForgetPasswordData } from "../../data/data";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loading from "../../loaders/Loading";


interface FormValues {
  email: string;
}

const ForgetPassword: React.FC<{ setShowForgetPassword: (show: boolean) => void, setShowResetPassword:(show:boolean)=> void }> = ({ setShowForgetPassword, setShowResetPassword }) => {
  const [loading, setLoading] = useState<boolean>(false);
 

  const initialValues: FormValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      console.log("Form submitted with values:", values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success("Reset password link sent successfully!");
      setShowResetPassword(true); // Show the ResetPassword component after successful submission
      setShowForgetPassword(false); // Hide the ForgetPassword component after successful submission
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <Toaster position="top-center" reverseOrder={false} />
     
      <div className="w-full max-w-md mx-10 bg-white rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2>Forget Password</h2>
          <button onClick={() => setShowForgetPassword(false)}>
            <X size={24} />
          </button>
        </div>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form>
            {Object.keys(ForgetPasswordData).map((key) => (
              <div key={key} className="w-full flex flex-col gap-1">
                <label htmlFor={key} className="tracking-wider text-base font-sans font-bold">
                  {ForgetPasswordData[key as keyof typeof ForgetPasswordData].label}
                </label>
                <Field type={ForgetPasswordData[key as keyof typeof ForgetPasswordData].type} id={key} name={key} className="p-2 rounded-lg border-2" />
                <ErrorMessage name={key} component="div" className="text-red-600" />
              </div>
            ))}
            <button type="submit" disabled={loading} className="mt-4 bg-blue-600 text-white rounded-md py-2 px-4">
              {loading ? <Loading /> : "Submit"}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ForgetPassword;
