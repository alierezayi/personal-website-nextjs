import {
  Section,
  SectionContent,
  SectionHeading,
  SectionSubTitle,
} from "@/app/blog/_components/layouts/section";
import ContactForm from "@/app/blog/_sections/contact/components/forms/contact";
import Info from "@/app/blog/_sections/contact/components/containers/info";

export default function Contact() {
  return (
    <Section name="Contact">
      <SectionHeading>Contact</SectionHeading>
      <SectionSubTitle>Get in touch</SectionSubTitle>
      <SectionContent className="flex gap-5 flex-col md:flex-row justify-between">
        <Info />
        <ContactForm />
      </SectionContent>
    </Section>
  );
}
