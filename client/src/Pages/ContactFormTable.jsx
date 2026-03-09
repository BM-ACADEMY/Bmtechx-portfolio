import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RefreshCw } from 'lucide-react';
import * as bootstrap from 'bootstrap';

const ContactFormTable = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch contact form entries
  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/contact-form/fetch-all-form`);
      setContacts(res.data?.data || []);
      console.log(res.data);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setContacts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Initialize Bootstrap tooltips
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    // Cleanup tooltips on component unmount
    return () => {
      tooltipList.forEach(tooltip => tooltip.dispose());
    };
  }, [contacts]); // Re-run when contacts change to update tooltips

  // Toggle isRead status
  const toggleStatus = async (id, currentStatus) => {
    try {
      const res = await axios.put(`${import.meta.env.VITE_BASE_URL}/contact-form/update-contact-form/${id}`, {
        isRead: !currentStatus,
      });
      console.log(res.data);

      const updatedContact = res.data?.data;
      if (!updatedContact) throw new Error('Invalid response for updated contact');

      setContacts(prev =>
        prev.map(contact =>
          contact._id === updatedContact._id ? updatedContact : contact
        )
      );
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  if (loading) return <div className="text-center mt-4">Loading...</div>;

  return (
    <div className="container flex-column mt-4 vh-100 d-flex justify-content-center align-content-center">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Contact Form Submissions</h2>
        <button
          className="btn text-white d-flex align-items-center"
          onClick={fetchContacts}
          style={{backgroundColor:"#e2ac08"}}
          title="Refresh"
        >
          <RefreshCw size={20} className="me-2" />
          Refresh
        </button>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Description</th>
            <th>Status</th>
            <th>Mark</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No entries found
              </td>
            </tr>
          ) : (
            contacts.map((contact, index) => (
              <tr key={contact._id}>
                <td>{index + 1}</td>
                <td>{contact.username}</td>
                <td>{contact.email}</td>
                <td>{contact.phoneNumber}</td>
                <td>{contact.description}</td>
                <td>
                  <span
                    className={`badge ${
                      contact.isRead ? 'bg-success' : 'bg-warning text-dark'
                    }`}
                  >
                    {contact.isRead ? 'Completed' : 'Pending'}
                  </span>
                </td>
                <td>
                  <button
                    className={`btn btn-sm ${
                      contact.isRead ? 'btn-warning' : 'btn-success'
                    }`}
                    onClick={() => toggleStatus(contact._id, contact.isRead)}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title={`Click to mark as ${contact.isRead ? 'pending' : 'completed'}`}
                  >
                    {contact.isRead ? 'Mark Pending' : 'Mark Completed'}
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ContactFormTable;