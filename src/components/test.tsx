
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from "@mui/material";

interface IFormInput {
    firstName: string;
    lastName: string;
    iceCreamType: { label: string; value: string };
}

const Test = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            iceCreamType: {}
        }
    });

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="firstName"
                control={control}
                render={({ field }) => <Input  {...field} />}
            />

            <input type="submit" />
        </form>
    );
};

export default Test