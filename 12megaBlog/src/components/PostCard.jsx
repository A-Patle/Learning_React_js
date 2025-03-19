import React, { useState, useEffect } from "react";
import appWriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (!featuredImage) return;

    appWriteService
      .filePreview(featuredImage)
      .then(setImageSrc)
      .catch((error) => console.error("❌ Error fetching image:", error));
  }, [featuredImage]);

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          {imageSrc ? (
            <img src={imageSrc || null} alt={title} className="rounded-xl" />
          ) : (
            <p>Loading image...</p>
          )}
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
