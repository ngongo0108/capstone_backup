import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputField from '@/components/FieldCustom/InputField';
import SelectField from '@/components/FieldCustom/SelectField';
import { ProfileFormValues } from '@/interface/field';
import ErrorMessageCustom from '@/components/ErrorCustom/ErrorMessageCustom';
import ImgAvatar from "@/assets/avatar.png";

const ProfileForm = () => {
  const initialValues : ProfileFormValues = {
    fullName: 'Nguyen Van A',
    phoneNumber: '',
    address: '',
    email: 'nguyenvana@gmail.com',
    cccd: '',
    gender: 'male',
    birthDate: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Họ và tên là bắt buộc'),
    phoneNumber: Yup.string()
      .matches(/^(0[3|5|7|8|9])+([0-9]{8})$/, 'Số điện thoại không hợp lệ')
      .required('Số điện thoại là bắt buộc'),
    email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
    gender: Yup.string().required('Giới tính là bắt buộc'),
    birthDate: Yup.date().required('Ngày sinh là bắt buộc'),
  });

  const handleSave = (values : ProfileFormValues) => {
    console.log(values);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Avatar Section */}
      <div className="flex flex-col items-center mt-8">
        <img
          loading="lazy"
          src={ImgAvatar}
          alt="User profile"
          className="object-cover w-[200px] h-[200px] rounded-full"
        />
        <button
          onClick={() => console.log('Change avatar clicked')}
          className="px-8 py-4 mt-10 text-black text-opacity-50 text-xl bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          Đổi ảnh đại diện
        </button>
      </div>

      {/* Formik Form */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSave}
      >
        {({ values, handleChange }) => (
          <Form className="flex flex-col items-center w-full mt-10 px-8 py-10 bg-white rounded-lg max-w-screen-xl">
            <div className="grid grid-cols-2 gap-6 w-full">
              
              {/* Hồ sơ cá nhân */}
              <div className="flex flex-col col-span-2 bg-white rounded-lg border border-black p-6">
                <h2 className="self-start text-2xl font-semibold text-black mb-6">
                  Hồ sơ cá nhân
                </h2>

                {/* Họ và tên & Số điện thoại in one row */}
                <div className="flex gap-6">
                  <div className="flex flex-col w-1/2">
                    <Field
                      name="fullName"
                      component={InputField}
                      label="Họ và tên"
                      id="fullName"
                      value={values.fullName}
                      onChange={handleChange}
                    />
                    <ErrorMessageCustom name='fullName'/>
                  </div>
                  <div className="flex flex-col w-1/2">
                    <Field
                      name="phoneNumber"
                      component={InputField}
                      label="Số điện thoại"
                      id="phoneNumber"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      placeholder="Số điện thoại"
                    />
                    <ErrorMessageCustom name='phoneNumber'/>
                  </div>
                </div>

                {/* Địa chỉ */}
                <Field
                  name="address"
                  component={InputField}
                  label="Địa chỉ"
                  id="address"
                  value={values.address}
                  onChange={handleChange}
                  placeholder="Địa chỉ"
                />
                <ErrorMessageCustom name='address'/>
              </div>

              {/* Thông tin bảo mật */}
              <div className="flex flex-col col-span-2 bg-white rounded-lg border border-black p-6 mt-6">
                <h2 className="self-start text-2xl font-semibold text-black mb-6">
                  Thông tin bảo mật
                </h2>

                {/* Email */}
                <Field
                  name="email"
                  component={InputField}
                  label="Email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                />
                <ErrorMessageCustom name='email'/>

                {/* CCCD/CMND */}
                <Field
                  name="cccd"
                  component={InputField}
                  label="CCCD/CMND"
                  id="cccd"
                  value={values.cccd}
                  onChange={handleChange}
                  placeholder="CCCD/CMND"
                />
                <ErrorMessageCustom name="cccd" />

                {/* Số tài khoản ngân hàng */}
                <Field
                  name="bankAccountNumber"
                  component={InputField}
                  label="Số tài khoản ngân hàng"
                  id="bankAccountNumber"
                  onChange={handleChange}
                />

                {/* Giới tính & Ngày tháng, năm sinh in one row */}
                <div className="flex gap-6">
                  <div className="flex flex-col w-1/2">
                    <Field
                      name="gender"
                      component={SelectField}
                      label="Giới tính"
                      id="gender"
                      value={values.gender}
                      onChange={handleChange}
                      options={[
                        { value: 'male', label: 'Nam' },
                        { value: 'female', label: 'Nữ' },
                      ]}
                    />
                    <ErrorMessageCustom name="gender" />
                  </div>
                  <div className="flex flex-col w-1/2">
                    <Field
                      name="birthDate"
                      component={InputField}
                      label="Ngày tháng, năm sinh"
                      id="birthDate"
                      type="date"
                      value={values.birthDate}
                      onChange={handleChange}
                    />
                    <ErrorMessageCustom name="birthDate" />
                  </div>
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end w-full mt-6">
              <button
                type="submit"
                className="px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                disabled={!values.fullName || !values.email}
              >
                Lưu thay đổi
              </button>
            </div>
          </Form>
        )}
      </Formik>

    </div>
  );
};

export default ProfileForm;
