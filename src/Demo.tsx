import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import { fetchFiles, addFile } from "./api";
import FileCard from "./components/FileCard";
import { FileResource } from "./lib/ClassFile";
import { useState } from "react";

export default function Demo() {

  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const { data: files, isLoading } = useQuery({
    queryFn: () => fetchFiles(),
    queryKey: ["files"],
  });

  const { mutateAsync: addFileMutation } = useMutation({
    mutationFn: addFile,
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["files"]})
    }
  });

  if (isLoading) {
    return <div> Loading ... </div>;
  }
  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button onClick={async () => {
            try {
                await addFileMutation({title});
                setTitle("");
            } catch (e) {
                console.error(e);
            }
        }}>Add File</button>
      </div>
      <div>
        {files?.map((file: FileResource) => {
          return <FileCard key={String(file.id)} file={file}></FileCard>;
        })}
        <b> React Query Data</b>
      </div>
    </>
  );
}
