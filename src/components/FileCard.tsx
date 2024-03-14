import { FileResource } from "../lib/ClassFile"

export interface FileCardProps {
    key: string
    file: FileResource
}
export default function FileCard(props: FileCardProps){
    return (
        <div className="flex flex-row items-center">
            <div className="flex text-xl font-bold mr-2">Key: {props.key}</div>
            <div className="flex text-md mr-2">ID: {props.file.id}</div>
            <div className="flex text-md mr-2">Title: {props.file.title}</div>
            <div>Etc</div>
 
        </div>
    )
}