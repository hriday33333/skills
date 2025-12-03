import React, { useState, useEffect } from "react";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Profile = () => {
  const { user, updateUser, setUser } = use(AuthContext);

  const [editMode, setEditMode] = useState(false);

  const [firstName, setFirstName] = useState(user?.displayName?.split(" ")[0] || "");
  const [lastName, setLastName] = useState(user?.displayName?.split(" ")[1] || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [status, setStatus] = useState("Salaried");
  const [position, setPosition] = useState("Sales Assistant");
  const [assignedTo, setAssignedTo] = useState("John Heart");
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
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-500">
          Please log in to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-start bg-gray-100 py-10 px-4">
      <div
        className="bg-white shadow-2xl rounded-xl w-full max-w-3xl p-6"
        data-aos="fade-up"
      >
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Avatar */}
          <div className="flex justify-center mb-6 md:mb-0">
            <div className="w-32 h-32 rounded-full overflow-hidden ring ring-primary ring-offset-2">
              <img src={photo} alt={firstName} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1">
            {!editMode ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <span className="badge badge-success badge-outline">{status}</span>
                  <button
                    onClick={() => setEditMode(true)}
                    className="btn btn-sm btn-neutral"
                  >
                    Edit
                  </button>
                </div>

                <h2 className="text-xl font-semibold">
                  {firstName} {lastName}
                </h2>
                <p className="text-gray-500 mb-2">{position}</p>
                <p className="text-gray-500 mb-2">Assigned to: {assignedTo}</p>
                <p className="text-gray-500 mb-2">Company: {company}</p>

                <hr className="my-4" />
                <h3 className="font-semibold mb-2">Contacts</h3>
                <p className="text-gray-500">Address: {address}</p>
                <p className="text-gray-500">
                  {city}, {state}, {zip}
                </p>
                <p className="text-gray-500">Phone: {phone}</p>
                <p className="text-gray-500">Email: {email}</p>
              </>
            ) : (
              <form className="space-y-3" onSubmit={handleUpdate}>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    required
                  />
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  placeholder="Photo URL"
                  required
                />
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="Position"
                  required
                />
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={assignedTo}
                  onChange={(e) => setAssignedTo(e.target.value)}
                  placeholder="Assigned To"
                  required
                />
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company"
                  required
                />
                <hr className="my-2" />
                <h3 className="font-semibold">Contacts</h3>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  required
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="City"
                    required
                  />
                  <select
                    className="input input-bordered w-24"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  >
                    <option value="CA">CA</option>
                    <option value="NY">NY</option>
                    <option value="TX">TX</option>
                  </select>
                  <input
                    type="text"
                    className="input input-bordered w-32"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="Zip Code"
                    required
                  />
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  required
                />
                <input
                  type="email"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                />
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
      </div>
    </div>
  );
};

export default Profile;
