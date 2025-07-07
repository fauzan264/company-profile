import * as Yup from "yup";

export const blogValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  // image: Yup.string().required("Image is require"),
  description: Yup.string().required("Description is required"),
});
