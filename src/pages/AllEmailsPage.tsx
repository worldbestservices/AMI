import React, { useEffect, useState } from 'react';
import { EmailType } from '../types/email';
import { getAllEmails } from '../api/emailApi';

const AllEmailsPage: React.FC = () => {
  const [emails, setEmails] = useState<EmailType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const data = await getAllEmails();
        setEmails(data);
      } catch (error) {
        console.error('Failed to fetch emails', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmails();
  }, []);

  const handleSendMail = (email: string) => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 mt-36">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gradient-gold mb-6 text-center">
          📧 Subscribed Emails
        </h1>

        <div className="glass-panel border-glow rounded-xl p-4 sm:p-6 shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm sm:text-base data-terminal rounded-md">
              <thead>
                <tr className="text-gradient-cyber border-b border-yellow-500">
                  <th className="p-2">#</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Subscribed At</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {emails.map((email, idx) => (
                  <tr key={email._id} className="hover:bg-white/5 transition">
                    <td className="p-2">{idx + 1}</td>
                    <td className="p-2">{email.Email}</td>
                    <td className="p-2">
                      {new Date(email.createdAt).toLocaleDateString()}
                    </td>
                    <td className="p-2">
                      <button
                        onClick={() => handleSendMail(email.Email)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-1 px-3 rounded shadow"
                      >
                        Send Mail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {!loading && emails.length === 0 && (
              <div className="text-center text-sm mt-4 text-gray-300">No emails found.</div>
            )}
            {loading && (
              <div className="text-center text-sm mt-4 text-yellow-400">Loading...</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllEmailsPage;
