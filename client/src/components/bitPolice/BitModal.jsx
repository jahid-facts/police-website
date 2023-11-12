import React from 'react';
import './BitModal.css';



const BitModal = ({ showModal, closeModal, info }) => {
  const { data, index } = info;
  // console.log("data", data);
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
                    <td>{index + 1}.</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">ঠিকানা</td>
                    <td>{data?.address}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">অবস্থান</td>
                    <td>{data?.current_address}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">পদবী</td>
                    <td>{data?.designation}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">নাম</td>
                    <td>{data?.name}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">মোবাইল</td>
                    <td>{data?.mobile}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">ফোন</td>
                    <td>{data?.phone}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">ফ্যাক্স</td>
                    <td>{data?.fax}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">ই-মেইল</td>
                    <td>{data?.email}</td>
                  </tr>
                </tbody>
              </table>
              {
                data?.location ?
                <iframe src={data?.location} width="100%" height="250" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                :
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29060.170457098207!2d90.76099897001522!3d24.432692478244956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3756918773180af5%3A0x530a9427210ef003!2sKishoreganj!5e0!3m2!1sen!2sbd!4v1693733480325!5m2!1sen!2sbd" width="100%" height="250" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              }
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

export default BitModal;
