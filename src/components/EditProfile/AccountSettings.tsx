import InputField from '@/components/FieldCustom/InputField';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const AccountSettings = () => {
    const initialValues = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      };

    const validationSchema = Yup.object({
        currentPassword: Yup.string().required('Mật khẩu hiện tại là bắt buộc'),
        newPassword: Yup.string()
          .min(6, 'Mật khẩu mới phải có ít nhất 6 ký tự')
          .required('Mật khẩu mới là bắt buộc'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('newPassword'), undefined], 'Mật khẩu xác nhận không khớp')
          .required('Xác nhận mật khẩu mới là bắt buộc'),
      });

      const handleSubmit = (values: { currentPassword: string; newPassword: string; confirmPassword: string }) => {
        console.log(values);
      };

    return (
        <section className="flex flex-col ml-5 w-full max-md:ml-0 max-w-full">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}>

                {({ values, handleChange }) => (
                    <Form className="flex flex-col items-center w-full mt-4 px-8 py-10 bg-white rounded-lg max-w-screen-xl">
                        <div className="flex flex-col w-full bg-white rounded-lg border border-black p-6">
                        <h2 className="self-start text-2xl font-semibold text-black mb-6">
                            Thay đổi mật khẩu
                        </h2>

                        {/* Current Password */}
                        <Field
                            name="currentPassword"
                            component={InputField}
                            label="Mật khẩu hiện tại"
                            id="currentPassword"
                            type="password"
                            value={values.currentPassword}
                            onChange={handleChange}
                        />
                        <ErrorMessage name="currentPassword" component="div" className="text-red-500" />

                        {/* New Password */}
                        <Field
                            name="newPassword"
                            component={InputField}
                            label="Mật khẩu mới"
                            id="newPassword"
                            type="password"
                            value={values.newPassword}
                            onChange={handleChange}
                        />
                        <ErrorMessage name="newPassword" component="div" className="text-red-500" />

                        {/* Confirm New Password */}
                        <Field
                            name="confirmPassword"
                            component={InputField}
                            label="Xác nhận mật khẩu mới"
                            id="confirmPassword"
                            type="password"
                            value={values.confirmPassword}
                            onChange={handleChange}
                        />
                        <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />

                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end w-full mt-6">
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                                disabled={!values.currentPassword || !values.newPassword || !values.confirmPassword}
                            >
                                Đổi mật khẩu
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </section>
    );
};

export default AccountSettings;