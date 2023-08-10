module.exports.upload = async (event) => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/pdf',
    },
    body: event.body, // Simply return the PDF that was uploaded
    isBase64Encoded: true,
  };
};
