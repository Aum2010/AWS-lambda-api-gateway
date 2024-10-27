const axios = require('axios');

// URL ของ API Gateway ที่เชื่อมต่อกับ Lambda function
const apiUrl = 'xxxxx';

// ข้อมูลที่ต้องการส่ง
const data = {
  key1: "value5",
  key2: "value6",
  key3: "value7"
};

// ฟังก์ชันที่ส่ง request
const sendData = async () => {
  try {
    const response = await axios.post(apiUrl, data, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error sending data:', error);
  }
};

// เรียกใช้งานฟังก์ชัน
sendData();
