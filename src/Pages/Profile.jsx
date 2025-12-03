import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);

  const [firstName, setFirstName] = useState(user?.displayName?.split(" ")[0] || "");
  const [lastName, setLastName] = useState(user?.displayName?.split(" ")[1] || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [position, setPosition] = useState("Sales Assistant");
  const [company, setCompany] = useState("ElectrixMax");
  const [address, setAddress] = useState("645 Prospect Crescent");
  const [city, setCity] = useState("Pasadena");
  const [state, setState] = useState("CA");
  const [zip, setZip] = useState("91103");
  const [phone, setPhone] = useState("(626) 555-7292");
  const [email, setEmail] = useState(user?.email || "");

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 50 });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`;
    updateUser({ displayName: fullName, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: fullName, photoURL: photo, email });
        toast.success("Profile updated successfully!");
        setEditMode(false);
      })
      .catch(() => toast.error("Update failed. Try again."));
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-500">
          Please log in to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div
        className="bg-white shadow-2xl rounded-2xl w-full max-w-4xl p-6 md:p-10"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row gap-8">
          {/* Avatar Section */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring ring-primary ring-offset-4">
              <img
                src={photo}
                alt={firstName}
                className="w-full h-full object-cover"
              />
              {editMode && (
                <span className="absolute bottom-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-full cursor-pointer">
                  Edit
                </span>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="flex-1">
            {!editMode ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="badge badge-success badge-outline">Active</span>
                  <button
                    onClick={() => setEditMode(true)}
                    className="btn btn-sm btn-primary"
                  >
                    Edit Profile
                  </button>
                </div>

                <h2 className="text-2xl font-bold">{firstName} {lastName}</h2>
                <p className="text-gray-500">{position}</p>
                <p className="text-gray-500">Company: {company}</p>

                <hr className="my-4" />
                <h3 className="text-lg font-semibold">Contact Info</h3>
                <p className="text-gray-600">{address}</p>
                <p className="text-gray-600">{city}, {state}, {zip}</p>
                <p className="text-gray-600">Phone: {phone}</p>
                <p className="text-gray-600">Email: {email}</p>
              </div>
            ) : (
              <form onSubmit={handleUpdate} className="space-y-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="input input-bordered w-full"
                    required
                  />
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <input
                  type="text"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="Position"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company"
                  className="input input-bordered w-full"
                  required
                />

                <hr className="my-2" />
                <h3 className="font-semibold">Contact Info</h3>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="input input-bordered w-full"
                  required
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    className="input input-bordered w-full"
                    required
                  />
                  <select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="input input-bordered w-24"
                  >
                    <option value="CA">CA</option>
                    <option value="NY">NY</option>
                    <option value="TX">TX</option>
                  </select>
                  <input
                    type="text"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="Zip"
                    className="input input-bordered w-32"
                    required
                  />
                </div>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className="input input-bordered w-full"
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="input input-bordered w-full"
                  required
                />

                <div className="flex justify-end gap-2">
                  <button type="submit" className="btn btn-primary btn-sm">
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
      </div>
    </div>
  );
};

export default Profile;
