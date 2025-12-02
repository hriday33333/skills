import React, { useState, useEffect } from "react";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  const { user, updateUser, setUser } = use(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);


  const handleUpdate = (e) => {
    e.preventDefault();

    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
        setEditMode(false);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Update failed. Try again.");
      });
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-500">
          Please log in to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen rounded-t-4xl  bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-600
">
      <div
        className="card w-96 bg-base-100 border-2 p-6 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-2xl"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Avatar */}
        <div className="avatar flex justify-center mb-4" data-aos="zoom-in">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={user.photoURL} alt={user.displayName} />
          </div>
        </div>

        {!editMode ? (
          <>
            <h2
              className="text-2xl font-semibold"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              {user.displayName}
            </h2>
            <p
              className="text-gray-600 mb-3"
              data-aos="fade-down"
              data-aos-delay="250"
            >
              {user.email}
            </p>
            <button
              onClick={() => setEditMode(true)}
              className="btn btn-neutral btn-sm"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Update Profile
            </button>
          </>
        ) : (
          <form
            onSubmit={handleUpdate}
            className="space-y-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div>
              <input
                type="text"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter new name"
                required
              />
            </div>
            <div>
              <input
                type="text"
                className="input input-bordered w-full"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="Enter new photo URL"
                required
              />
            </div>
            <div className="flex justify-between">
              <button type="submit" className="btn btn-neutral btn-sm">
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="btn btn-outline btn-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
