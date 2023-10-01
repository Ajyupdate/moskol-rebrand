// require("dotenv").config();
// const {
//   PutObjectCommand,
//   S3Client,
//   GetObjectCommand,
//   DeleteObjectCommand,
// } = require("@aws-sdk/client-s3");
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const s3Client = new S3Client({
//     region: "us-east-1",
//     credentials: {
//       accessKeyId: "",
//       secretAccessKey: "",
//     },
//   });

//   const getObjectParams = {
//     Bucket: "moskol",
//     Key: "639d10204b29694ee7683203a6d88b01",
//   };
//   const command = new GetObjectCommand(getObjectParams);
//   const url = await getSignedUrl(s3Client, command, { expiresIn: 40000 });

//   return NextResponse.json({ url: url }, { status: 200 });
// }
