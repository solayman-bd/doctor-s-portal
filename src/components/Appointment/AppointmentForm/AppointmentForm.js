import React from "react";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center text-info">{appointmentOn}</h2>
        <p className="text-secondary text-center">
          <small>ON {date.toDateString()}</small>
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Your Name"
              {...register("name", { required: true })}
              name="name"
            ></input>
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div class="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number"
              {...register("phone", { required: true })}
              name="phone"
            ></input>
            {errors.phone && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              {...register("email", { required: true })}
              name="email"
            ></input>
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>
          <div className="mb-3 row">
            <div className="col-4">
              <select
                className="form-control"
                name="gender"
                {...register("gender", { required: true })}
              >
                <option disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors.gender && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("age", { required: true })}
                className="form-control"
                name="age"
                placeholder="Your Age"
                type="number"
              />
              {errors.age && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("weight", { required: true })}
                className="form-control"
                name="weight"
                placeholder="Weight"
                type="number"
              />
              {errors.weight && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>

          <div className="form-group text-right">
            <button type="submit" className="btn btn-info">
              Send
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
