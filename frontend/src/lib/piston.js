// frontend/src/lib/piston.js
import axiosInstance from "./axios.js";

export async function executeCode(language, code) {
  try {
    console.log("Sending code to our own Backend Proxy...");
    // We send it to our own backend, bypassing CORS!
    const response = await axiosInstance.post("/code/execute", {
      language,
      code
    });
    
    return response.data;
  } catch (error) {
    console.error("Frontend Proxy Error:", error);
    return { success: false, error: "Failed to communicate with backend" };
  }
}