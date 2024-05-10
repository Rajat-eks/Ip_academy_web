import axiosObject from "../config";

export const submitTest = async (payload: any) => {
  try {
    const uri: string = "exam/submit";
    const response = await axiosObject.post(uri, payload);
    if (response.status === 201) {
      return response.data;
    }
  } catch (error) {
    return error;
  }
};
