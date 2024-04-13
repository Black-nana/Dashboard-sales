import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import logo from '../../../assets/dummy logo.png';
import image from '../../../assets/singup.jpeg';
import { SignupData } from '../../data/data';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../../loaders/Loading';

interface FormValues {
  [key: string]: string;
}

const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
    username: Yup.string().required('Username is required'),
    fullname: Yup.string().required('Fullname is required'),
    phone: Yup.string().required('Phone number is required'),
    // Add more fields as needed
});


const SignUp: React.FC = () => {
    const navigate = useNavigate();
  const initialValues: FormValues = Object.keys(SignupData).reduce(
    (acc, key) => ({
      ...acc,
      [key]: '',
    }),
    {}
  );

  const handleSubmit = (values: FormValues, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    console.log(values);
    setTimeout(() => {
      toast.success('🦄 Registration Successful!', {
        icon: '👏',
      });
      setSubmitting(false);
      navigate('/');
    }, 1000); // Simulating asynchronous submission
  };

  return (
    <div className="w-full h-screen grid md:grid-cols-2 lg:grid-cols-[2fr,3fr]">
    <Toaster />
      <div className="w-full bg-slate-50 grid items-center p-8">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }: { isSubmitting: boolean }) => (
            <Form className="w-full bg-white flex flex-col gap-4 justify-center border-2 p-8 rounded-lg">
              <div className="w-full flex gap-10 justify-start items-center">
                <div>
                  <img src={logo} alt="logo" />
                </div>
                <span className="text-4xl font-medium ">
                  <h1 className="mb-2">Sign Up</h1>
                  <div className="w-5/6 bg-blue-600 h-1 rounded-lg"></div>
                </span>
              </div>
              {Object.keys(SignupData).map((key) => (
                <div key={key} className="w-full flex flex-col gap-1">
                  <label
                    htmlFor={key}
                    className="tracking-wider text-base  font-sans font-bold"
                  >
                    {SignupData[key as keyof typeof SignupData].label}
                  </label>
                  <Field
                    type={SignupData[key as keyof typeof SignupData].type}
                    id={key}
                    name={key}
                    className="p-2 rounded-lg border-2"
                  />
                  <ErrorMessage
                    name={key}
                    component="div"
                    className="text-red-600"
                  />
                </div>
              ))}
              
              <button
                className="btn w-full bg-blue-600 text-white text-xl hover:bg-blue-500"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? <Loading/> : 'Sign Up'}
              </button>
              <p>
                I already have an account?{' '}
                <Link to={'/'} className="text-blue-600">
                  Sign In
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
      <div className="w-full hidden md:grid lg:grid place-items-center ">
        <div>
          <img src={image} alt="sing image" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
