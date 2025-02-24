import { useState } from "react";

export const useImageUpload = () => {
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: "front" | "back") => {
    if (e.target.files && e.target.files[0]) {
      if (type === "front") {
        setFrontImage(e.target.files[0]);
      } else {
        setBackImage(e.target.files[0]);
      }
    }
  };

  return { frontImage, backImage, handleFileChange };
};
