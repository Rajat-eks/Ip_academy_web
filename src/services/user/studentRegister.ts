import axiosObject from "../config";

export const registerStudent = async (payload: any) => {
  try {
    const uri: string = "student/register";
    const response = await axiosObject.post(uri, payload);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
