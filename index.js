import AWS from 'aws-sdk';

const iotdata = new AWS.IotData({ endpoint: process.env.IOT_ENDPOINT });

export const handler = async (event) => {
  const payload = {
    message: "Hello from Lambda!",
    timestamp: new Date().toISOString(),
    data: event,
  };

  const params = {
    topic: 'iot/topic',
    payload: JSON.stringify(payload),
    qos: 1,
  };

  try {
    await iotdata.publish(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully' }),
    };
  } catch (error) {
    console.error("Error publishing to IoT:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send message' }),
    };
  }
};
