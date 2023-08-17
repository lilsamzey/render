const emailModel = require('../models/emailModel');




exports.getEmails = async (req, res) => {
  try {
    const emails = await emailModel.getEmails();
    res.status(200).json(emails);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Failed to get emails', error: error.message });
  }
};





exports.getEmailsByReceiverId = async (req, res) => {
  try {
    const { receiverId } = req.params;
    const emails = await emailModel.getEmailsByReceiverId(receiverId);
    res.status(200).json(emails);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Failed to get emails', error: error.message });
  }
};


exports.getEmailsBySenderId = async (req, res) => {

  try {
    const { senderId } = req.params;
    const emails = await emailModel.getEmailsBySenderId(senderId);
    res.status(200).json(emails);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Failed to get emails', error: error.message });
  }
};




exports.insertEmail = async (req, res) => {
  const { senderId, ReceiverUserName, emailSubject, editorContent } = req.body;

  console.log('control 1')

  try {
    const result = await emailModel.insertEmailData(senderId, ReceiverUserName, emailSubject, editorContent);

    console.log('control 2')
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}


exports.markEmailAsRead = async (req, res) => {
  
  try {
    const { inboxId } = req.params;
    console.log(inboxId)
    await emailModel.markEmailAsRead(inboxId);
    res.status(200).json({ message: 'E-posta okundu olarak işaretlendi.' });
  } catch (error) {
    console.error('E-posta okunmuş olarak işaretlenirken bir hata oluştu:', error);
    res.status(500).json({ message: 'E-posta okunmuş olarak işaretlenirken bir hata oluştu.' });
  }
};

exports.markEmailAsDeleted = async (req, res) => {
  
  try {
    const { inboxId } = req.params;
    console.log(inboxId)
    await emailModel.markEmailAsDeleted(inboxId);
    res.status(200).json({ message: 'E-posta silindi olarak işaretlendi.' });
  } catch (error) {
    console.error('E-posta silindi olarak işaretlenirken bir hata oluştu:', error);
    res.status(500).json({ message: 'E-posta okunmuş olarak işaretlenirken bir hata oluştu.' });
  }
};