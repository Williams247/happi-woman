import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form } from '@app/components/lib/ui/form';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { FileUploader } from '../../../components/uploader/file-uploader';
import Success from '../modal/Success';
import { useState } from 'react';

const documentSchema = z.object({
  document: z
    .object({
      url: z.string().url().optional(),
      uploading: z.boolean().optional(),
    })
    .optional(),
});

export type documentData = z.infer<typeof documentSchema>;

const Document = () => {
  const handler = useForm<documentData>({
    resolver: zodResolver(documentSchema),
    mode: 'onChange',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = (data: documentData) => {
    console.log('Form submitted:', data);
    setIsModalOpen(true); 
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-center">
        <h1 className="text-[#181E20] lg:text-3xl text-xl font-semibold">
          Document <span className="text-[#006BA6]">Upload</span>
        </h1>
        <p className="text-[#676767] text-base py-1 ">
          Upload all business related documents including <br /> CAC document
        </p>
      </div>

      <Form {...handler}>
        <form
          onSubmit={handler.handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-4 mt-14 w-[55%] max-w-sm"
        >
          <FileUploader name={'document'} />
          <SubmitButton
            className="text-sm py-2.5 rounded-lg w-full mt-8"
            type="submit"
          >
            Continue
          </SubmitButton>
          {isModalOpen && (
            <Success />
          )}
        </form>
      </Form>
    </div>
  );
};

export default Document;
