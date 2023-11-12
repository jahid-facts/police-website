import React from 'react';
import './BitModal.css';



const PhoneDirectoryModal = ({ showModal, closeModal, data }) => {
  // CSS class to show/hide the modal
  const modalClassName = showModal ? 'modal show' : 'modal';


  return (
    <div className={modalClassName}>
      {/* Modal content goes here */}
      <div className="modal__dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Details</h5>
            <button type="button" className="close" onClick={closeModal}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body setup-card">
            <div className="scroll-sidebar g-doc-scroll">
              <table className="table table table-bordered border table-hover">
                <tbody>
                  <tr>
                    <td className="fw-bold">বিট নং</td>
                    <td>{data.th_sl_no}.</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">ঠিকানা</td>
                    <td>{data.addess}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">অবস্থান</td>
                    <td>{data.location}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">পদবী</td>
                    <td>{data.designation}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">নাম</td>
                    <td>{data.name}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">মোবাইল</td>
                    <td>{data.mobile}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">ফোন</td>
                    <td>{data.phone}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">ফ্যাক্স</td>
                    <td>{data.fax}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">ই-মেইল</td>
                    <td>{data.email}</td>
                  </tr>
                </tbody>
              </table>

              <iframe src={data.map_link} width="100%" height="250" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          {/* <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>
              Close
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PhoneDirectoryModal;
