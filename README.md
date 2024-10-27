# AWS-lambda-api-gateway

## Node project local 

package.json

{
  "type": "module"
}

## deploy on aws lampda

หากต้องการ deploy Lambda function ผ่าน AWS Management Console โดยใช้ไฟล์ .zip ที่คุณเตรียมไว้ สามารถทำตามขั้นตอนด้านล่างนี้:

หากมี Lambda function อยู่แล้วให้คลิกที่ชื่อฟังก์ชันนั้นจากรายการ
อัปโหลดโค้ดจากไฟล์ .zip:

ในหน้าการตั้งค่าของฟังก์ชัน ให้เลื่อนลงไปที่ส่วน Code
คลิกที่ปุ่ม Upload from และเลือก .zip file
เลือกไฟล์ .zip ของโค้ด Lambda function จากเครื่องของคุณ
กำหนดค่า Handler:

ตรวจสอบให้แน่ใจว่าชื่อ Handler ถูกตั้งค่าให้ถูกต้องตาม entry point ของโค้ด เช่น index.handler (ซึ่งหมายถึงฟังก์ชัน handler ในไฟล์ index.js)
บันทึกและ Deploy:

เมื่ออัปโหลดไฟล์ .zip แล้ว ให้คลิก Deploy หรือ Save เพื่อบันทึกและอัปเดตโค้ดของ Lambda function
ทดสอบ Lambda Function (ถ้าต้องการ):

คลิกปุ่ม Test เพื่อสร้างอีเวนต์สำหรับทดสอบฟังก์ชัน
กำหนดค่าข้อมูลทดสอบที่ต้องการใน JSON และคลิก Test อีกครั้งเพื่อทดสอบการทำงาน
เมื่อการ Deploy เสร็จสิ้น คุณสามารถทดสอบหรือเรียกใช้ Lambda function ผ่าน AWS Console ได้เลย

ตรวจสอบโครงสร้างไฟล์ .zip:
my-lambda-function.zip
└── my-lambda-function/
    └── index.js

lambda-policy 
IAM -> Policies -> Create policies -> Select a service -> Service ( Select iot )
-> Actions allowed ( Select Publish ) -> Resources ( Add ARNs )

Resource region

AWS Region ที่คุณใช้งาน AWS IoT Core ของคุณ โดย AWS Regions คือพื้นที่ที่ AWS ให้บริการ ซึ่งแต่ละ Region จะมีชื่อเฉพาะ เช่น:

US East (N. Virginia): us-east-1
US West (Oregon): us-west-2
Asia Pacific (Bangkok): ap-southeast-1
Asia Pacific (Tokyo): ap-northeast-1
Europe (Frankfurt): eu-central-1

Resource topic name ( setting topic on going )

Add policies lambda-xxx function 
Add Permission -> attach pplicies