declare const useForm: (state: any, validate: any, callback: any) => {
    handleChange: (e: any) => void;
    handleSubmit: (e: any) => void;
    values: any;
    errors: {};
};
export default useForm;
