import * as yup from "yup";
import validator from "validator";
export const validationSchema = yup.object().shape({
    name: yup.string().required().min(2).max(60),
    email: yup.string()
        .email()
        .required()
        .test((value) => validator.isEmail(value)),
    phone: yup.string()
        .required()
        .test((value) => validator.isMobilePhone(value, 'uk-UA')),
    position_id: yup.number()
        .required()
        .notOneOf([0, undefined], "Position is required"),
    photo: yup
        .mixed()
        .required()
        .test({
            message: 'Please upload a JPEG image with resolution at least 70x70px and size not exceeding 5MB',
            test: (file: any) => {
                if (!file) return false;

                // Check file type
                const isValidType = file.type === 'image/jpeg' || 'image/jpg';
                if (!isValidType) return false;

                // Check file size
                const isValidSize = file.size <= 5 * 1024 * 1024;
                if (!isValidSize) return false;

                // Additional check for resolution (optional)
                return new Promise((resolve, reject) => {
                    const image = new Image();
                    image.onload = () => {
                        const { width, height } = image;
                        if (width < 70 || height < 70) {
                            reject('Image resolution should be at least 70x70px');
                        } else {
                            resolve(true);
                        }
                    };
                    image.onerror = () => reject('Failed to load image');
                    image.src = URL.createObjectURL(file);
                });
            },
        }),
});
