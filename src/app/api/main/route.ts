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


