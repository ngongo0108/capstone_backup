import { ErrorMessage } from "formik"

interface ErrorMessageProps {
    name: string;
}

const ErrorMessageCustom = ({ name } : ErrorMessageProps) => {
    return (
        <ErrorMessage name={name} component="label" className="text-red-500 text-left w-full"/>
    )
}

export default ErrorMessageCustom;