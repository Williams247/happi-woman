export interface NextServerSideSearchParameterTypes {
  params: { slug: string; id: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export type PageParams<
  TP = Record<string, string>,
  TS = Record<string, string | string[] | undefined>
> = {
  params: TP;
  searchParams: TS;
};

export interface ContainerProps {
  onNextStep?: () => void;
  onPrevStep: () => void;
}

export type FileUploadData = {
  url: string;
  uploadUrl: string;
};

export type FileData = { file?: File; url?: string; uploading?: boolean };