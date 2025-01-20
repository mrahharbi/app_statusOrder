import React, { useState } from 'react';
    import { FaShareAlt, FaEdit, FaTrash } from 'react-icons/fa';
    import './AdminPanel.css';

    const AdminPanel = () => {
      const [orders, setOrders] = useState([
        { id: 1, customer: 'John Doe', status: 'Preparing' },
        { id: 2, customer: 'Jane Smith', status: 'Ready' }
      ]);
      const [shareLink, setShareLink] = useState('');
      const [showCopied, setShowCopied] = useState(false);

      const generateShareLink = async (orderId) => {
        const baseUrl = window.location.origin;
        const link = `${baseUrl}/order/${orderId}`;
        setShareLink(link);
        
        try {
          // Try using Clipboard API first
          await navigator.clipboard.writeText(link);
          setShowCopied(true);
          setTimeout(() => setShowCopied(false), 2000);
        } catch (err) {
          // Fallback to execCommand if Clipboard API fails
          const textArea = document.createElement('textarea');
          textArea.value = link;
          document.body.appendChild(textArea);
          textArea.select();
          try {
            document.execCommand('copy');
            setShowCopied(true);
            setTimeout(() => setShowCopied(false), 2000);
          } catch (err) {
            console.error('Failed to copy text: ', err);
          }
          document.body.removeChild(textArea);
        }
      };

      return (
        <div className="admin-panel-container">
          <h1 className="admin-title">Order Control Panel</h1>
          
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="order-row">
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>{order.status}</td>
                  <td className="actions-cell">
                    <div className="button-group">
                      <button
                        className="action-button share-button"
                        onClick={() => generateShareLink(order.id)}
                      >
                        <FaShareAlt /> Share
                      </button>
                      {/* Other buttons remain the same */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {shareLink && (
            <div className="share-link-container">
              <p>Share this link with customer:</p>
              <input
                type="text"
                value={shareLink}
                readOnly
                className="share-link-input"
              />
              {showCopied && (
                <p className="copy-confirmation">Link copied to clipboard!</p>
              )}
            </div>
          )}
        </div>
      );
    };

    export default AdminPanel;
