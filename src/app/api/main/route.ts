// import { NextRequest, NextResponse } from "next/server";
// import path from "path";
// import { writeFile } from "fs/promises";

// export async function POST(req: NextRequest, res: NextResponse) {
//     console.log(req.body);
//     const { file } = req.body;
//     console.log(file);

//     // Save the file
//     const filePath = path.join(process.cwd(), 'public', 'uploads', "file-ollalalala.png");
//     await writeFile(filePath, file.data);

//     console.log('File saved:', filePath);


//     return NextResponse.redirect('/uploads/' + file.name);
// }


import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename =  file.name.replaceAll(" ", "_");
  console.log(filename);
  try {
    await writeFile(
      path.join(process.cwd(), "public/" + filename),
      buffer
    );
    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
};

