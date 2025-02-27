import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContainerProps } from "../../../utils/type";
import { Form } from "@app/components/lib/ui/form";
import { SubmitButton } from "@app/components/lib/form/SubmitButton";
import { TextInput } from "@app/components/lib/form/text-input";
import { useState } from "react";
import TermsAndCondition from "../modal/TermsAndCondition";

const PersonalDetailSchema = z.object({
  full_name: z.string(),
  email: z.string(),
  phone_number: z.string(),
  // identification_type: z.enum(["NIN", "BVN"]),
  identification: z.string(),
});

export type PersonalDetailData = z.infer<typeof PersonalDetailSchema>;

const PersonalDetails = ({ onNextStep }: ContainerProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idType, setIdType] = useState<"NIN" | "BVN">("NIN"); 

  const handler = useForm<PersonalDetailData>({
    resolver: zodResolver(PersonalDetailSchema),
    mode: "onChange",
  });

  const onSubmit = (data: PersonalDetailData) => {
    console.log(data);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="text-center">
        <h1 className="text-[#181E20] lg:text-3xl text-xl font-semibold">
          Get <span className="text-[#006BA6]">Started</span>
        </h1>
        <p className="text-[#676767] text-base py-1">
          Fill up your details to get started
        </p>
      </div>

      <Form {...handler}>
        <form
          onSubmit={handler.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-14 w-[50%] max-w-sm"
        >
          <TextInput name="full_name" label="" placeholder="Full Name" />
          <TextInput name="email" label="" placeholder="Email" />
          <TextInput name="phone_number" label="" placeholder="Phone Number" />

          {/* Radio Inputs for Selection */}
          <div className="flex gap-x-4">
            <div className="flex items-center gap-x-2">
              <input
                type="radio"
                id="nin"
                value="NIN"
                checked={idType === "NIN"}
                onChange={() => setIdType("NIN")}
                className="w-4 h-4"
              />
              <label htmlFor="nin">NIN</label>
            </div>
            <div className="flex items-center gap-x-2">
              <input
                type="radio"
                id="bvn"
                value="BVN"
                checked={idType === "BVN"}
                onChange={() => setIdType("BVN")}
                className="w-4 h-4"
              />
              <label htmlFor="bvn">BVN</label>
            </div>
          </div>

          <TextInput name="identification" label="" placeholder={` ${idType} Number`} />

          <SubmitButton className="text-sm py-2.5 mt-1 rounded-lg w-full" type="submit">
            Continue
          </SubmitButton>

          {isModalOpen && (
            <TermsAndCondition
              onClose={() => setIsModalOpen(false)}
              onAccept={() => {
                setIsModalOpen(false);
                onNextStep && onNextStep();
              }}
            />
          )}
        </form>
      </Form>
    </div>
  );
};

export default PersonalDetails;
