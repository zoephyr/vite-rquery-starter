import { FileResource } from "../lib/ClassFile"

const files = [
        new FileResource(0,"firstFile", "fileName.png", 100),
        new FileResource(1,"secondFile", "fileName.png", 100),
        new FileResource(2,"thirdFile", "fileName.png", 100),
        new FileResource(3,"fourthFile", "fileName.png", 100),
        new FileResource(4,"fifthFile", "fileName.png", 100),

    ] 
// export function fetchFiles() {
//     return {
//         title: "Data Stream",
//         files: files,
//         fetchTime: Date.now()
//     }
// }

export const fetchFiles = async (query = ""): Promise<FileResource[]> => {
    await new Promise( (resolve) => setTimeout(resolve, 100));
    
    console.log("Fetched Files");

    const filteredFiles = files.filter( 
        (file) => file.title.toLowerCase().includes(query.toLowerCase())
    )

    return [...filteredFiles]
}

export const addFile = async (file: Pick<FileResource, "title">): Promise<FileResource> => {
    await new Promise(
        (resolve) => setTimeout (resolve, 100)
        );
    const newFile = new FileResource(files.length + 1, file.title, `${file.title}.path`, 1000);

    files.push(newFile);

    return newFile;
}